# Gmail SMTP Setup Guide

## Quick Setup

Update your `.env.local` file with these Gmail SMTP settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info.dentalprep@gmail.com
SMTP_PASSWORD=your-gmail-app-password
CONTACT_EMAIL=info.dentalprep@gmail.com
```

## Important: Gmail Requires App Password

Gmail **requires** an App Password (not your regular Gmail password) for SMTP access. Follow these steps:

### Step 1: Enable 2-Step Verification

1. Go to https://myaccount.google.com/security
2. Sign in with `info.dentalprep@gmail.com`
3. Under "Signing in to Google", click **"2-Step Verification"**
4. Follow the prompts to enable 2-Step Verification
   - You'll need to verify your phone number
   - This is required before you can create an App Password

### Step 2: Create an App Password

1. Go to https://myaccount.google.com/apppasswords
2. Sign in with `info.dentalprep@gmail.com`
3. Select **"Mail"** as the app
4. Select **"Other (Custom name)"** as the device
5. Enter a name like: **"Dentalprep Contact Form"**
6. Click **"Generate"**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - Remove the spaces when using it (use: `abcdefghijklmnop`)

### Step 3: Update .env.local

Add the App Password to your `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info.dentalprep@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=info.dentalprep@gmail.com
```

**Important:**
- Use the App Password (16 characters, no spaces)
- Do NOT use your regular Gmail password
- No quotes, no spaces around the `=` sign

### Step 4: Restart Your Server

After updating `.env.local`:
1. Stop your development server (Ctrl+C)
2. Start it again: `npm run dev`

### Step 5: Test

Submit the contact form and check if the email is received at `info.dentalprep@gmail.com`.

## Alternative: If 2-Step Verification is Not Enabled

If you don't want to enable 2-Step Verification, you can try:

1. Go to https://myaccount.google.com/lesssecureapps
2. Enable "Less secure app access" (if available)
3. Use your regular Gmail password

**Note:** Google is phasing out "Less secure app access", so App Passwords are the recommended approach.

## Troubleshooting

### "Invalid login" or "Authentication failed"

- Make sure you're using an **App Password**, not your regular password
- Verify 2-Step Verification is enabled
- Check that you removed spaces from the App Password
- Ensure `.env.local` has no quotes around values

### "Connection timeout"

- Check your internet connection
- Verify `smtp.gmail.com` is accessible
- Try port 465 instead of 587:

```env
SMTP_PORT=465
```

### "Email not received"

- Check spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check server logs for errors

## Gmail SMTP Settings Summary

- **SMTP Host:** `smtp.gmail.com`
- **Port:** `587` (TLS) or `465` (SSL)
- **Username:** Full Gmail address (`info.dentalprep@gmail.com`)
- **Password:** App Password (16 characters, no spaces)
- **Security:** TLS/SSL required

## Testing Your Configuration

After setup, you can test by visiting:
`http://localhost:3000/api/test-smtp`

This will verify your SMTP connection and show any errors.



