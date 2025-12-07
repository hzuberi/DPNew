import React from "react";
import Link from "next/link";

const AboutACJExam = () => {
  return (
    <div className="about-area-seven pb-70 pt-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
            <h1>ACJ (Assessment of Clinical Judgement) Exam</h1>

          <p>
            The Assessment of Clinical Judgement Exam is the exam one can take
            after passing AFK Exam. Over the period of time this exam has become
            quite difficult one. Not only theoretical knowledge, but clinical
            experience also matters to pass this exam
          </p>

          <p>
            Apart from online lectures, we provide discussions on clinical case
            scenarios to polish the abilities of an Internationally Qualified
            Dentist to identify the oral lesions, to diagnose the cases and to
            take the decisions for treatment of that particular case.
          </p>

          <p>
            Practice cases and radiology quizzes are web-based so that course
            attendees will get acclimatize to the environment and they feel
            comfortable in attempting the ACJ Exam conducted by NDEB Canada. The
            study material and lectures are being continuously updated keeping
            in view the trends of the recent exams.
          </p>

          <p>
            Having 17 years of clinical and academic experience help us in
            devising a concrete program to pass this exam. During the course we
            monitor the progress of the course attendees and guide them about
            the right time to take this exam. If due to any reason any course
            participant is not able to appear in the exam, they can continue
            with us till the time they will be appearing the exam without paying
            additional fee
          </p>

          <p>
            There are Four web-based Mock Exams and with every case scenario the
            full overview of the case is available to justify the answers and to
            educate the test taker. Our 24/7 support is available to all the
            course participants and they have an access to the recorded video
            lectures as well.
          </p>

          <p>
            <span className="samplelink">
              <Link href="/pdf/Outline-for-ACJ-Preparation-Course.pdf">
                <a target="_blank">Download ACJ Course Outline</a>
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
                        src="/img/pages/ACJ-Exam-Info.jpg"
                        alt="ACJ Exam Preparation Course"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="about-img">
                      <img
                        src="/img/pages/ACJ-Exam.jpg"
                        alt="Assessment of Clinical Judgement"
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

export default AboutACJExam;
