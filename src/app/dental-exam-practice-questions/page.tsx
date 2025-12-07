import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Exam Practice Questions | DentalPrep.ca",
  description: "Dentalprep.ca - Here are some practice questions for AFK, ACJ and INDBE exams",
};

export default function PracticeQuestionsPage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="Practice Questions" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="/img/home-eight/test.svg" 
                  alt="AFK Exam Preparation | AFK Practice Questions"
                  className="mr-3"
                  width="40"
                  height="40"
                />
                <h1 className="font-display text-3xl font-bold text-gray-900">AFK Practice Exam</h1>
              </div>
              <p className="text-gray-700 mb-4">
                Our self assessment web based test prepares you to appear in the real exam with confidence. This computer base test is closest to the real exam. The questions are divided according to the different subjects to cover all the important topics of AFK exam.
              </p>
              <a
                href="http://webdemo.dentalprep.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                Take Practice Test →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

