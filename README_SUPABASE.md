# Supabase Setup for Course Announcements

## 1. Create the Table in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase/migrations/create_course_announcements.sql`
4. Click **Run** to execute the SQL

Alternatively, you can run the migration using the Supabase CLI if you have it installed.

## 2. Environment Variables

### Local Development

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Vercel Deployment

**IMPORTANT**: For Vercel deployments, you must add these environment variables in your Vercel project settings:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add `NEXT_PUBLIC_SUPABASE_URL` with your Supabase project URL
3. Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Supabase anon key
4. **Redeploy** your application after adding the variables

See `VERCEL_SETUP.md` for detailed instructions.

## 3. Install Dependencies

Run the following command to install the Supabase client:

```bash
npm install
```

## 4. Table Structure

The `course_announcements` table includes:

- `id` - UUID primary key
- `title` - Announcement title (required)
- `description` - Full description text
- `course_name` - Name of the course
- `course_url` - Link to the course page
- `start_date` - When the announcement should start showing
- `end_date` - When the announcement should stop showing
- `is_active` - Boolean to enable/disable announcements
- `priority` - Integer for ordering (higher = more important)
- `created_at` - Timestamp
- `updated_at` - Auto-updated timestamp

## 5. Row Level Security

The table has RLS enabled with a policy that allows public read access to active announcements only.

## 6. Seed Dummy Data

To add sample announcements to the table:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase/migrations/seed_course_announcements.sql`
4. Click **Run** to execute the SQL

This will insert 4 sample course announcements that will appear in the hero section.

## 7. Usage

The `CourseAnnouncements` component is already integrated into the hero section. It will automatically:
- Fetch active announcements from Supabase
- Display them in the white div on the hero section
- Show loading state while fetching
- Handle empty states gracefully

You can also use the helper functions directly in `src/lib/supabase.ts`:

```typescript
import { getActiveCourseAnnouncements } from '@/lib/supabase';

const announcements = await getActiveCourseAnnouncements();
```

