# Email Setup Guide

This guide explains how to configure the contact form to send emails to your Microsoft 365 email account at GoDaddy.

## Overview

The contact form uses SMTP to send emails via your Microsoft 365 email account. When a user submits the contact form, it sends an email to `info@dentalprep.ca` (or the email you configure).

## Setup Instructions

### 1. Get Your SMTP Settings

For Microsoft 365 email hosted at GoDaddy, you'll need these SMTP settings:

- **SMTP Server:** `smtp.office365.com` or `smtp-mail.outlook.com`
- **Port:** `587` (TLS) or `465` (SSL)
- **Encryption:** TLS/STARTTLS (for port 587) or SSL (for port 465)
- **Authentication:** Required
- **Username:** Your full email address (e.g., `info@dentalprep.ca`)
- **Password:** Your email account password

### 2. Configure Environment Variables

Create or update the `.env.local` file in the root of your project with the following variables:

```env
# SMTP Configuration for Microsoft 365/GoDaddy
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password-here

# Email recipient (where contact form emails will be sent)
CONTACT_EMAIL=info@dentalprep.ca
```

### 3. Important Security Notes

⚠️ **Never commit `.env.local` to version control!** This file is already in `.gitignore`.

⚠️ **For Production:** Consider using:
- App-specific passwords (if your email provider supports it)
- Environment variables in your hosting platform (Vercel, Netlify, etc.)
- A more secure authentication method if available

### 4. Alternative: Use App Password

If you have two-factor authentication enabled on your Microsoft 365 account, you may need to use an App Password instead of your regular password:

1. Go to your Microsoft account security settings
2. Create an App Password
3. Use that App Password in the `SMTP_PASSWORD` environment variable

### 5. Testing

To test the contact form:

1. Fill out the form on the `/contact-us` page
2. Submit it
3. Check your email inbox at `info@dentalprep.ca`
4. Check the server logs for any errors

## Troubleshooting

### Common Issues

#### "Authentication failed" error
- Verify your email and password are correct
- Try using an App Password if 2FA is enabled
- Check if your account allows SMTP access

#### "Connection timeout" error
- Verify the SMTP host is correct: `smtp.office365.com`
- Check if your firewall is blocking port 587 or 465
- Try using port 465 with SSL instead of 587 with TLS

#### "Email not received"
- Check spam/junk folder
- Verify the `CONTACT_EMAIL` environment variable is set correctly
- Check server logs for errors

### Alternative SMTP Settings

If `smtp.office365.com` doesn't work, try:

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

Or with SSL:

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=465
```

### Debugging

To see detailed error messages in development, check your console/terminal where the Next.js server is running. The API route will log errors there.

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform:
   - **Vercel:** Go to Project Settings → Environment Variables
   - **Netlify:** Go to Site Settings → Environment Variables
   - **Other platforms:** Check their documentation

2. Use the same variable names:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `CONTACT_EMAIL`

3. Redeploy your application after adding environment variables

## Need Help?

If you continue to have issues:

1. Check GoDaddy's documentation for Microsoft 365 SMTP settings
2. Contact GoDaddy support for specific SMTP configuration details
3. Review the error logs in your server console



