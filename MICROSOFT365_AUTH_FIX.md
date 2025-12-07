# Fixing Microsoft 365 Authentication Error

If you're getting "Email authentication failed", follow these steps:

## Step 1: Check Your Email Format

In your `.env.local`, make sure you're using the **full email address**:

✅ **Correct:**
```env
SMTP_USER=info@dentalprep.ca
```

❌ **Wrong:**
```env
SMTP_USER=info
SMTP_USER=info@
```

## Step 2: Use an App Password (IMPORTANT!)

If you have **Two-Factor Authentication (2FA)** enabled on your Microsoft 365 account, you **MUST** use an App Password instead of your regular password.

### How to Create an App Password:

1. Go to https://account.microsoft.com/security
2. Sign in with your Microsoft account
3. Click on **"Advanced security options"**
4. Scroll down to **"App passwords"**
5. Click **"Create a new app password"**
6. Give it a name (e.g., "Dentalprep Contact Form")
7. Copy the generated password (it will look like: `abcd-efgh-ijkl-mnop`)
8. Use this App Password in your `.env.local`:

```env
SMTP_PASSWORD=abcd-efgh-ijkl-mnop
```

**Note:** App passwords are long strings with hyphens. They don't have spaces.

## Step 3: Verify Password in .env.local

Make sure there are:
- ✅ No extra spaces
- ✅ No quotes around the password
- ✅ No line breaks in the password

```env
# ✅ Correct format
SMTP_PASSWORD=your-password-here

# ❌ Wrong formats
SMTP_PASSWORD="your-password-here"
SMTP_PASSWORD= your-password-here 
SMTP_PASSWORD='your-password-here'
```

## Step 4: Try Alternative SMTP Settings

For GoDaddy-hosted Microsoft 365, try these settings:

### Option 1: Office 365 (Recommended)
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-app-password
```

### Option 2: Outlook
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=info@dentalprep.ca
SMTP_PASSWORD=your-app-password
```

### Option 3: GoDaddy-specific SMTP (Check with GoDaddy)

GoDaddy sometimes uses different SMTP settings. Contact GoDaddy support or check:
- Your GoDaddy email control panel
- GoDaddy's documentation for Microsoft 365 SMTP

They might provide settings like:
```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
# or
SMTP_HOST=relay-hosting.secureserver.net
SMTP_PORT=25
```

## Step 5: Enable SMTP Access (If Needed)

Some Microsoft 365 accounts have SMTP disabled by default. Check:

1. Go to Microsoft 365 admin center
2. Navigate to **Exchange admin center**
3. Check **Mail flow** settings
4. Ensure SMTP is enabled for your account

## Step 6: Verify Your Credentials Work

Test if your email/password works by:

1. Try logging into Outlook/Office 365 webmail with the same credentials
2. If login fails, fix the password first
3. If 2FA is enabled, create an App Password (see Step 2)

## Step 7: Check Server Logs

After updating your `.env.local`:

1. **Restart your development server** (very important!)
2. Submit the form again
3. Check the terminal where `npm run dev` is running
4. Look for these logs:
   - `SMTP Configuration:` - Shows your settings
   - Any authentication errors with more details

## Common Issues

### Issue: "Invalid login" or "Authentication failed"

**Solution:**
- Verify email is full address: `info@dentalprep.ca`
- Use App Password if 2FA is enabled
- Remove any spaces/quotes from password
- Restart server after changing `.env.local`

### Issue: Still failing after App Password

**Solution:**
- Wait a few minutes after creating App Password (it may take time to activate)
- Double-check you copied the entire App Password (including hyphens)
- Try creating a new App Password

### Issue: GoDaddy-specific problems

**Solution:**
- Contact GoDaddy support for your specific SMTP settings
- They may need to enable SMTP access for your account
- They might provide different SMTP host/port settings

## Quick Checklist

- [ ] Using full email address (info@dentalprep.ca, not just "info")
- [ ] Using App Password if 2FA is enabled
- [ ] No spaces or quotes in .env.local values
- [ ] Restarted development server after changes
- [ ] Checked server logs for detailed error
- [ ] Verified email/password works in webmail login

## Still Not Working?

1. **Check server terminal** for detailed error messages
2. **Contact GoDaddy support** and ask:
   - "What are the SMTP settings for my Microsoft 365 email?"
   - "Is SMTP enabled for my account?"
   - "Do I need special configuration for SMTP access?"

3. **Try a test email** - Send yourself a test email from the contact form with these settings to see if the error message changes



