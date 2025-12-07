import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This is a test endpoint to verify SMTP configuration
// DELETE THIS FILE AFTER TESTING - IT'S ONLY FOR DEBUGGING
export async function GET() {
  try {
    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@dentalprep.ca';

    // Check if credentials are set
    if (!smtpUser || !smtpPass) {
      return NextResponse.json({
        success: false,
        error: 'SMTP credentials not configured',
        hasUser: !!smtpUser,
        hasPassword: !!smtpPass,
        config: {
          host: smtpHost,
          port: smtpPort,
          user: smtpUser || 'NOT SET',
          recipient: recipientEmail,
        }
      }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser.trim(),
        pass: smtpPass.trim(),
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
      requireTLS: smtpPort === 587,
      logger: true,
      debug: true,
    });

    // Test connection
    let verifyResult = 'Not tested';
    try {
      await transporter.verify();
      verifyResult = 'SUCCESS - Connection verified!';
    } catch (verifyError: any) {
      verifyResult = `FAILED - ${verifyError.message}`;
      return NextResponse.json({
        success: false,
        error: 'SMTP verification failed',
        verifyError: verifyError.message,
        errorCode: verifyError.code,
        errorResponse: verifyError.response,
        config: {
          host: smtpHost,
          port: smtpPort,
          user: smtpUser,
          recipient: recipientEmail,
          secure: smtpPort === 465,
        },
        suggestion: verifyError.message?.includes('Invalid login') || verifyError.code === 'EAUTH'
          ? 'Authentication failed. Check your email/password or use App Password if 2FA is enabled.'
          : 'Check SMTP settings or contact your email provider.',
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'SMTP configuration is working!',
      verifyResult,
      config: {
        host: smtpHost,
        port: smtpPort,
        user: smtpUser,
        recipient: recipientEmail,
        secure: smtpPort === 465,
      },
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: 'Unexpected error',
      message: error.message,
      errorCode: error.code,
    }, { status: 500 });
  }
}



