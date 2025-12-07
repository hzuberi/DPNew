import React from "react";
import dynamic from "next/dynamic";
import Link from 'next/link';

const OwlCarousel = dynamic(import("react-owl-carousel3"));


const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: false,
  autoplay: false,
  smartSpeed: 0,
  autoplayHoverPause: false,

  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 20,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

const TestimonialStyleOne = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="client-area c-bg pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>What Our Students Say</h2>
          <span style={{color:'blue',textAlign:'right'}}>
                <Link href="/what-our-students-say-about-us">
                    <a><h6>(More Testimonials)</h6></a>
                </Link>
            </span>
        </div>

        {display ? (
          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="single-client">
              <p>
                Dr Naghman is an amazing teacher.He puts a lot of hard work and
                dedication into his lectures.He is methodical and concise ,
                covers every aspect of the exam...
                <span style={{color:'blue'}}>
                <Link href="/what-our-students-say-about-us">
                    <a>...Read More</a>
                </Link>
            </span>
              </p>

              <h3>Saadia Haider</h3>
            </div>

            <div className="single-client">
              <p>
                Cannot thank Dr Naghman enough for being such a wonderful
                teacher and providing all his support for clearing my NBDE II
                exam.From his meticulously planned...
                <span style={{color:'blue'}}>
                <Link href="/what-our-students-say-about-us">
                    <a>...Read More</a>
                </Link>
            </span>
              </p>

              <h3>Paramjeet Kaur</h3>
            </div>

            
          </OwlCarousel>
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
};

export default TestimonialStyleOne;
