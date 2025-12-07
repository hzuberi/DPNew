import React from "react";
import Head from "next/head";
import NavbarFour from "../../components/_App/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import AboutACJExam from "../../components/HomeEight/AboutACJExam";

const Acj = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Assessment of Clinical Judgement | DentalPrep.ca</title>
        <meta
          name="description"
          content="Dentalprep.ca - Information about dental board ACJ exam"
        />
        <meta
          name="og:title"
          property="og:title"
          content="DentalPrep.ca - Assessment of Clinical Judgement"
        ></meta>
        <meta
          name="twitter:card"
          content="Dentalprep.ca - Information about dental board ACJ exam"
        ></meta>
        <meta
          property="og:description"
          content="Dentalprep.ca - Information about dental board ACJ exam"
        />
        <meta
          name="twitter:description"
          content="Dentalprep.ca - Information about dental board ACJ exam"
        />
        <meta
          name="twitter:title"
          content="DentalPrep.ca - Assessment of Clinical Judgement"
        />
      </Head>
      <NavbarFour />
      <PageBanner
        pageTitle="ACJ Exam"
        homePageUrl="/"
        homePageText=""
        activePageText=""
        imgClass="bg-1"
      />

      <AboutACJExam />

      <Footer />
    </React.Fragment>
  );
};

export default Acj;
