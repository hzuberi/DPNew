import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: false,
  margin: 0,
  nav: false,
  mouseDrag: false,
  items: 1,
  dots: false,
  autoplay: false,
  smartSpeed: 800,
  autoplayHoverPause: true,
};

const MainBanner = () => {
  return (
    <div className="hero-slider-area hero-slider-area-eight">
      <div className="slider-item slider-item-bg-6">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="slider-text one">
                <img
                  src="/img/home-eight/ad-June23.jpg"
                  alt="AFK Exam Preparation Online Course | AFK Practice Questions"
                  width="100%"
                  height="100%"
                />
                <br />
                <br />

                <div style={{ display: "flex" }}>
                  <div className="slider-btn">
                    <Link href="/courses-nbde-afk-acj">
                      <a className="default-btn">Find Out More</a>
                    </Link>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div className="slider-btn">
                    <Link href="/contact-us">
                      <a className="default-btn">Register Now</a>
                    </Link>
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

export default MainBanner;
