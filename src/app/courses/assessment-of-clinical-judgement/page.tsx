import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment of Clinical Judgement | DentalPrep.ca",
  description: "Dentalprep.ca - Information about dental board ACJ exam",
};

export default function ACJCoursePage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="ACJ Exam" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h1 className="font-display text-3xl font-bold mb-6 text-gray-900">
                  ACJ (Assessment of Clinical Judgement) Exam
                </h1>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    The Assessment of Clinical Judgement Exam is the exam one can take after passing AFK Exam. Over the period of time this exam has become quite difficult one. Not only theoretical knowledge, but clinical experience also matters to pass this exam.
                  </p>
                  <p>
                    Apart from online lectures, we provide discussions on clinical case scenarios to polish the abilities of an Internationally Qualified Dentist to identify the oral lesions, to diagnose the cases and to take the decisions for treatment of that particular case.
                  </p>
                  <p>
                    Practice cases and radiology quizzes are web-based so that course attendees will get acclimatize to the environment and they feel comfortable in attempting the ACJ Exam conducted by NDEB Canada. The study material and lectures are being continuously updated keeping in view the trends of the recent exams.
                  </p>
                  <p>
                    Having 17 years of clinical and academic experience help us in devising a concrete program to pass this exam. During the course we monitor the progress of the course attendees and guide them about the right time to take this exam. If due to any reason any course participant is not able to appear in the exam, they can continue with us till the time they will be appearing the exam without paying additional fee.
                  </p>
                  <p>
                    There are Four web-based Mock Exams and with every case scenario the full overview of the case is available to justify the answers and to educate the test taker. Our 24/7 support is available to all the course participants and they have an access to the recorded video lectures as well.
                  </p>
                  <p>
                    <a
                      href="/pdf/Outline-for-ACJ-Preparation-Course.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Download ACJ Course Outline →
                    </a>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <img
                      src="/img/pages/ACJ-Exam-Info.jpg"
                      alt="ACJ Exam Preparation Course"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="/img/pages/ACJ-Exam.jpg"
                      alt="Assessment of Clinical Judgement"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/courses-nbde-afk-acj"
                className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#fa5252] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Check All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

