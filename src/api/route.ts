import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your email provider (use env variables for security)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content sent to YOU
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // Your email here
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Auto-reply sent to the USER
    await transporter.sendMail({
      from: `"Your Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out — we’ve received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Your Team</p>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Check your SMTP settings.' },
      { status: 500 }
    );
  }
}