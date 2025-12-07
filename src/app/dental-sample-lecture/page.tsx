import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Lectures | DentalPrep.ca",
  description: "Dentalprep.ca - Sample lectures on different dentistry topics to give you an idea of our teaching style.",
};

export default function DentalSampleLecturePage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="Sample Lectures" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src="/img/home-eight/film-roll.svg"
                      width="30"
                      height="30"
                      alt="Dentalprep Sample Lecture One icon"
                      className="mr-3"
                    />
                    <h2 className="font-display text-2xl font-bold text-gray-900">Sample Lecture 1</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Temporomandibular disorders (TMD) is the name given to several problems with jaw movement and pain in and around the jaw joints. There are few variants of this problem and every variant has a different clinical presentation. In this lecture questions on these clinical situations are being answered with rationale
                  </p>
                  <Link
                    href="/sample/sample1"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    ...Watch Video →
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src="/img/home-eight/film-roll.svg"
                      width="30"
                      height="30"
                      alt="Dentalprep Sample Lecture Two icon"
                      className="mr-3"
                    />
                    <h2 className="font-display text-2xl font-bold text-gray-900">Sample Lecture 2</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Long Span FPD and optimization of marginal fit with cast and solder technique. When a long span fixed partial denture is fabricated, most of the time it is difficult to obtain the marginal fit. In Board exams questions are being asked about the technique employed to achieve the marginal fit in such situations.
                  </p>
                  <Link
                    href="/sample/sample2"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    ...Watch Video →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <img
                      src="/img/pages/Sample-lecture.jpg"
                      alt="AFK Exam Preparation Course"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="/img/pages/Sample-lecture-2.jpg"
                      alt="Assessment of Fundamental Knowledge"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
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

