import { NextRequest, NextResponse } from 'next/server';
import { addEnquiry } from '@/lib/enquiries-store';
import { sendOwnerNotificationEmail } from '@/lib/email-service';

// In-memory duplicate submission prevention map
const recentSubmissions = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, whatsapp, eventType, eventDate, venue, budget, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Please provide a valid full name (min 2 characters).' }, { status: 400 });
    }

    if (!phone || !/^[0-9+\s\-]{10,15}$/.test(phone.trim())) {
      return NextResponse.json({ error: 'Please provide a valid phone number (10-15 digits).' }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!eventType || typeof eventType !== 'string') {
      return NextResponse.json({ error: 'Please select an event category.' }, { status: 400 });
    }

    if (!eventDate) {
      return NextResponse.json({ error: 'Please select your target event date.' }, { status: 400 });
    }

    if (!venue || typeof venue !== 'string' || venue.trim().length < 3) {
      return NextResponse.json({ error: 'Please specify the event venue or city.' }, { status: 400 });
    }

    // Prevent Duplicate Submissions (Same phone/email within 2 minutes)
    const submissionKey = `${phone.trim()}_${email.trim()}_${eventDate}`;
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(submissionKey);

    if (lastSubmission && now - lastSubmission < 120000) {
      return NextResponse.json(
        { error: 'An enquiry with these details was recently submitted. Our team is already processing it!' },
        { status: 429 }
      );
    }

    recentSubmissions.set(submissionKey, now);

    // Save to persistent database store
    const savedRecord = addEnquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      whatsapp: (whatsapp || phone).trim(),
      eventType,
      eventDate,
      venue: venue.trim(),
      budget: budget || 'Not specified',
      message: message ? message.trim() : ''
    });

    // Dispatch email notification to owner emails (Kalaidecorators2026@gmail.com & yw73444@gmail.com)
    await sendOwnerNotificationEmail(savedRecord);

    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully! Master Decorator Perumal and the Kalai Decorators team will reach out to you within 2 hours.',
      enquiryId: savedRecord.id
    });

  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json({ error: 'Internal server error while processing enquiry. Please contact us directly via phone or WhatsApp.' }, { status: 500 });
  }
}
