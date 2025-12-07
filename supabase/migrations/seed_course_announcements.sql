-- Insert dummy data for course announcements
INSERT INTO course_announcements (title, description, course_name, course_url, start_date, end_date, is_active, priority) VALUES
(
  'New AFK Preparation Course Available',
  'Join our comprehensive Assessment of Fundamental Knowledge (AFK) preparation course. Expert instructors, practice questions, and detailed study materials included.',
  'AFK Exam Preparation',
  '/courses/assessment-of-fundamental-knowledge',
  CURRENT_DATE,
  CURRENT_DATE + INTERVAL '30 days',
  true,
  5
),
(
  'ACJ Exam Intensive Workshop',
  'Master the Assessment of Clinical Judgement exam with our intensive workshop. Case-based learning and real exam scenarios.',
  'ACJ Exam Preparation',
  '/courses/assessment-of-clinical-judgement',
  CURRENT_DATE,
  CURRENT_DATE + INTERVAL '45 days',
  true,
  4
),
(
  'INBDE Complete Study Package',
  'Everything you need to pass the Integrated National Board Dental Examination. Comprehensive coverage of all topics.',
  'INBDE Preparation',
  '/courses/nbde',
  CURRENT_DATE,
  CURRENT_DATE + INTERVAL '60 days',
  true,
  3
),
(
  'Practice Questions Database Updated',
  'Over 500 new practice questions added to our database. Test your knowledge and track your progress.',
  'Practice Questions',
  '/courses/dental-exam-practice-questions',
  CURRENT_DATE,
  CURRENT_DATE + INTERVAL '90 days',
  true,
  2
);



