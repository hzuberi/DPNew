import React from "react";
import Link from "next/link";

const SampleOne = () => {
  return (
    <div className="client-area pt-95 pb-70">
      <div className="container">
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/dental-sample-lecture">Sample Lectures</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sample Lecture One
            </li>
          </ol>
        </nav>
        <div className="single-client">
          <h1>TMD Related Questions and Answers</h1>
          <br />
          
          <div className="iframe-container">
          
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xFQKp_ukkS8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOne;
