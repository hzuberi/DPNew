import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-area-seven">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <h2>Become A Dentist in Canada</h2>
              <p style={{ fontSize: 18 }}>
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
                preparation course
                <Link href="/courses/assessment-of-fundamental-knowledge">
                  <a>&nbsp;click here.</a> 
                </Link>
                Also check our 
                <Link href="/courses/dental-exam-practice-questions">
                  <a>&nbsp;afk practice questions</a> 
                </Link> for better preparation of the assessment of fundamental knowledge exam.
              </p>

              <p style={{ fontSize: 18 }}>
                The Assessment of Clinical Judgement Exam is the exam one can
                take after passing AFK Exam. Over the period of time this exam
                has become quite difficult one. Not only theoretical knowledge,
                but clinical experience also matters to pass this exam. The exam
                is case based which can have single correct answer or more then
                one correct answer in a multiple choice question format. ACJ
                Exam is written assessment exam consist of three books and your
                clinical knowledge. To find out about our ACJ preparation course
                <Link href="/courses/assessment-of-clinical-judgement">
                  <a>&nbsp;click here.</a>
                </Link>
                Also check our 
                <Link href="/courses/dental-exam-practice-questions">
                  <a>&nbsp;acj practice questions</a> 
                </Link> for better preparation of the Assessment of Clinical Judgement exam.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img-1"></div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-img mb-30">
                      <img
                        src="/img/home-eight/image2.jpg"
                        alt="AFK Exam Preparation Online Course | AFK Practice Questions"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="about-img">
                      <img
                        src="/img/home-eight/image3.jpg"
                        alt = "AFK Sample Videos | Assessment of fundamental knowledge"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-area-seven">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="about-content">
                    <p></p>
                    <p style={{ fontSize: 18 }}>
                      INBDE is being conducted by JCNDE USA and it replaces the
                      NBDE Parts I and II. This exam assists dental boards in
                      determining the qualifications of individuals who seek
                      licensure to practice dentistry. The content of the exam
                      is from the biomedical, behavioral, and clinical sciences.
                      To find out about our INBDE preparation course
                      <Link href="/courses/nbde">
                        <a>&nbsp;click here.</a>
                      </Link>
                    </p>

                    <div className="about-btn">
                      <Link href="/courses-nbde-afk-acj">
                        <a className="default-btn">Check All Courses</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
