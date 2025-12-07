import React from "react";
import Link from "next/link";

const FunFactStyleThree = () => {
  return (
    <div className="counter-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Practice Questions</h2>
          <p>
            Our{" "}
            <Link href="/dental-exam-practice-questions" rel="nofollow">
              <a>Practice Questions</a>
            </Link>{" "}
            for Canadian Aspirants are state of the art and they give you enough
            confidence to perform with full zeal in the real exam. Join our
            online courses to enable you for cracking the American, Canadian,
            Australian and British Dental Exams.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <Link href="/dental-exam-practice-questions">
              <a className="factslink">
                <div className="single-counter">
                  <i className="icon-help"></i>

                  <h2>
                    650 <span className="target">+</span>
                  </h2>

                  <p>Questions</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-sm-6">
            <Link href="/dental-exam-practice-questions">
              <a className="factslink">
                <div className="single-counter">
                  <i className="icon-profile"></i>

                  <h2>
                    30 <span className="target">+</span>
                  </h2>

                  <p>Cases</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-sm-6">
            <Link href="/dental-exam-practice-questions">
              <a className="factslink">
                <div className="single-counter">
                  <i className="flaticon-tick"></i>

                  <h2>
                    3000 <span className="traget">+</span>
                  </h2>

                  <p>Options</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-sm-6">
            <Link href="/dental-exam-practice-questions">
              <a className="factslink">
                <div className="single-counter">
                  <i className="flaticon-clock"></i>

                  <h2>
                    40<span className="traget">+</span>
                  </h2>

                  <p>Hours of testing time</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactStyleThree;
