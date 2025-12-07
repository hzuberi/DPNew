import Link from "next/link";
import CourseAnnouncements from "@/components/CourseAnnouncements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-12 md:pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-gray-900" style={{ aspectRatio: '16/9', minHeight: '470px' }}>
        {/* Background Image with Darker Blue Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/img/home-eight/Dentalprep-banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center -50px',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Darker Blue Overlay to match hero section colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/80 via-blue-300/75 to-blue-400/80"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center z-10" style={{ transform: 'translateY(-80px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            {/* Left Side - Hero Text */}
            <div className="text-left" style={{ transform: 'translateY(-30px) translateX(30px)' }}>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 animate-fade-in text-white">
                Become A Dentist in Canada
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl text-white">
                Comprehensive dental education resources designed to inspire learning
                and professional growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-block bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#fa5252] transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  GET STARTED
                </Link>
                <Link
                  href="/courses"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  BROWSE ALL COURSES
                </Link>
              </div>
            </div>

            {/* Right Side - Course Announcements White Div */}
            <div className="flex justify-start">
              <CourseAnnouncements />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"></div>
      </section>

      {/* About Us Section */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Become A Dentist in Canada
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  The First Exam an Internationally Qualified Dentist has to pass
                  in order to practice in Canada is Assessment of Fundamental
                  Knowledge Exam conducted by National Dental Examination Board of
                  Canada. Prometric test centres will take this 6 hours long exam
                  with 30 min break. It is not only passing afk exam with a score
                  of 75, but also actually achieving a higher score so that
                  chances to get in to the universities for qualifying programs
                  would be bright. Afk Exams are held twice in an academic year
                  with multiple choice questions to judge clinical application
                  capabilities of the candidate. To find out about our AFK
                  preparation course{" "}
                  <Link href="/courses/assessment-of-fundamental-knowledge" className="text-primary-600 hover:text-primary-700 font-semibold">
                    click here.
                  </Link>{" "}
                  Also check our{" "}
                  <Link href="/courses/dental-exam-practice-questions" className="text-primary-600 hover:text-primary-700 font-semibold">
                    afk practice questions
                  </Link>{" "}
                  for better preparation of the assessment of fundamental knowledge exam.
                </p>

                <p>
                  The Assessment of Clinical Judgement Exam is the exam one can
                  take after passing AFK Exam. Over the period of time this exam
                  has become quite difficult one. Not only theoretical knowledge,
                  but clinical experience also matters to pass this exam. The exam
                  is case based which can have single correct answer or more then
                  one correct answer in a multiple choice question format. ACJ
                  Exam is written assessment exam consist of three books and your
                  clinical knowledge. To find out about our ACJ preparation course{" "}
                  <Link href="/courses/assessment-of-clinical-judgement" className="text-primary-600 hover:text-primary-700 font-semibold">
                    click here.
                  </Link>{" "}
                  Also check our{" "}
                  <Link href="/courses/dental-exam-practice-questions" className="text-primary-600 hover:text-primary-700 font-semibold">
                    acj practice questions
                  </Link>{" "}
                  for better preparation of the Assessment of Clinical Judgement exam.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr 1fr' }}>
              {/* Large left image - spans both rows */}
              <div className="row-span-2">
                <div className="h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/img/home-eight/image1.jpg"
                    alt="Dental examination and patient care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Top right image */}
              <div>
                <div className="h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/img/home-eight/image2.jpg"
                    alt="Dental prosthetics and dentures"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Bottom right image */}
              <div>
                <div className="h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/img/home-eight/image3.jpg"
                    alt="Dental instruments and equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-8">
                INBDE is being conducted by JCNDE USA and it replaces the
                NBDE Parts I and II. This exam assists dental boards in
                determining the qualifications of individuals who seek
                licensure to practice dentistry. The content of the exam
                is from the biomedical, behavioral, and clinical sciences.
                To find out about our INBDE preparation course{" "}
                <Link href="/courses/nbde" className="text-primary-600 hover:text-primary-700 font-semibold">
                  click here.
                </Link>
              </p>
              <Link
                href="/courses-nbde-afk-acj"
                className="inline-block bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#fa5252] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Check All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pt-12 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">Interactive Courses</h3>
              <p className="text-gray-600">
                Engaging, interactive courses designed to make dental education accessible and enjoyable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary-500">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">Expert Community</h3>
              <p className="text-gray-600">
                Connect with dental professionals and students in a vibrant, supportive learning community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">Certified Learning</h3>
              <p className="text-gray-600">
                Earn certificates and credentials recognized by dental education institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                What Our Students Say
              </h2>
              <Link
                href="/what-our-students-say-about-us"
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                More Testimonials →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Dr Naghman is an amazing teacher. He puts a lot of hard work and
                  dedication into his lectures. He is methodical and concise, covers
                  every aspect of the exam and is always available to clarify any
                  doubts and confusions that students may have. He makes sure that you
                  are 100% prepared for the exam. I would recommend Dr Naghman
                  Zuberi&apos;s AFK preparatory courses with absolute confidence!!
                </p>
                <h3 className="font-semibold text-lg text-gray-900">Saadia Haider</h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Cannot thank Dr Naghman enough for being such a wonderful teacher
                  and providing all his support for clearing my NBDE II exam. From his
                  meticulously planned, well explained and highly informative lectures
                  to his friendly way of teaching and easy banter with the study group
                  made the learning all the more interesting. Would highly recommend my
                  fellow colleagues in the same boat to be steered successfully by Dr
                  Naghman toward their goals.
                </p>
                <h3 className="font-semibold text-lg text-gray-900">Paramjeet Kaur</h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Dr. Naghman was the most Knowledgeable tutor I ever had, and he is
                  always there for his students. He is so approachable. No matter what
                  time of the day is, he always responded promptly. Naghman is the
                  main reason I went back to finish my Dental boards. He is very
                  encouraging, and his deep knowledge about the subject really makes
                  your life easy to understand the topic.
                </p>
                <h3 className="font-semibold text-lg text-gray-900">Pallavi Sharma</h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Excellent tutor who goes above and beyond to ensure that his
                  students are well-equipped with the materials being taught in class.
                  He never hesitates to give additional resources and feedback to his
                  students and treats us all equally. He would encourage his students
                  to present by pointing out their strengths and speak in the kindest
                  manner to those who were struggling to start. He would reach out in
                  a respectful and kind manner. He goes out his way to help.
                </p>
                <h3 className="font-semibold text-lg text-gray-900">Nida e Zainab</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

