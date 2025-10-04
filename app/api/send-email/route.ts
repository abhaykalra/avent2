import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM || 'no-reply@your-domain.com';
    const emailTo = process.env.EMAIL_TO || 'recipient@example.com';
    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send to admin inbox
    const { error: adminError } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      subject: `New Contact Form Submission from ${name}`,
      html: adminHtml,
      replyTo: email,
    });
    if (adminError) {
      console.error('Resend admin email error:', adminError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Autoresponder to submitter
    const autoReplyHtml = `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out. We've received your message and will get back to you shortly.</p>
      <hr />
      <p><strong>Your message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p>— Avent Team</p>
    `;

    const { error: autoError } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: 'We received your message',
      html: autoReplyHtml,
      replyTo: emailTo,
    });
    if (autoError) {
      console.error('Resend autoresponder error:', autoError);
      // Do not fail the whole request; log and continue
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

