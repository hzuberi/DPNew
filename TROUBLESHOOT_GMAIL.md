# Troubleshooting: Emails Not Received

If emails are not being received at `info@dentalprep.ca`, check these:

## Step 1: Verify Your .env.local Configuration

Make sure your `.env.local` file looks like this:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info.dentalprep@gmail.com
SMTP_PASSWORD=your-gmail-app-password
CONTACT_EMAIL=info@dentalprep.ca
```

**Important:**
- `SMTP_USER` = Gmail address to send FROM (info.dentalprep@gmail.com)
- `CONTACT_EMAIL` = Email address to send TO (info@dentalprep.ca)
- Make sure you're using a Gmail App Password (not regular password)

## Step 2: Check Server Logs

When you submit the contact form, check your server terminal for:

1. **Success message:**
   ```
   SMTP connection verified successfully
   Email sent successfully
   ```

2. **Error messages:**
   - Look for any error details in the terminal
   - Check what error code you're getting

## Step 3: Check Common Issues

### Issue: "Invalid login" or "Authentication failed"
- Verify you're using a Gmail App Password (not regular password)
- Make sure 2-Step Verification is enabled on your Gmail account
- Check that App Password has no spaces

### Issue: Email sends but not received
- **Check spam/junk folder** at info@dentalprep.ca
- Verify the email address is correct: `info@dentalprep.ca`
- Check if emails from Gmail are being blocked/filtered
- Wait a few minutes - emails sometimes have delays

### Issue: "Less secure app access" error
- Gmail requires App Passwords now (not "less secure apps")
- Make sure you created an App Password at: https://myaccount.google.com/apppasswords
- Enable 2-Step Verification first

## Step 4: Test SMTP Connection

Visit this URL to test your SMTP setup:
```
http://localhost:3000/api/test-smtp
```

This will show you:
- If SMTP credentials are configured
- If connection works
- Detailed error messages if it fails

## Step 5: Verify Email Address

Make sure `info@dentalprep.ca`:
- Is a valid, working email address
- Can receive emails from Gmail addresses
- Is not blocking emails from Gmail

## Step 6: Check Email Server Status

If emails are sending successfully but not arriving:
- Check spam/junk folder
- Verify the email server for dentalprep.ca is working
- Check if there are any email filters blocking Gmail
- Contact your email provider if needed

## Quick Checklist

- [ ] `.env.local` has correct Gmail App Password
- [ ] `CONTACT_EMAIL=info@dentalprep.ca` in .env.local
- [ ] Restarted development server after changes
- [ ] No errors in server terminal when submitting form
- [ ] Checked spam/junk folder at info@dentalprep.ca
- [ ] Tested SMTP connection at `/api/test-smtp`

## Still Not Working?

1. **Check server terminal** for the exact error message
2. **Visit** `http://localhost:3000/api/test-smtp` to test connection
3. **Verify** the contact form shows success message after submission
4. **Check** if emails are arriving at the Gmail inbox (info.dentalprep@gmail.com) instead

Share the error message from your server terminal or the test endpoint for further help!



