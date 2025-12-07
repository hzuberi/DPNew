import React from "react";
import Link from "next/link";

const Department = () => {
  return (
    <div className="blog-area pb-70">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Courses
            </li>
          </ol>
        </nav>

        <div className="section-title">
          <h1>Courses We Offer</h1>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <Link href="/courses/assessment-of-fundamental-knowledge">
                <a>
                  <img
                    src="/img/home-eight/AFK-Exam-Intro.jpg"
                    alt="AFK Exam Preparation Course | Dentalprep.ca"
                  />
                </a>
              </Link>

              <div className="blog-content">
                <Link href="/courses/assessment-of-fundamental-knowledge">
                  <a>
                    <h3>AFK EXAM COURSE</h3>
                  </a>
                </Link>
                <div className="durcontainer">
                  <p>Duration</p>
                  <p>5 Months</p>
                </div>
                <p>
                  The First Exam an Internationally Qualified Dentist has to
                  pass is Assessment of Fundamental Knowledge. It is not only
                  passing the exam with a score of 75, it is actually achieving
                  a higher score so that chances to get in to the universities
                  for qualifying programs would be bright
                </p>

                <Link href="/courses/assessment-of-fundamental-knowledge">
                  <a className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <Link href="/courses/assessment-of-clinical-judgement">
                <a>
                  <img
                    src="/img/home-eight/ACJ-Exam-Intro.jpg"
                    alt="ACJ Exam Preparation Course | NDEB AFK Course"
                  />
                </a>
              </Link>

              <div className="blog-content">
                <Link href="/courses/assessment-of-clinical-judgement">
                  <a>
                    <h3>ACJ EXAM COURSE</h3>
                  </a>
                </Link>
                <div className="durcontainer">
                  <p>Duration</p>
                  <p>2 Months</p>
                </div>
                <p>
                  The Assessment of Clinical Judgement Exam is the exam one can
                  take after passing AFK Exam. Over the period of time this exam
                  has become quite difficult one. Not only theoretical
                  knowledge, but clinical experience also matters to pass this
                  exam
                </p>

                <Link href="/courses/assessment-of-clinical-judgement">
                  <a className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-blog">
              <Link href="/courses/nbde">
                <a>
                  <img
                    src="/img/home-eight/INBDE-Exam-Intro.jpg"
                    alt="INBDE Exam Preparation Course | Dentalprep.ca"
                  />
                </a>
              </Link>

              <div className="blog-content">
                <Link href="/courses/nbde">
                  <a>
                    <h3>
                      INBDE (Integrated National Board of Dental Examination)
                      Exam Course
                    </h3>
                  </a>
                </Link>
                <div className="durcontainer">
                  <p>Duration</p>
                  <p>2 Months</p>
                </div>
                <p>
                  INBDE is being conducted by JCNDE USA and it replaces the NBDE
                  Parts I and II. This exam assists dental boards in determining
                  the qualifications of individuals who seek licensure to
                  practice dentistry. The content of the exam is from the
                  biomedical, behavioral, and clinical sciences.
                </p>

                <Link href="/courses/nbde">
                  <a className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
