import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses We Offer | DentalPrep.ca",
  description: "Dentalprep.ca - For information about AFK, ACJ or INBDE exams visit our site.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="Courses" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AFK Course */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href="/courses/assessment-of-fundamental-knowledge">
                  <img
                    src="/img/home-eight/AFK-Exam-Intro.jpg"
                    alt="AFK Exam Preparation Course | Dentalprep.ca"
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link href="/courses/assessment-of-fundamental-knowledge">
                    <h3 className="font-display text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      AFK EXAM COURSE
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                    <span>Duration</span>
                    <span className="font-semibold">5 Months</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The First Exam an Internationally Qualified Dentist has to pass is Assessment of Fundamental Knowledge. It is not only passing the exam with a score of 75, it is actually achieving a higher score so that chances to get in to the universities for qualifying programs would be bright.
                  </p>
                  <Link
                    href="/courses/assessment-of-fundamental-knowledge"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              {/* ACJ Course */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href="/courses/assessment-of-clinical-judgement">
                  <img
                    src="/img/home-eight/ACJ-Exam-Intro.jpg"
                    alt="ACJ Exam Preparation Course | NDEB AFK Course"
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link href="/courses/assessment-of-clinical-judgement">
                    <h3 className="font-display text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      ACJ EXAM COURSE
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                    <span>Duration</span>
                    <span className="font-semibold">2 Months</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The Assessment of Clinical Judgement Exam is the exam one can take after passing AFK Exam. Over the period of time this exam has become quite difficult one. Not only theoretical knowledge, but clinical experience also matters to pass this exam.
                  </p>
                  <Link
                    href="/courses/assessment-of-clinical-judgement"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              {/* INBDE Course */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href="/courses/nbde">
                  <img
                    src="/img/home-eight/INBDE-Exam-Intro.jpg"
                    alt="INBDE Exam Preparation Course | Dentalprep.ca"
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link href="/courses/nbde">
                    <h3 className="font-display text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      INBDE Exam Course
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                    <span>Duration</span>
                    <span className="font-semibold">2 Months</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    INBDE is being conducted by JCNDE USA and it replaces the NBDE Parts I and II. This exam assists dental boards in determining the qualifications of individuals who seek licensure to practice dentistry. The content of the exam is from the biomedical, behavioral, and clinical sciences.
                  </p>
                  <Link
                    href="/courses/nbde"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

