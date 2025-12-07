import React from "react";
import Link from "next/link";

const AboutAFKExam = () => {
  return (
    <div className="about-area-seven pb-70 pt-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
            <h1 style={{fontSize:30}}>AFK (Assessment of Fundamental Knowledge) Exam</h1>
            <p>The First Exam an Internationally Qualified Dentist has to pass is
            Assessment of Fundamental Knowledge. It is not only passing the exam
            with a score of 75, it is actually achieving a higher score so that
            chances to get in to the universities for qualifying programs would
            be bright.
          </p>
          <p>With an academic background and 25 years plus teaching experience,
            we have ability to construct the subject tests and Mock Exams in
            such an effective way that our students after attempting those feel
            confident to appear in the AFK Exam being conducted by the NDEB
            Canada.
          </p>
          <p>
            All these tests and exams are web-based, providing almost similar
            type of environment as an exam taker faces in the actual exam. It
            acclimatizes and gives a confidence to the aspirants so that they
            will not feel lost during the actual AFK exam. Students also get
            rationale for the correct answers when they review their tests and
            mock exams
          </p>

          <p>
            The Course material is constantly updated keeping in view about the
            trends in the previous exams. Our 24/7 online support and our
            one-week rigorous revision sessions towards the end of the course
            give us an edge over the competitors. We do not only teach and
            train, but we also mentor the course participants.
          </p>

          <p>
            Analysing the progress of the student, we advise them when would be
            the right time to take the exam. Students do not have to pay
            additional fee if they postpone their exam for any reason. Our
            support is continuously available to them till they take the exam.
          </p>
          <p>
          <span className="samplelink">
              <Link href="/pdf/Outline-for-AFK-Preparation-Course.pdf">
                <a target="_blank">Download AFK Course Outline</a>
              </Link>
            </span>
            
            </p>

          </div>
          </div>

          <div className="col-lg-4">
            <div className="row">
                  <div className="col-lg-12">
                    <div className="about-img mb-30">
                      <img
                        src="/img/pages/home-eight-about1.jpg"
                        alt="AFK Exam Preparation Course"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="about-img">
                      <img
                        src="/img/pages/home-eight-about2.jpg"
                        alt="Assessment of Fundamental Knowledge"
                        width="100%"
                        height="100%"
                      />
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

export default AboutAFKExam;
