import { NextRequest, NextResponse } from 'next/server';
import { addEnquiry } from '@/lib/enquiries-store';
import { sendOwnerNotificationEmail } from '@/lib/email-service';

// In-memory rate limiting and duplicate submission maps
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const recentSubmissions = new Map<string, number>();

// Sanitize user input against XSS & script injection attacks
function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/[<>"']/g, '') // Remove dangerous chars
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    // Check request payload size (Max 50 KB)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 51200) {
      return NextResponse.json({ error: 'Payload too large.' }, { status: 413 });
    }

    // IP-based Rate Limiting (Max 5 requests per IP per 10 minutes)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || 'anonymous';
    const now = Date.now();
    const rateLimitWindow = 600000; // 10 minutes
    const maxRequestsPerWindow = 5;

    const currentIpData = ipRequestCounts.get(ip);
    if (currentIpData) {
      if (now > currentIpData.resetTime) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + rateLimitWindow });
      } else if (currentIpData.count >= maxRequestsPerWindow) {
        return NextResponse.json(
          { error: 'Too many requests from this IP. Please try again in a few minutes or call us directly.' },
          { status: 429 }
        );
      } else {
        currentIpData.count += 1;
      }
    } else {
      ipRequestCounts.set(ip, { count: 1, resetTime: now + rateLimitWindow });
    }

    const body = await req.json();
    const name = sanitize(body.name);
    const phone = sanitize(body.phone);
    const email = sanitize(body.email);
    const whatsapp = sanitize(body.whatsapp);
    const eventType = sanitize(body.eventType);
    const eventDate = sanitize(body.eventDate);
    const venue = sanitize(body.venue);
    const budget = sanitize(body.budget);
    const message = sanitize(body.message);

    // Strict Server-side Input Validation
    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: 'Please provide a valid full name (2-80 characters).' }, { status: 400 });
    }

    if (!phone || !/^[0-9+\s\-]{10,15}$/.test(phone)) {
      return NextResponse.json({ error: 'Please provide a valid phone number (10-15 digits).' }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!eventType) {
      return NextResponse.json({ error: 'Please select an event category.' }, { status: 400 });
    }

    if (!eventDate) {
      return NextResponse.json({ error: 'Please select your target event date.' }, { status: 400 });
    }

    if (!venue || venue.length < 3 || venue.length > 150) {
      return NextResponse.json({ error: 'Please specify a valid event venue or city.' }, { status: 400 });
    }

    // Prevent Duplicate Submissions (Same phone/email within 2 minutes)
    const submissionKey = `${phone}_${email}_${eventDate}`;
    const lastSubmission = recentSubmissions.get(submissionKey);

    if (lastSubmission && now - lastSubmission < 120000) {
      return NextResponse.json(
        { error: 'An enquiry with these details was recently submitted. Our team is already processing it!' },
        { status: 429 }
      );
    }

    recentSubmissions.set(submissionKey, now);

    // Save to persistent database store safely
    const savedRecord = addEnquiry({
      name,
      phone,
      email,
      whatsapp: whatsapp || phone,
      eventType,
      eventDate,
      venue,
      budget: budget || 'Not specified',
      message
    });

    // Dispatch email notification to owner emails safely
    await sendOwnerNotificationEmail(savedRecord);

    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully! Master Decorator Perumal and the Kalai Decorators team will reach out to you within 2 hours.',
      enquiryId: savedRecord.id
    });

  } catch (error) {
    console.error('Secure processing error:', error);
    return NextResponse.json({ error: 'Internal server error while processing enquiry. Please contact us directly via phone or WhatsApp.' }, { status: 500 });
  }
}
