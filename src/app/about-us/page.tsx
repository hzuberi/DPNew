import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dentalprep.ca",
  description: "Dentalprep.ca - Know more how we are helping dentists to go through licencing process in Canada",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="About Us" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <img 
                      src="/img/home-eight/image.png" 
                      alt="Dr. Naghman Zuberi" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img 
                      src="/img/home-eight/about-image1.png" 
                      alt="AFK Preparation Course | NDEB Online Course" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <img 
                      src="/img/home-eight/about-image2.png" 
                      alt="AFK Online Course | NDEB Exam Preparation" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="font-display text-4xl font-bold mb-2 text-gray-900">Dr. Naghman Zuberi</h1>
                  <p className="text-lg text-gray-600">(Dental Courses Instructor)</p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Dr. Naghman Zuberi has more than 20 years of experience in Clinical Dentistry and was also an academic being an Associate Professor in various dental schools back home.
                  </p>
                  <p>
                    He was an External Examiner to Seven Dental Schools and was involved in the Development of Question Bank for different universities. He had attended several workshops being conducted for the training in construction of Multiple Choice Questions. This gives him an edge over other instructors as he has an insight of the MCQs, and he imparts that knowledge to his students that how to analyze and solve these types of questions.
                  </p>
                  <p>
                    Dr. Zuberi was also actively involved in Practicing Oral Surgery and Orthodontics. He was teaching Oral Surgery, Oral Medicine, Oral Pathology, and Oral Biology. He has a sound background in these subjects.
                  </p>
                  <p>
                    Being a part of few research studies and clinical trials being conducted by various authorities back home, Dr. Zuberi has a good grasp over the topics of Biostatistics, Research Methodologies and Epidemiology.
                  </p>
                  <p>
                    In the Last 11 Years, using Social Media, Dr. Zuberi has developed a community of Internationally Qualified Dentists who want to pursue their career in North America. This helps in interaction and sharing the knowledge regarding the steps to get qualified for practising dentistry in the United States and Canada. For those who want to appear in Dental Boards Exams, Dr Zuberi conducts online Teaching and Training courses since 2010.
                  </p>
                  <p>
                    Since then, his students' performance is outstanding. In some of the batches of these aspirants the passing percentage was 100 percent in the first attempt. Most of his students either joined and graduated from different dental schools of North America or they cleared the Direct Licensing Exams of NDEB Canada.
                  </p>
                  <p>
                    He has a good grasp on almost all the subjects of Basic as well as Clinical Sciences. He always keeps himself abreast of the latest developments in the field of dentistry by going through Dental articles being published in different Dental Journals regularly.
                  </p>
                  <p>
                    He himself passed all these exams in the First attempt with very good percentage and is a role model and source of inspiration for his students.
                  </p>
                </div>

                <div className="mt-8 space-y-6 border-t pt-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Speciality</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>General Dentistry Practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>Oral Surgery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>Orthodontics</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Experience</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>17 years of teaching experience from Back home in various fields of dentistry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>11 years of experience in conducting online training courses for various dental board exams</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">→</span>
                        <span>20 years of Experience in Clinical Dentistry</span>
                      </li>
                    </ul>
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

