# Email Troubleshooting Guide

If your contact form email is not working, follow these steps:

## Step 1: Verify Your Setup

### Check Your .env.local File

Make sure your `.env.local` file in the project root contains all required variables:

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-password-here
CONTACT_EMAIL=info@dentalprep.ca
```

**Important:** 
- No spaces around the `=` sign
- No quotes around values (unless they contain special characters)
- File must be named exactly `.env.local` (not `.env`)

### Restart Your Development Server

After adding or modifying `.env.local`:
1. **Stop** your Next.js server (Ctrl+C)
2. **Start** it again (`npm run dev`)

Environment variables are only loaded when the server starts!

## Step 2: Check Server Logs

When you submit the contact form, check the terminal/console where `npm run dev` is running. Look for:

- ✅ `SMTP Configuration:` - Shows your settings (without password)
- ✅ `SMTP connection verified successfully` - Connection works
- ❌ Any error messages - These will help identify the issue

## Step 3: Common Issues & Solutions

### Issue: "Email service not configured"

**Solution:**
- Verify `.env.local` file exists in the project root
- Check variable names are exact: `SMTP_USER`, `SMTP_PASSWORD` (case-sensitive)
- Restart the development server

### Issue: "Authentication failed" or "Invalid login"

**Possible causes:**
1. **Wrong password** - Double-check your email password
2. **Two-factor authentication** - You need an App Password
   - Go to Microsoft account security settings
   - Generate an App Password
   - Use that App Password instead of your regular password
3. **Wrong email format** - Use full email: `info@dentalprep.ca` (not just `info`)

**Solution:**
```env
# Use App Password if 2FA is enabled
SMTP_PASSWORD=your-app-password-here
```

### Issue: "Could not connect to email server" or "ECONNREFUSED"

**Possible causes:**
1. Wrong SMTP host
2. Wrong port
3. Firewall blocking connection
4. GoDaddy-specific SMTP settings

**Solution 1: Try alternative SMTP settings**

For Microsoft 365 at GoDaddy, try these variations:

```env
# Option 1: Office 365
SMTP_HOST=smtp.office365.com
SMTP_PORT=587

# Option 2: Outlook
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587

# Option 3: With SSL
SMTP_HOST=smtp.office365.com
SMTP_PORT=465
```

**Solution 2: Check GoDaddy-specific settings**

GoDaddy may require different SMTP settings. Check:
- Your GoDaddy email control panel
- GoDaddy's documentation for SMTP settings
- Or contact GoDaddy support for exact SMTP configuration

### Issue: "Connection timeout" or "ETIMEDOUT"

**Solution:**
- Check your internet connection
- Verify SMTP host is accessible
- Try a different port (587 vs 465)
- Check if your firewall/antivirus is blocking the connection

### Issue: Email sends but not received

**Solution:**
1. Check spam/junk folder
2. Verify `CONTACT_EMAIL` matches your actual email
3. Check email server logs
4. Try sending to a different email address to test

## Step 4: Test with Different SMTP Settings

If standard settings don't work, try these combinations:

### Configuration 1: Office 365 (TLS)
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
```

### Configuration 2: Outlook (TLS)
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Configuration 3: Office 365 (SSL)
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=465
```

### Configuration 4: GoDaddy-specific
Contact GoDaddy support for your specific SMTP settings. They may provide:
- A different SMTP host
- Specific port requirements
- Authentication method differences

## Step 5: Debug Mode

To see more detailed error messages:

1. The API route already logs detailed errors in development mode
2. Check your browser's Developer Console (F12) for frontend errors
3. Check the server terminal for backend errors

## Step 6: Verify Environment Variables Are Loaded

Create a test API route to verify (temporary):

1. Create `src/app/api/test-env/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasHost: !!process.env.SMTP_HOST,
    hasUser: !!process.env.SMTP_USER,
    hasPassword: !!process.env.SMTP_PASSWORD,
    host: process.env.SMTP_HOST,
    user: process.env.SMTP_USER,
    // Don't log password!
  });
}
```

2. Visit `http://localhost:3000/api/test-env`
3. Check if variables are loaded (all should be `true`)

**Remember to delete this test route after debugging!**

## Step 7: Contact GoDaddy Support

If nothing works, contact GoDaddy support and ask for:
- SMTP server hostname
- SMTP port number
- Authentication method
- Any special requirements for Microsoft 365 email
- Whether SMTP access is enabled for your account

## Quick Checklist

Before asking for help, verify:

- [ ] `.env.local` file exists in project root
- [ ] All environment variables are set correctly
- [ ] Development server was restarted after adding env vars
- [ ] Email address is correct (full email, not username)
- [ ] Password is correct (or App Password if 2FA enabled)
- [ ] Checked server logs for errors
- [ ] Tried alternative SMTP hosts/ports
- [ ] Checked spam folder

## Need More Help?

If you're still having issues:
1. Check the error message in the browser
2. Check server logs in your terminal
3. Share the error message (without your password!) for further assistance



