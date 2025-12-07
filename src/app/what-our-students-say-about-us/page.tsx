import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | DentalPrep.ca",
  description: "Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "Dr Naghman is an amazing teacher. He puts a lot of hard work and dedication into his lectures. He is methodical and concise, covers every aspect of the exam and is always available to clarify any doubts and confusions that students may have. He makes sure that you are 100% prepared for the exam. I would recommend Dr Naghman Zuberi's AFK preparatory courses with absolute confidence!!",
      author: "Saadia Haider",
    },
    {
      text: "Cannot thank Dr Naghman enough for being such a wonderful teacher and providing all his support for clearing my NBDE II exam. From his meticulously planned, well explained and highly informative lectures to his friendly way of teaching and easy banter with the study group made the learning all the more interesting. Would highly recommend my fellow colleagues in the same boat to be steered successfully by Dr Naghman toward their goals.",
      author: "Paramjeet Kaur",
    },
    {
      text: "Dr. Naghman was the most Knowledgeable tutor I ever had, and he is always there for his students. He is so approachable. No matter what time of the day is, he always responded promptly. Naghman is the main reason I went back to finish my Dental boards. He is very encouraging, and his deep knowledge about the subject really makes your life easy to understand the topic.",
      author: "Pallavi Sharma",
    },
    {
      text: "Excellent tutor who goes above and beyond to ensure that his students are well-equipped with the materials being taught in class. He never hesitates to give additional resources and feedback to his students and treats us all equally. He would encourage his students to present by pointing out their strengths and speak in the kindest manner to those who were struggling to start. He would reach out in a respectful and kind manner. He goes out his way to help.",
      author: "Nida e Zainab",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="Testimonials" />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                What Our Students Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <h3 className="font-semibold text-lg text-gray-900">{testimonial.author}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

