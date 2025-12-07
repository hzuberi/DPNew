# Fix: SMTP Authentication Disabled Error

## The Problem

You're getting this error:
```
SmtpClientAuthentication is disabled for the Tenant
```

This means **SMTP authentication is disabled** in your Microsoft 365 account settings. This is a security feature that's often disabled by default.

## Solution Options

Since you're using **GoDaddy-hosted Microsoft 365**, you have a few options:

### Option 1: Enable SMTP AUTH in GoDaddy (Recommended)

1. **Log into your GoDaddy account**
2. Go to **Microsoft 365 Admin Center** (or **Email & Office Dashboard**)
3. Navigate to **Settings** → **Email** → **Email Client Settings**
4. Look for **"SMTP AUTH"** or **"Authenticated SMTP"** setting
5. **Enable SMTP AUTH** for your email account
6. Save the changes
7. Wait a few minutes for changes to propagate
8. Try the contact form again

**Note:** If you can't find this setting, contact GoDaddy support and ask them to:
- "Enable SMTP AUTH for my Microsoft 365 email account"
- "Enable authenticated SMTP for info@dentalprep.ca"

### Option 2: Use GoDaddy's SMTP Servers Instead

If GoDaddy provides their own SMTP servers, use those instead:

Update your `.env.local`:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

Or try:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

### Option 3: Use Microsoft Graph API (Advanced)

This requires OAuth2 setup and is more complex. Not recommended unless you're comfortable with API authentication.

### Option 4: Use a Third-Party Email Service

Consider using services like:
- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **Resend** (free tier available)
- **AWS SES** (very cheap)

These services are often easier to set up and more reliable than SMTP.

## Quick Fix: Contact GoDaddy Support

**The fastest solution is to contact GoDaddy support:**

1. Call GoDaddy support or use their chat
2. Tell them: **"I need to enable SMTP authentication for my Microsoft 365 email account (info@dentalprep.ca) so I can send emails from my website contact form."**
3. They should be able to enable it for you
4. Once enabled, wait 10-15 minutes and try again

## After Enabling SMTP AUTH

Once SMTP authentication is enabled:

1. **Restart your development server**
2. **Test the contact form again**
3. It should work with your current `.env.local` settings

## Current Working Configuration (After SMTP AUTH is Enabled)

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

## Alternative: Use GoDaddy SMTP (If Available)

If GoDaddy provides SMTP access, try:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

## Summary

**The issue:** SMTP authentication is disabled in your Microsoft 365 tenant.

**The fix:** Enable SMTP AUTH through GoDaddy's Microsoft 365 admin panel or contact GoDaddy support to enable it.

**Quick action:** Contact GoDaddy support and ask them to enable SMTP authentication for your email account.



