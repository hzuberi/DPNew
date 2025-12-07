import React from "react";
import Link from "next/link";

const SampleTwo = () => {
  return (
    <div className="client-area pb-70">
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
              Sample Lecture Two
            </li>
          </ol>
        </nav>

        <div className="single-client">
          <h1>Problem Solving</h1>
          <br />
          <center>
            <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UGibh_L2MZk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default SampleTwo;
