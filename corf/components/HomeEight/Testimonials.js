import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="client-area c-bg pb-70">
      <div className="container">
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Testimonials
              </li>
            </ol>
          </nav>
        <div className="section-title">
          <h1>What Our Students Say</h1>
        </div>

        <div className="single-client">
          <p>
            Dr Naghman is an amazing teacher.He puts a lot of hard work and
            dedication into his lectures.He is methodical and concise , covers
            every aspect of the exam and is always available to clarify any
            doubts and confusions that students may have.He makes sure that you
            are 100% prepared for the exam. I would recommend Dr Naghman
            Zuberi’s AFK preparatory courses with absolute confidence!!
          </p>

          <h3>Saadia Haider</h3>
        </div>

        <div className="single-client">
          <p>
            Cannot thank Dr Naghman enough for being such a wonderful teacher
            and providing all his support for clearing my NBDE II exam.From his
            meticulously planned, well explained and highly informative lectures
            to his friendly way of teaching and easy banter with the study group
            made the learning all the more interesting.Would highly recommend my
            fellow colleagues in the same boat to be steered successfully by Dr
            Naghman toward their goals
          </p>

          <h3>Paramjeet Kaur</h3>
        </div>

        <div className="single-client">
          <p>
            Dr. Naghman was the most Knowledgeable tutor I ever had, and he is
            always there for his students. He is so approachable. No matter what
            time of the day is, he always responded promptly. Naghman is the
            main reason I went back to finish my Dental boards. He is very
            encouraging, and his deep knowledge about the subject really makes
            your life easy to understand the topic.
          </p>

          <h3>Pallavi Sharma</h3>
        </div>

        <div className="single-client">
          <p>
            Excellent tutor who goes above and beyond to ensure that his
            students are well-equipped with the materials being taught in class.
            He never hesitates to give additional resources and feedback to his
            students and treats us all equally. He would encourage his students
            to present by pointing out their strengths and speak in the kindest
            manner to those who were struggling to start. He would reach out in
            a respectful and kind manner. He goes out his way to help. He
            responds immediately when posed any questions. He gives tips and
            pointers to improve constantly. Since it’s a professional course, I
            needed the guidance to take step in right direction and Sir proved
            to be the guiding star for me.
          </p>

          <h3>Nida e Zainab</h3>
        </div>

        <div className="single-client">
          <p>
            Dr Naghman taught me and mentored me for NBDE part 2 Exam. He
            focused on all the topics which are required for this exam. Dr.
            Naghman was not only our mentor and teacher, but he was also our
            friend and a great inspiration. Our whole group passed the exam with
            flying colors and it was a 100% result for our batch. We all built a
            lifetime relationship with Dr. Naghman as our guide, friend and
            mentor. Thank you Dr. Naghman for holding our hands through this
            process.
          </p>

          <h3>Rania Fouda</h3>
        </div>

        <div className="single-client">
          <p>
            Dr. Naghman is the best teacher and guide for the NDEB examination
            process. His guidance and educational resources helped me to pass my
            exams and became a licensed general dental practitioner in Canada.
            His motivation and 24hr help made my dreams true. I highly recommend
            him for Afk Acj And Nedb entrance examination courses. He has too
            much information for all the questions you need to pass the exams.
            Thanks again to Dr. Naghman Zuberi
          </p>

          <h3>Harjeet Singh</h3>
        </div>

        <div className="single-client">
          <p>
            I contacted Dr. Naghman after I had lost all hope of passing NBDE
            part 2. Coming back to the profession after a long break was quite
            challenging for me. After a few sessions with me online, he figured
            out exactly where I was lacking at. So first, he worked on those
            parts where I was struggling with and later moved on to the rest of
            the curriculum. He is one of those teachers who is there for you 24/
            7. Honestly, I cannot thank him enough for his dedication and effort
            he has put into my test preparation. I would highly recommend him to
            my fellows who want to do their best in their NBDE test.
          </p>

          <h3>Hina</h3>
        </div>

        <div className="about-btn">
            <Link href="/">
                <a className="default-btn">Home Page</a>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
