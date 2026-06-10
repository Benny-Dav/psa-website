import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { getFirebaseDb } from '@/lib/firebase';
import type { AdminEvent } from '@/lib/adminData';

function todayKey() {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0')
  ].join('-');
}

export async function listPublishedEvents() {
  const db = getFirebaseDb();
  if (!db) return [];

  const snapshot = await getDocs(query(collection(db, 'events'), where('isPublished', '==', true), limit(30)));

  return snapshot.docs
    .map((item) => ({ id: item.id, ...item.data() }) as AdminEvent)
    .filter((event) => event.date >= todayKey())
    .sort((first, second) => first.date.localeCompare(second.date));
}
