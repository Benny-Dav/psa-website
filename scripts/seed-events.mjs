import { existsSync, readFileSync } from 'node:fs';

const envPath = new URL('../.env.local', import.meta.url);

if (!existsSync(envPath)) {
  console.error('Missing .env.local. Copy .env.example and add Firebase values first.');
  process.exit(1);
}

const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const [key, ...value] = line.split('=');
      const rawValue = value.join('=').trim();
      const unquotedValue = rawValue.replace(/^(['"])(.*)\1$/, '$2');
      return [key, unquotedValue];
    })
);

const requiredKeys = ['PUBLIC_FIREBASE_API_KEY', 'PUBLIC_FIREBASE_PROJECT_ID'];
const missingKeys = requiredKeys.filter((key) => !env[key]);

if (missingKeys.length) {
  console.error(`Missing Firebase env values: ${missingKeys.join(', ')}`);
  process.exit(1);
}

if (!env.SEED_ADMIN_EMAIL || !env.SEED_ADMIN_PASSWORD) {
  console.error('Missing SEED_ADMIN_EMAIL or SEED_ADMIN_PASSWORD in .env.local.');
  console.error('Add the Firebase admin email/password locally, then run npm run seed:events again.');
  process.exit(1);
}

const apiKey = env.PUBLIC_FIREBASE_API_KEY;
const projectId = env.PUBLIC_FIREBASE_PROJECT_ID;
const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

const seedEvents = [
  {
    title: 'Prophetic Encounter Night',
    date: '2026-06-21',
    time: '6:00 PM',
    eventType: 'in-person',
    venue: 'Accra, Ghana',
    description: 'An evening of prayer, worship, prophetic instruction, and personal spiritual renewal.',
    isPublished: true
  },
  {
    title: 'Kingdom Leadership Session',
    date: '2026-07-05',
    time: '7:30 PM',
    eventType: 'virtual',
    venue: 'Online Broadcast',
    description: 'A focused teaching session for young leaders, ministers, and professionals seeking spiritual clarity.',
    isPublished: true
  },
  {
    title: 'Prayer and Counsel Gathering',
    date: '2026-07-26',
    time: '4:00 PM',
    eventType: 'in-person',
    venue: 'Venue to be announced',
    description: 'A smaller gathering for intercession, counsel, and prophetic direction for families and individuals.',
    isPublished: true
  }
];

async function signIn() {
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: env.SEED_ADMIN_EMAIL,
      password: env.SEED_ADMIN_PASSWORD,
      returnSecureToken: true
    })
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error?.message ?? 'Unable to sign in for seeding.');
  }

  return payload.idToken;
}

function fieldsFor(event) {
  const now = new Date().toISOString();

  return {
    title: { stringValue: event.title },
    date: { stringValue: event.date },
    time: { stringValue: event.time },
    eventType: { stringValue: event.eventType },
    venue: { stringValue: event.venue },
    description: { stringValue: event.description },
    isPublished: { booleanValue: event.isPublished },
    createdAt: { timestampValue: now },
    updatedAt: { timestampValue: now }
  };
}

async function request(path, token, init = {}) {
  const response = await fetch(path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(init.headers ?? {})
    }
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = payload.error?.message ?? `Request failed with ${response.status}`;
    const details = Object.keys(payload).length ? `\n${JSON.stringify(payload, null, 2)}` : '';
    throw new Error(`${message}${details}`);
  }

  return payload;
}

async function eventExists(event, token) {
  const payload = await request(`${baseUrl}:runQuery`, token, {
    method: 'POST',
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: 'events' }],
        where: {
          compositeFilter: {
            op: 'AND',
            filters: [
              {
                fieldFilter: {
                  field: { fieldPath: 'title' },
                  op: 'EQUAL',
                  value: { stringValue: event.title }
                }
              },
              {
                fieldFilter: {
                  field: { fieldPath: 'date' },
                  op: 'EQUAL',
                  value: { stringValue: event.date }
                }
              }
            ]
          }
        },
        limit: 1
      }
    })
  });

  return Array.isArray(payload) && payload.some((item) => item.document);
}

async function createEvent(event, token) {
  await request(`${baseUrl}/events`, token, {
    method: 'POST',
    body: JSON.stringify({ fields: fieldsFor(event) })
  });
}

try {
  const token = await signIn();
  let created = 0;
  let skipped = 0;

  for (const event of seedEvents) {
    if (await eventExists(event, token)) {
      skipped += 1;
      continue;
    }

    await createEvent(event, token);
    created += 1;
  }

  console.log(`Seed complete. Created: ${created}. Skipped existing: ${skipped}.`);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
    if ('cause' in error && error.cause) {
      console.error(error.cause);
    }
  } else {
    console.error(error);
  }
  process.exit(1);
}
