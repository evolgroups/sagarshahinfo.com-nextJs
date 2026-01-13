import { NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHTML } from '@/lib/brevo';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Verify Cloudflare Turnstile token
 */
async function verifyTurnstile(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('TURNSTILE_SECRET_KEY not configured - skipping verification');
    return true; // Skip in development if not configured
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

/**
 * POST /api/contact
 * Protected by Cloudflare Turnstile + Honeypot + Time-based check
 * Sends email via Brevo
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, turnstileToken, formLoadTime, website } = body;

    // === SECURITY CHECK 1: Honeypot ===
    // If honeypot field is filled, it's a bot
    if (website) {
      console.log('Bot detected: Honeypot field filled');
      // Return success to not alert the bot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // === SECURITY CHECK 2: Time-based ===
    // If form was submitted too quickly (< 3 seconds), likely a bot
    const timeDiff = Date.now() - (formLoadTime || 0);
    if (timeDiff < 3000) {
      console.log('Bot detected: Form submitted too quickly');
      return NextResponse.json(
        { error: 'Please take your time filling out the form.' },
        { status: 400 }
      );
    }

    // === SECURITY CHECK 3: Turnstile ===
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Security verification required. Please complete the captcha.' },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstile(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // === VALIDATION ===
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get recipient email from environment
    const contactEmail = process.env.CONTACT_EMAIL || 'hello@sagarshahinfo.com';

    // Generate email HTML
    const htmlContent = generateContactEmailHTML({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send email via Brevo
    await sendEmail({
      to: contactEmail,
      subject: `New Contact: ${subject || 'Website Inquiry'} - from ${name}`,
      htmlContent,
      replyTo: email,
      senderName: 'Sagar Shah Website',
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error.message);
    
    // Return specific error in development, generic in production
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Failed to send message. Please try again later.';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
