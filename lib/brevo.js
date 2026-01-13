/**
 * Brevo (Sendinblue) Email Helper
 * Sends transactional emails via Brevo API
 */

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

/**
 * Send an email using Brevo API
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.htmlContent - HTML content of the email
 * @param {string} options.replyTo - Reply-to email address
 * @param {string} options.senderName - Sender display name
 * @returns {Promise<Object>} - API response
 */
export async function sendEmail({ to, subject, htmlContent, replyTo, senderName = 'Sagar Shah Website' }) {
  // Support both old and new env variable names
  const apiKey = process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY;

  if (!apiKey) {
    console.error('BREVO_API_KEY or SENDINBLUE_API_KEY is not configured in .env.local');
    throw new Error('Email service not configured');
  }

  // Use the recipient email as sender (they receive their own notification)
  // This works because Brevo allows sending to verified domains/emails
  const senderEmail = process.env.BREVO_SENDER_EMAIL || to;

  const payload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [{ email: to }],
    subject,
    htmlContent,
  };

  // Only add replyTo if provided
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
 * Generate HTML email template for contact form
 * @param {Object} data - Form data
 * @returns {string} - HTML content
 */
export function generateContactEmailHTML({ name, email, phone, subject, message }) {
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
          <!-- Header -->
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
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Subject -->
              <div style="margin-bottom: 25px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #1e3a5f;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                <p style="margin: 5px 0 0; color: #333; font-size: 18px; font-weight: 600;">${subject || 'No subject'}</p>
              </div>

              <!-- Contact Details -->
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

              <!-- Message -->
              <div style="margin-bottom: 25px;">
                <p style="margin: 0 0 10px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; line-height: 1.6; color: #333;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <!-- Reply Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${subject || 'Your inquiry'}" 
                   style="display: inline-block; padding: 14px 30px; background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  Reply to ${name}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
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
