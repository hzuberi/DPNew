import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment of Fundamental Knowledge | DentalPrep.ca",
  description: "Dentalprep.ca - Information about dental board AFK exam",
};

export default function AFKCoursePage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="AFK Exam" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h1 className="font-display text-3xl font-bold mb-6 text-gray-900">
                  AFK (Assessment of Fundamental Knowledge) Exam
                </h1>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    The First Exam an Internationally Qualified Dentist has to pass is Assessment of Fundamental Knowledge. It is not only passing the exam with a score of 75, it is actually achieving a higher score so that chances to get in to the universities for qualifying programs would be bright.
                  </p>
                  <p>
                    With an academic background and 25 years plus teaching experience, we have ability to construct the subject tests and Mock Exams in such an effective way that our students after attempting those feel confident to appear in the AFK Exam being conducted by the NDEB Canada.
                  </p>
                  <p>
                    All these tests and exams are web-based, providing almost similar type of environment as an exam taker faces in the actual exam. It acclimatizes and gives a confidence to the aspirants so that they will not feel lost during the actual AFK exam. Students also get rationale for the correct answers when they review their tests and mock exams.
                  </p>
                  <p>
                    The Course material is constantly updated keeping in view about the trends in the previous exams. Our 24/7 online support and our one-week rigorous revision sessions towards the end of the course give us an edge over the competitors. We do not only teach and train, but we also mentor the course participants.
                  </p>
                  <p>
                    Analysing the progress of the student, we advise them when would be the right time to take the exam. Students do not have to pay additional fee if they postpone their exam for any reason. Our support is continuously available to them till they take the exam.
                  </p>
                  <p>
                    <a
                      href="/pdf/Outline-for-AFK-Preparation-Course.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Download AFK Course Outline →
                    </a>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <img
                      src="/img/pages/home-eight-about1.jpg"
                      alt="AFK Exam Preparation Course"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="/img/pages/home-eight-about2.jpg"
                      alt="Assessment of Fundamental Knowledge"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/courses/assessment-of-clinical-judgement"
                className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#fa5252] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ACJ Exam Info
              </Link>
              <Link
                href="/courses/nbde"
                className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#fa5252] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                INBDE Exam Info
              </Link>
              <Link
                href="/courses-nbde-afk-acj"
                className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

