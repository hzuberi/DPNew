export interface CourseAnnouncement {
  id: string;
  title: string;
  description: string | null;
  course_name: string | null;
  course_url: string | null;
  start_date: string | null; // ISO date string
  end_date: string | null; // ISO date string
  is_active: boolean;
  priority: number;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}



