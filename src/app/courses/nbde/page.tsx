import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INBDE Exam Info | DentalPrep.ca",
  description: "Dentalprep.ca - Information about dental board INBDE exam",
};

export default function INBDECoursePage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="INBDE Exam" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h1 className="font-display text-3xl font-bold mb-6 text-gray-900">
                  INBDE (Integrated National Board of Dental Examination) Exam Course
                </h1>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    INBDE is being conducted by JCNDE USA and it replaces the NBDE Parts I and II. This exam assists dental boards in determining the qualifications of individuals who seek licensure to practice dentistry. The content of the exam is from the biomedical, behavioral, and clinical sciences.
                  </p>
                  <p>
                    It will be a three month program with Thrice a week online lecture. All the study material in the form of Word Document, PDF files and Power Point presentations will be provided. Course participants will have access to recorded video lectures as well. There will be subject tests and more than 2000 questions will be provided during the course. All these questions are constructed following the guidelines provided by Exam Taking Authorities on their website. Towards the end of the course there will be Two Mock Exams.
                  </p>
                  <p>
                    All the answers will be provided with rationale. This will build the confidence of the student. All the tests and Mocks are web-based exams. This will also help the course participants in getting acclimatized to the environment of the exam.
                  </p>
                  <p>
                    During the course we not only teach and train the students, but we also monitor their progress based on their performance in the subject tests and mock exams. We guide our students about the proper time to take the exam based on their preparation.
                  </p>
                  <p>
                    Though the course is for 3 months, but a student can continue with us for the next batch without paying additional fee if they are not able to appear in the exam for any reason.
                  </p>
                  <p>
                    <a
                      href="/pdf/Integrated-national-board-dental-examination.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Download INBDE Course Outline →
                    </a>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <img
                      src="/img/pages/INDEB-Exam.jpg"
                      alt="INBDE Exam Preparation Course"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="/img/pages/INDEB-Exam-2.jpg"
                      alt="INBDE Exam Preparation Course"
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

