# Admin Course Management

## Access the Admin Page

Navigate to `/admin/courses` to manage course announcements.

## Features

- **View All Announcements**: See all course announcements (active and inactive)
- **Add New Announcement**: Click "Add New Announcement" button to create a new course announcement
- **Edit Announcement**: Click "Edit" on any announcement to modify it
- **Delete Announcement**: Click "Delete" to remove an announcement (with confirmation)
- **Activate/Deactivate**: Click the status badge (Active/Inactive) to toggle the announcement status

## Important Notes

1. **Only Active Announcements Show on Hero**: The hero section automatically filters and displays only announcements where `is_active = true`

2. **RLS Policies**: The current setup allows public access to all operations. In production, you should:
   - Add authentication to the admin page
   - Restrict INSERT, UPDATE, DELETE operations to authenticated admin users only
   - Keep SELECT public for active announcements only

3. **Priority**: Higher priority numbers appear first. Use this to control the order of announcements.

4. **Date Range**: Start and end dates are optional but can be used to schedule announcements.

## Security Recommendations

For production, update the RLS policies in Supabase to:

```sql
-- Remove public insert/update/delete policies
DROP POLICY IF EXISTS "Allow insert for course announcements";
DROP POLICY IF EXISTS "Allow update for course announcements";
DROP POLICY IF EXISTS "Allow delete for course announcements";

-- Add authenticated-only policies
CREATE POLICY "Allow authenticated insert"
  ON course_announcements FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update"
  ON course_announcements FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete"
  ON course_announcements FOR DELETE
  TO authenticated
  USING (true);
```

Then add authentication to your admin page using Supabase Auth.



