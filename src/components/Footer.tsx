import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-script text-3xl font-semibold text-white mb-4 drop-shadow-md">Dentalprep.ca</h3>
            <p className="text-sm">
              Making dental education accessible, engaging, and colorful.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses-nbde-afk-acj" className="hover:text-primary-400 transition-colors">All Courses</Link></li>
              <li><Link href="/courses/assessment-of-fundamental-knowledge" className="hover:text-primary-400 transition-colors">AFK Course</Link></li>
              <li><Link href="/courses/assessment-of-clinical-judgement" className="hover:text-primary-400 transition-colors">ACJ Course</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/dentzine-dental-magzine" className="hover:text-primary-400 transition-colors">Dentzine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dental-sample-lecture" className="hover:text-primary-400 transition-colors">Sample Lectures</Link></li>
              <li><Link href="/dental-exam-practice-questions" className="hover:text-primary-400 transition-colors">Practice Questions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dentalprep.ca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



