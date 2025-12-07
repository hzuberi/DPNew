-- Create course_announcements table
CREATE TABLE IF NOT EXISTS course_announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  course_name VARCHAR(255),
  course_url VARCHAR(500),
  start_date DATE,
  end_date DATE,
  is_active BOOLEAN DEFAULT true,
  priority INTEGER DEFAULT 0, -- Higher number = higher priority
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for active announcements
CREATE INDEX IF NOT EXISTS idx_course_announcements_active ON course_announcements(is_active, priority DESC);

-- Create index for date range queries
CREATE INDEX IF NOT EXISTS idx_course_announcements_dates ON course_announcements(start_date, end_date);

-- Enable Row Level Security
ALTER TABLE course_announcements ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to announcements" ON course_announcements;
DROP POLICY IF EXISTS "Allow public read access to active announcements" ON course_announcements;
DROP POLICY IF EXISTS "Allow read access to all announcements" ON course_announcements;
DROP POLICY IF EXISTS "Allow insert for course announcements" ON course_announcements;
DROP POLICY IF EXISTS "Allow update for course announcements" ON course_announcements;
DROP POLICY IF EXISTS "Allow delete for course announcements" ON course_announcements;

-- Create policy to allow public read access to all announcements
-- Note: Application logic filters by is_active for public display
-- In production, you should restrict admin operations based on authentication
CREATE POLICY "Allow public read access to announcements"
  ON course_announcements
  FOR SELECT
  USING (true);

-- Create policy to allow insert (you may want to restrict this based on authentication)
CREATE POLICY "Allow insert for course announcements"
  ON course_announcements
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow update (you may want to restrict this based on authentication)
CREATE POLICY "Allow update for course announcements"
  ON course_announcements
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Create policy to allow delete (you may want to restrict this based on authentication)
CREATE POLICY "Allow delete for course announcements"
  ON course_announcements
  FOR DELETE
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if it exists, then create it
DROP TRIGGER IF EXISTS update_course_announcements_updated_at ON course_announcements;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_course_announcements_updated_at
  BEFORE UPDATE ON course_announcements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

