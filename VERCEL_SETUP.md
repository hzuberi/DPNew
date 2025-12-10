# Vercel Deployment Setup

## Environment Variables

To ensure your Supabase integration works on Vercel, you need to add the following environment variables in your Vercel project settings:

### Required Environment Variables

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Your Supabase project URL
   - Format: `https://xxxxx.supabase.co`
   - Find it in: Supabase Dashboard → Settings → API → Project URL

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Your Supabase anonymous/public key
   - Find it in: Supabase Dashboard → Settings → API → Project API keys → `anon` `public`

3. **SMTP_HOST** (Optional - for contact form)
   - Your SMTP server hostname
   - Example: `smtp.office365.com` or `smtp.gmail.com`

4. **SMTP_PORT** (Optional - for contact form)
   - Your SMTP server port
   - Example: `587` or `465`

5. **SMTP_USER** (Optional - for contact form)
   - Your SMTP username/email

6. **SMTP_PASSWORD** (Optional - for contact form)
   - Your SMTP password/app password

7. **CONTACT_EMAIL** (Optional - for contact form)
   - Email address where contact form submissions will be sent

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Navigate to **Environment Variables** in the left sidebar
4. Click **Add New**
5. Add each variable:
   - **Name**: The variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: The actual value
   - **Environment**: Select which environments to apply to:
     - **Production**: For production deployments
     - **Preview**: For preview deployments (pull requests, branches)
     - **Development**: For local development (optional)
6. Click **Save**
7. **Important**: After adding environment variables, you need to redeploy your application for the changes to take effect

## Redeploy After Adding Variables

After adding environment variables:

1. Go to your project's **Deployments** tab
2. Click the **⋯** (three dots) menu on the latest deployment
3. Select **Redeploy**
4. Or push a new commit to trigger a new deployment

## Verifying Environment Variables

To verify your environment variables are set correctly:

1. Check the Vercel deployment logs for any errors about missing Supabase configuration
2. Open your browser's developer console on the deployed site
3. Look for console errors mentioning "Supabase client not initialized" or "Missing Supabase environment variables"

## Troubleshooting

### Courses Not Loading

If courses are not loading on Vercel:

1. **Check Environment Variables**: Ensure both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
2. **Check Supabase RLS Policies**: Make sure Row Level Security (RLS) policies allow public read access to the `course_announcements` table
3. **Check Network Tab**: Open browser DevTools → Network tab and look for failed requests to Supabase
4. **Check Console Logs**: Look for error messages in the browser console

### Supabase RLS Policy

Make sure your Supabase table has the correct RLS policy. Run this SQL in your Supabase SQL Editor:

```sql
-- Allow public read access to active announcements
CREATE POLICY "Allow public read access to active announcements"
ON course_announcements
FOR SELECT
USING (is_active = true);
```

## Local Development

For local development, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASSWORD=your_app_password
CONTACT_EMAIL=info@dentalprep.ca
```

**Note**: The `.env.local` file is already in `.gitignore` and will not be committed to the repository.

