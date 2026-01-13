/**
 * Cloudflare Pages Function - Contact Form Handler
 * Handles POST requests to /api/contact
 */

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Verify Cloudflare Turnstile token
 */
async function verifyTurnstile(token, env) {
  const secretKey = env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('TURNSTILE_SECRET_KEY not configured - skipping verification');
    return true; // Skip if not configured
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
 * Send email via Brevo API
 */
async function sendEmail({ to, subject, htmlContent, replyTo, senderName = 'Sagar Shah Website' }, env) {
  const apiKey = env.BREVO_API_KEY || env.SENDINBLUE_API_KEY;

  if (!apiKey) {
    console.error('BREVO_API_KEY or SENDINBLUE_API_KEY is not configured');
    throw new Error('Email service not configured');
  }

  const senderEmail = env.BREVO_SENDER_EMAIL || to;

  const payload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [{ email: to }],
    subject,
    htmlContent,
  };

  if (replyTo) {
    payload.replyTo = { email: replyTo };
  }

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Brevo API error:', error);
    throw new Error(error.message || 'Failed to send email');
  }

  return response.json();
}

/**
 * Generate HTML email template
 */
function generateContactEmailHTML({ name, email, phone, subject, message }) {
  const timestamp = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0; color: #a8c5e2; font-size: 14px;">
                ${timestamp}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <div style="margin-bottom: 25px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #1e3a5f;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                <p style="margin: 5px 0 0; color: #333; font-size: 18px; font-weight: 600;">${subject || 'No subject'}</p>
              </div>
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 14px;">Name:</span>
                    <span style="color: #333; font-weight: 600; float: right;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 14px;">Email:</span>
                    <a href="mailto:${email}" style="color: #1e3a5f; font-weight: 600; float: right; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 14px;">Phone:</span>
                    <a href="tel:${phone}" style="color: #1e3a5f; font-weight: 600; float: right; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
              </table>
              <div style="margin-bottom: 25px;">
                <p style="margin: 0 0 10px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; line-height: 1.6; color: #333;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${subject || 'Your inquiry'}" 
                   style="display: inline-block; padding: 14px 30px; background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Reply to ${name}
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #999; font-size: 12px;">
                This email was sent from the contact form at sagarshahinfo.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Cloudflare Pages Function Handler
 * Export onRequestPost for POST requests
 */
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, phone, subject, message, turnstileToken, formLoadTime, website } = body;

    // === SECURITY CHECK 1: Honeypot ===
    if (website) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // === SECURITY CHECK 2: Time-based ===
    const timeDiff = Date.now() - (formLoadTime || 0);
    if (timeDiff < 3000) {
      return new Response(
        JSON.stringify({ error: 'Please take your time filling out the form.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // === SECURITY CHECK 3: Turnstile ===
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ error: 'Security verification required. Please complete the captcha.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const isValidToken = await verifyTurnstile(turnstileToken, context.env);
    if (!isValidToken) {
      return new Response(
        JSON.stringify({ error: 'Security verification failed. Please try again.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // === VALIDATION ===
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get recipient email from environment
    const contactEmail = context.env.CONTACT_EMAIL || 'hello@sagarshahinfo.com';

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
    }, context.env);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error.message);
    
    const errorMessage = 'Failed to send message. Please try again later.';
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
