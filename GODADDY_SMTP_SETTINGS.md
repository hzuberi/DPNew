# GoDaddy Microsoft 365 SMTP Settings

For Microsoft 365 email hosted at GoDaddy, try these specific SMTP configurations:

## Option 1: Standard Microsoft 365 (Try First)

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=info@dentalprep.ca
```

## Option 2: Outlook SMTP

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=info@dentalprep.ca
```

## Option 3: GoDaddy Workspace Email (If Different)

If your email is GoDaddy Workspace (not Microsoft 365), use:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

Or:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

## Option 4: Alternative GoDaddy SMTP

```env
SMTP_HOST=relay-hosting.secureserver.net
SMTP_PORT=25
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-email-password
CONTACT_EMAIL=info@dentalprep.ca
```

## Important Notes:

1. **Microsoft 365 at GoDaddy** - Usually uses standard Office 365 SMTP (`smtp.office365.com`)
2. **App Password Required** - If 2FA is enabled, you MUST use an App Password
3. **Full Email Address** - Always use full email: `info@dentalprep.ca` (not just "info")
4. **Contact GoDaddy** - If none work, contact GoDaddy support with:
   - "What are the SMTP settings for my Microsoft 365 email account?"
   - "Is SMTP access enabled for my email?"

## Testing Your Configuration

1. Visit: `http://localhost:3000/api/test-smtp` (after restarting server)
2. This will test your SMTP connection and show detailed error messages
3. Check what error it gives you - this will help identify the exact issue

## Common Authentication Errors:

- **Error 535** = Authentication failed (wrong password or need App Password)
- **EAUTH** = Authentication error
- **Invalid login** = Wrong email/password combination

Make sure to:
- Use App Password if 2FA is enabled
- Use full email address (info@dentalprep.ca)
- No spaces or quotes in .env.local
- Restart server after changing .env.local



