import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import { getFirebaseDb } from '@/lib/firebase';

export type AdminEvent = {
  id?: string;
  title: string;
  date: string;
  time: string;
  eventType: 'virtual' | 'in-person';
  venue: string;
  description: string;
  isPublished: boolean;
  flyerUrl?: string;
  flyerStoragePath?: string;
  flyerContentType?: string;
  status?: 'draft' | 'published' | 'archived';
};

export type CalendarSlot = {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  label?: string;
  status: 'available' | 'blocked' | 'disabled';
};

export type CalendarDay = {
  id?: string;
  date: string;
  status: 'available' | 'blocked';
  times: string[];
  updatedAt?: unknown;
};

export type BookingSettings = {
  availabilityMode: 'open' | 'availability' | 'paused';
  updatedAt?: unknown;
};

export type BookingRequest = {
  id?: string;
  date: string;
  slot: string;
  fullName?: string;
  whatsapp?: string;
  reason?: string;
  status: 'pending' | 'pending_whatsapp' | 'sent_whatsapp' | 'confirmed' | 'completed' | 'cancelled';
  createdAt?: unknown;
};

export type GalleryItem = {
  id?: string;
  imageUrl: string;
  storagePath?: string;
  altText: string;
  caption: string;
  sortOrder: number;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type Venue = {
  id?: string;
  name: string;
  eventType: AdminEvent['eventType'];
  createdAt?: unknown;
  updatedAt?: unknown;
};

function requireDb() {
  const db = getFirebaseDb();
  if (!db) {
    throw new Error('Firebase is not configured. Add values to .env.local first.');
  }
  return db;
}

export async function listEvents() {
  const snapshot = await getDocs(query(collection(requireDb(), 'events'), orderBy('date', 'asc'), limit(20)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as AdminEvent[];
}

export async function countPublishedEvents() {
  const snapshot = await getCountFromServer(query(collection(requireDb(), 'events'), where('isPublished', '==', true)));
  return snapshot.data().count;
}

export async function createEvent(event: AdminEvent) {
  return addDoc(collection(requireDb(), 'events'), {
    ...event,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function updateEvent(id: string, event: Partial<AdminEvent>) {
  return updateDoc(doc(requireDb(), 'events', id), {
    ...event,
    updatedAt: serverTimestamp()
  });
}

export async function deleteEvent(id: string) {
  return deleteDoc(doc(requireDb(), 'events', id));
}

export async function listVenues() {
  const snapshot = await getDocs(query(collection(requireDb(), 'venues'), limit(80)));
  return snapshot.docs
    .map((item) => ({ id: item.id, ...item.data() }) as Venue)
    .sort((first, second) => first.name.localeCompare(second.name));
}

export async function saveVenue(name: string, eventType: AdminEvent['eventType']) {
  const trimmedName = name.trim();
  if (!trimmedName) return;

  const venueId = trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (!venueId) return;

  return setDoc(
    doc(requireDb(), 'venues', `${eventType}-${venueId}`),
    {
      name: trimmedName,
      eventType,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function listSlots() {
  const snapshot = await getDocs(query(collection(requireDb(), 'calendarSlots'), orderBy('date', 'asc'), limit(30)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as CalendarSlot[];
}

export async function createSlot(slot: CalendarSlot) {
  return addDoc(collection(requireDb(), 'calendarSlots'), {
    ...slot,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function updateSlot(id: string, slot: Partial<CalendarSlot>) {
  return updateDoc(doc(requireDb(), 'calendarSlots', id), {
    ...slot,
    updatedAt: serverTimestamp()
  });
}

export async function deleteSlot(id: string) {
  return deleteDoc(doc(requireDb(), 'calendarSlots', id));
}

export async function listCalendarDays() {
  const snapshot = await getDocs(query(collection(requireDb(), 'calendarDays'), orderBy('date', 'asc'), limit(90)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as CalendarDay[];
}

export async function listPublicCalendarDays() {
  const db = getFirebaseDb();
  if (!db) return [];

  const snapshot = await getDocs(query(collection(db, 'calendarDays'), orderBy('date', 'asc'), limit(90)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as CalendarDay[];
}

export async function saveCalendarDay(day: CalendarDay) {
  return setDoc(
    doc(requireDb(), 'calendarDays', day.date),
    {
      date: day.date,
      status: day.status,
      times: day.times,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function getBookingSettings() {
  const snapshot = await getDoc(doc(requireDb(), 'settings', 'booking'));
  if (!snapshot.exists()) {
    return { availabilityMode: 'open' } satisfies BookingSettings;
  }

  return snapshot.data() as BookingSettings;
}

export async function updateBookingSettings(settings: BookingSettings) {
  return setDoc(
    doc(requireDb(), 'settings', 'booking'),
    {
      ...settings,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function listBookingRequests() {
  const snapshot = await getDocs(query(collection(requireDb(), 'bookingRequests'), orderBy('createdAt', 'desc'), limit(30)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as BookingRequest[];
}

export async function countBookingRequests() {
  const snapshot = await getCountFromServer(collection(requireDb(), 'bookingRequests'));
  return snapshot.data().count;
}

export async function createBookingRequest(request: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>) {
  return addDoc(collection(requireDb(), 'bookingRequests'), {
    ...request,
    status: 'pending_whatsapp',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function updateBookingRequest(id: string, status: BookingRequest['status']) {
  return updateDoc(doc(requireDb(), 'bookingRequests', id), {
    status,
    updatedAt: serverTimestamp()
  });
}

export async function listGalleryItems() {
  const snapshot = await getDocs(query(collection(requireDb(), 'galleryItems'), orderBy('sortOrder', 'desc'), limit(80)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as GalleryItem[];
}

export async function listPublicGalleryItems() {
  const db = getFirebaseDb();
  if (!db) return [];

  const snapshot = await getDocs(query(collection(db, 'galleryItems'), orderBy('sortOrder', 'desc'), limit(80)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as GalleryItem[];
}

export async function createGalleryItem(item: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>) {
  return addDoc(collection(requireDb(), 'galleryItems'), {
    ...item,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function deleteGalleryItem(id: string) {
  return deleteDoc(doc(requireDb(), 'galleryItems', id));
}
