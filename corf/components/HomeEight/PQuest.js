import React from "react";
import Link from "next/link";

const PQuest = () => {
  return (
    <div className="client-area pb-70">
      <div className="container">
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Pactice Questions
              </li>
            </ol>
          </nav>
        <div className="single-client2">
        <div style={{display:'flex'}}>
            <img src="/img/home-eight/test.svg" alt="AFK Exam Preparation | AFK Practice Questions" />
            <h1>AFK Practice Exam</h1>
          </div>

          <p>
            Our self assessment web based test prepares you to appear in the
            real exam with confidence. This computer base test is closest to the
            real exam. The questions are divided according to the different
            subjects to cover all the important topics of AFK exam.
            <span style={{ color: "blue" }}>
              <Link href="http://webdemo.dentalprep.ca">
                <a>...Take Practice Test</a>
              </Link>
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default PQuest;
