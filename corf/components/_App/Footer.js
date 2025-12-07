import React from "react";
import Link from "../../utils/ActiveLink";

const Footer = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <Link href="/">
                  <a>
                    <div
                      style={{ fontSize: "2rem", fontFamily: "MuseoModerno" }}
                    >
                      <i>Dentalprep.ca</i>
                    </div>
                  </a>
                </Link>

                <p>
                  Assessment of Fundamental Knowledge Exam, Assessment of
                  Clinical Judgement Exam INBDE (The New Exam system being
                  implemented in USA)
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Dental-Prep-327568810768811"
                        target="_blank"
                      >
                        <i className="bx icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dental_prep" target="_blank">
                        <i className="bx icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/naghman-zuberi-28984667"
                        target="_blank"
                      >
                        <i className="bx icon-linkedin2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCZVrHF29WDuuu5vMnCbDgiw"
                        target="_blank"
                      >
                        <i className="bx icon-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Useful Links</h3>

                <ul>
                  <li>
                    <a href="https://ndeb-bned.ca/en/non-accredited?fbclid=IwAR2JGGd7OgJ5Mu0IRyT-EYMwH_n1e05rb1bdr0A-CO6nUlM5Eg0pvZO9SHU">
                      Graduates of Non-Accredited Dental Programs
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ada.org/en/jcnde/inbde?fbclid=IwAR2twxWV7fzun7xg543LgC35bvnewo-5uxo1S4iN7LN35bAj1BqG74dfR3A">
                      Integrated National Board Dental Examination
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ece.org/?fbclid=IwAR3ZXsmG5tGa-8SGjaNsdK9wAh9W3m0xG7PDld2aWofFiOgpynRnNjI7dJY">
                      Evaluation f documents before appearing in INBDE Exam
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ets.org/toefl?fbclid=IwAR3ZXsmG5tGa-8SGjaNsdK9wAh9W3m0xG7PDld2aWofFiOgpynRnNjI7dJY">
                      The TOEFL Family of Assessments
                    </a>
                  </li>
                  <li>
                    <a href="https://applications.wes.org/createaccount/?fbclid=IwAR3mgVXGjFmANaHeGjNS272P4hIKYwhetFAy9jLlp4Mq4kzaJwNzEhKc3p8">
                      Evaluation of Credentials by WES
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget open-time">
                <h3>Menu</h3>

                <ul>
                  <li>
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a onClick={toggleNavbar} className="nav-link">
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-nbde-afk-acj">
                      <a onClick={toggleNavbar} className="nav-link">
                        Courses
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-sample-lecture">
                      <a onClick={toggleNavbar} className="nav-link">
                        Sample Lectures
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-our-students-say-about-us">
                      <a onClick={toggleNavbar} className="nav-link">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dentzine-dental-magzine">
                      <a onClick={toggleNavbar} className="nav-link">
                        Dentzine
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-exam-practice-questions" rel="nofollow">
                      <a onClick={toggleNavbar} className="nav-link">
                        Practice Questions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>Get In Touch</h3>

                <ul>
                  <li className="pl-0">
                    <a href="tel:+14165793335">
                      <i className="bx bx-phone-call"></i>
                      <span>Phone:</span>
                      +1(416)579-3335
                    </a>
                  </li>

                  <li className="pl-0">
                    <a href="mailto:info@dentalprep.ca">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      info@dentalprep.ca
                    </a>
                  </li>

                  <li className="pl-0">
                    <a
                      href="https://www.facebook.com/Dental-Prep-327568810768811"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                      <span>Facebook:</span>
                      Dentalprep Facebook Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright @{currentYear}
              <a href="https://dentalprep.ca" target="blank">
                &nbsp;&nbsp;&nbsp; Dentalprep.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
