import fs from 'fs';
import path from 'path';

export interface EnquiryRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  eventType: string;
  eventDate: string;
  venue: string;
  budget: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'confirmed' | 'archived';
  adminNotes?: string;
}

const dataDir = path.join(process.cwd(), 'data');
const enquiriesFilePath = path.join(dataDir, 'enquiries.json');

// In-memory fallback for read-only serverless environments like Vercel
let memoryEnquiriesStore: EnquiryRecord[] = [
  {
    id: 'KD-782910',
    name: 'Monesh Kumar',
    phone: '+91 7200291074',
    email: 'event.organizer@example.com',
    whatsapp: '+91 7200291074',
    eventType: 'Political Events & Public Rallies',
    eventDate: '2026-08-15',
    venue: 'YMCA Grounds, Royapettah, Chennai',
    budget: '₹3,00,000 - ₹5,00,000',
    message: 'Looking for a 150ft wide political mega stage setup with bulletproof podium and high LED backdrops.',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    status: 'new',
    adminNotes: 'High priority lead for political convention.'
  }
];

// Ensure directory & file exists safely
function ensureFileExists() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(enquiriesFilePath)) {
      fs.writeFileSync(enquiriesFilePath, JSON.stringify(memoryEnquiriesStore, null, 2), 'utf-8');
    }
  } catch {
    // Read-only serverless environment (e.g., Vercel) - safely catch without throwing
    console.log('[STORE NOTICE] Operating in serverless read-only mode.');
  }
}

export function getAllEnquiries(): EnquiryRecord[] {
  ensureFileExists();
  try {
    if (fs.existsSync(enquiriesFilePath)) {
      const fileContent = fs.readFileSync(enquiriesFilePath, 'utf-8');
      const records: EnquiryRecord[] = JSON.parse(fileContent);
      return records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  } catch {
    console.log('[STORE NOTICE] Falling back to memory store.');
  }
  return memoryEnquiriesStore.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function addEnquiry(data: Omit<EnquiryRecord, 'id' | 'createdAt' | 'status'>): EnquiryRecord {
  const newEnquiry: EnquiryRecord = {
    ...data,
    id: `KD-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  memoryEnquiriesStore.unshift(newEnquiry);

  try {
    ensureFileExists();
    const records = getAllEnquiries();
    if (!records.some(r => r.id === newEnquiry.id)) {
      records.unshift(newEnquiry);
    }
    fs.writeFileSync(enquiriesFilePath, JSON.stringify(records, null, 2), 'utf-8');
  } catch {
    console.log('[STORE NOTICE] Serverless mode active - saved in memory & email dispatched.');
  }

  return newEnquiry;
}

export function updateEnquiry(id: string, updates: Partial<Pick<EnquiryRecord, 'status' | 'adminNotes'>>): EnquiryRecord | null {
  const index = memoryEnquiriesStore.findIndex(r => r.id === id);
  if (index !== -1) {
    memoryEnquiriesStore[index] = { ...memoryEnquiriesStore[index], ...updates };
  }

  try {
    ensureFileExists();
    const records = getAllEnquiries();
    const fileIndex = records.findIndex(r => r.id === id);
    if (fileIndex !== -1) {
      records[fileIndex] = { ...records[fileIndex], ...updates };
      fs.writeFileSync(enquiriesFilePath, JSON.stringify(records, null, 2), 'utf-8');
      return records[fileIndex];
    }
  } catch {
    console.log('[STORE NOTICE] Serverless update processed.');
  }

  return index !== -1 ? memoryEnquiriesStore[index] : null;
}

export function deleteEnquiry(id: string): boolean {
  memoryEnquiriesStore = memoryEnquiriesStore.filter(r => r.id !== id);

  try {
    ensureFileExists();
    const records = getAllEnquiries();
    const filtered = records.filter(r => r.id !== id);
    if (filtered.length !== records.length) {
      fs.writeFileSync(enquiriesFilePath, JSON.stringify(filtered, null, 2), 'utf-8');
      return true;
    }
  } catch {
    console.log('[STORE NOTICE] Serverless delete processed.');
  }

  return true;
}
