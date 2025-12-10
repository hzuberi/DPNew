import { createClient } from '@supabase/supabase-js';
import type { CourseAnnouncement } from '@/types/course-announcement';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
  });
  if (typeof window === 'undefined') {
    // Server-side: log more details
    console.error('Supabase configuration error:');
    console.error('- NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'MISSING');
    console.error('- NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'MISSING');
    console.error('Please check your environment variables in Vercel or .env.local file');
  }
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Get active course announcements
export async function getActiveCourseAnnouncements(): Promise<CourseAnnouncement[]> {
  if (!supabase) {
    console.error('Supabase client not initialized. Check environment variables.');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('course_announcements')
      .select('*')
      .eq('is_active', true)
      .order('priority', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching course announcements:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return [];
    }

    console.log('Fetched announcements:', data?.length || 0);
    return data || [];
  } catch (err) {
    console.error('Exception fetching course announcements:', err);
    return [];
  }
}

// Get course announcements within date range
export async function getCourseAnnouncementsByDateRange(
  startDate?: string,
  endDate?: string
): Promise<CourseAnnouncement[]> {
  if (!supabase) {
    console.error('Supabase client not initialized. Check environment variables.');
    return [];
  }

  try {
    let query = supabase
      .from('course_announcements')
      .select('*')
      .eq('is_active', true);

    if (startDate) {
      query = query.gte('start_date', startDate);
    }

    if (endDate) {
      query = query.lte('end_date', endDate);
    }

    const { data, error } = await query
      .order('priority', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching course announcements:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception fetching course announcements:', err);
    return [];
  }
}

// Create a new course announcement (admin only)
export async function createCourseAnnouncement(
  data: Omit<CourseAnnouncement, 'id' | 'created_at' | 'updated_at'>
): Promise<CourseAnnouncement> {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data: result, error } = await supabase
    .from('course_announcements')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error creating course announcement:', error);
    throw error;
  }

  return result;
}

// Update a course announcement (admin only)
export async function updateCourseAnnouncement(
  id: string,
  data: Partial<Omit<CourseAnnouncement, 'id' | 'created_at' | 'updated_at'>>
): Promise<CourseAnnouncement> {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data: result, error } = await supabase
    .from('course_announcements')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating course announcement:', error);
    throw error;
  }

  return result;
}

// Delete a course announcement (admin only)
export async function deleteCourseAnnouncement(id: string): Promise<void> {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { error } = await supabase
    .from('course_announcements')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting course announcement:', error);
    throw error;
  }
}
