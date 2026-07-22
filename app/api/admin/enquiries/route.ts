import { NextRequest, NextResponse } from 'next/server';
import { getAllEnquiries, updateEnquiry, deleteEnquiry } from '@/lib/enquiries-store';

function isAuthorized(req: NextRequest): boolean {
  const cookie = req.cookies.get('kalai_admin_token');
  const authHeader = req.headers.get('authorization');
  return cookie?.value === 'authenticated_perumal_admin_session' || authHeader === 'Bearer kalai2026';
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
  }

  const enquiries = getAllEnquiries();
  return NextResponse.json({ success: true, count: enquiries.length, enquiries });
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    const { id, status, adminNotes } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Enquiry ID is required.' }, { status: 400 });
    }

    const updated = updateEnquiry(id, { status, adminNotes });

    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch {
    return NextResponse.json({ error: 'Failed updating enquiry.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Enquiry ID is required.' }, { status: 400 });
    }

    const deleted = deleteEnquiry(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Enquiry not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Enquiry deleted.' });
  } catch {
    return NextResponse.json({ error: 'Failed deleting enquiry.' }, { status: 500 });
  }
}
