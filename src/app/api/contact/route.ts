import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || 'info.dentalprep@gmail.com'; // Gmail address to send from
    const smtpPass = process.env.SMTP_PASSWORD; // Your Gmail App Password
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@dentalprep.ca'; // Where emails will be sent

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured');
      console.log('SMTP_USER exists:', !!smtpUser);
      console.log('SMTP_PASSWORD exists:', !!smtpPass);
      return NextResponse.json(
        { error: 'Email service not configured. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    // Log configuration (without password) for debugging
    console.log('SMTP Configuration:');
    console.log('  Host:', smtpHost);
    console.log('  Port:', smtpPort);
    console.log('  User:', smtpUser);
    console.log('  Recipient:', recipientEmail);
    console.log('  Secure:', smtpPort === 465);

    // Create transporter using SMTP
    // Microsoft 365/GoDaddy specific configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser.trim(), // Remove any whitespace
        pass: smtpPass.trim(), // Remove any whitespace
      },
      tls: {
        rejectUnauthorized: false, // Accept self-signed certificates
        minVersion: 'TLSv1.2',
        ciphers: 'SSLv3',
      },
      requireTLS: smtpPort === 587,
      logger: process.env.NODE_ENV === 'development',
      debug: process.env.NODE_ENV === 'development',
    } as any);

    // Verify connection with better error handling
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError.message);
      throw new Error(`SMTP connection failed: ${verifyError.message}`);
    }

    // Email content with improved headers to avoid spam
    const mailOptions = {
      from: `"Dentalprep.ca Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      // Additional headers to improve deliverability
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'X-Mailer': 'Dentalprep.ca Contact Form',
        'List-Unsubscribe': `<mailto:${recipientEmail}?subject=unsubscribe>`,
        'Precedence': 'bulk',
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #ff6b6b; margin-top: 0; font-size: 24px;">New Contact Form Submission</h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #ff6b6b;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
              ${phone ? `<p style="margin: 10px 0;"><strong style="color: #333;">Phone:</strong> <span style="color: #666;">${phone}</span></p>` : ''}
              <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> <span style="color: #666;">${subject}</span></p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; font-size: 18px;">Message:</h3>
              <p style="color: #666; line-height: 1.8; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This email was sent from the contact form on <a href="https://dentalprep.ca" style="color: #0066cc;">dentalprep.ca</a>
              </p>
              <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
                You can reply directly to this email to contact ${name} at ${email}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on dentalprep.ca
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error: any) {
    // Log full error details to server console
    console.error('=== EMAIL ERROR DETAILS ===');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    console.error('Error responseCode:', error.responseCode);
    console.error('Error command:', error.command);
    console.error('Full error:', JSON.stringify(error, null, 2));
    console.error('===========================');
    
    // More detailed error messages
    let errorMessage = 'Failed to send email';
    let errorDetails = error.message || 'Unknown error';
    
    // Check for specific authentication errors
    const errorMsgLower = error.message?.toLowerCase() || '';
    const errorResponse = error.response || '';
    const errorResponseLower = errorResponse.toString().toLowerCase();
    
    // Check for SMTP AUTH disabled error
    if (errorMsgLower.includes('smtpclientauthentication is disabled') ||
        errorMsgLower.includes('smtp_auth_disabled') ||
        errorMsgLower.includes('authentication unsuccessful') && errorMsgLower.includes('disabled')) {
      errorMessage = 'SMTP authentication is disabled for your email account. Please enable SMTP AUTH in your GoDaddy Microsoft 365 settings or contact GoDaddy support.';
      errorDetails = 'SMTP AUTH is disabled - needs to be enabled in Microsoft 365 admin settings';
    } else if (errorMsgLower.includes('invalid login') || 
        errorMsgLower.includes('authentication failed') ||
        errorMsgLower.includes('invalid credentials') ||
        errorMsgLower.includes('535') || // SMTP error code for auth failure
        errorResponseLower.includes('535') ||
        error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email and password.';
      errorDetails = `Auth failed: ${error.message || error.response || 'Unknown auth error'}`;
    } else if (error.message?.includes('ECONNREFUSED') || error.message?.includes('ETIMEDOUT')) {
      errorMessage = 'Could not connect to email server. Please check SMTP settings.';
      errorDetails = 'Connection error - verify SMTP_HOST and SMTP_PORT';
    } else if (error.message?.includes('certificate')) {
      errorMessage = 'SSL/TLS certificate error. Please check SMTP configuration.';
      errorDetails = 'Certificate error';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorDetails : undefined,
        errorCode: error.code,
        smtpResponse: error.response,
      },
      { status: 500 }
    );
  }
}

