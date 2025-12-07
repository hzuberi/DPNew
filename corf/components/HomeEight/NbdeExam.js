import React from "react";
import Link from "next/link";

const NbdeExam = () => {
  return (
    <div className="client-area pb-70">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/courses-nbde-afk-acj">Courses</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              INBDE Exam Info
            </li>
          </ol>
        </nav>
        <div className="single-client">
          <h1 style={{ fontSize: 30 }}>
            INBDE (Integrated National Board of Dental Examination) Exam Course
          </h1>

          <p>
            INBDE is being conducted by JCNDE USA and it replaces the NBDE Parts
            I and II. This exam assists dental boards in determining the
            qualifications of individuals who seek licensure to practice
            dentistry. The content of the exam is from the biomedical,
            behavioral, and clinical sciences.
          </p>

          <p>
            It will be a three month program with Thrice a week online lecture.
            All the study material in the form of Word Document, PDF files and
            Power Point presentations will be provided. Course participants will
            have access to recorded video lectures as well. There will be
            subject tests and more than 2000 questions will be provided during
            the course. All these questions are constructed following the
            guidelines provided by Exam Taking Authorities on their website.
            Towards the end of the course there will be Two Mock Exams.
          </p>

          <p>
            All the answers will be provided with rationale. This will build the
            confidence of the student. All the tests and Mocks are web-based
            exams. This will also help the course participants in getting
            acclimatized to the environment of the exam.
          </p>

          <p>
            During the course we not only teach and train the students, but we
            also monitor their progress based on their performance in the
            subject tests and mock exams. We guide our students about the proper
            time to take the exam based on their preparation.
          </p>

          <p>
            Though the course is for 3 months, but a student can continue with
            us for the next batch without paying additional fee if they are not
            able to appear in the exam for any reason.
          </p>

          <p>
            <span className="samplelink">
              <Link
                href="/pdf/Integrated-national-board-dental-examination.pdf"
                target="_blank"
              >
                <a>Download ACJ Course Outline</a>
              </Link>
            </span>
          </p>
          <div className="smaplelec">
            <div className="about-btn">
              <Link href="/courses/assessment-of-clinical-judgement">
                <a className="default-btn">ACJ Exam info</a>
              </Link>
            </div>
            <span>&nbsp;&nbsp;</span>
            <div className="about-btn">
              <Link href="/courses/assessment-of-fundamental-knowledge">
                <a className="default-btn">AFK Exam info</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NbdeExam;
