import React from "react";
import Link from "next/link";

const SamLec = () => {
  return (
    <div className="about-area-seven pb-70 pt-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
            <div className="single-client2">
          <div className="samplelec">
            <img
              src="/img/home-eight/film-roll.svg"
              width="30"
              height="30"
              alt="Dentalprep Sample Lecture One icon"
            />
            <h2>Sample Lecture 1</h2>
          </div>

          <p>
            Temporomandibular disorders (TMD) is the name given to several
            problems with jaw movement and pain in and around the jaw joints.
            There are few variants of this problem and every variant has a
            different clinical presentation. In this lecture questions on these
            clinical situations are being answered with rationale
            <span className="samplelink">
              <Link href="/sample/sample1">
                <a>...Watch Video</a>
              </Link>
            </span>
          </p>
        </div>

        <div className="single-client2">
          <div className="samplelec">
            <img
              src="/img/home-eight/film-roll.svg"
              width="30"
              height="30"
              alt="Dentalprep Sample Lecture One icon"
            />
            <h2>Sample Lecture 2</h2>
          </div>
          <p>
            Long Span FPD and optimization of marginal fit with cast and solder
            technique. When a long span fixed partial denture is fabricated,
            most of the time it is difficult to obtain the marginal fit. In
            Board exams questions are being asked about the technique employed
            in optimization of marginal fit of the long span FPD. In this video
            lecture the technique is being asked and a sample question is being
            discussed.
            <span className="samplelink">
              <Link href="/sample/sample2">
                <a>...Watch Video</a>
              </Link>
            </span>
          </p>
        </div>

          </div>
          </div>

          <div className="col-lg-4">
            <div className="row">
                  <div className="col-lg-12">
                    <div className="about-img mb-30">
                      <img
                        src="/img/pages/Sample-lecture.jpg"
                        alt="AFK Exam Praparation Course"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="about-img">
                      <img
                        src="/img/pages/Sample-lecture-2.jpg"
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

export default SamLec;
