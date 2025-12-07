import React from "react";
import Head from "next/head";
import NavbarFour from "../../components/_App/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import AfkExam from "../../components/HomeEight/AFKExam";
import AboutAFKExam from "../../components/HomeEight/AboutAFKExam";

const Afk = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Assessment of Fundamental Knowledge | DentalPrep.ca</title>
        <meta
          name="description"
          content="Dentalprep.ca - Information about dental board AFK exam"
        />
        <meta
          name="og:title"
          property="og:title"
          content="DentalPrep.ca - Assessment of Fundamental Knowledge"
        ></meta>
        <meta
          name="twitter:card"
          content="Dentalprep.ca - Information about dental board AFK exam"
        ></meta>
        <meta
          property="og:description"
          content="Dentalprep.ca - Information about dental board AFK exam"
        />
        <meta
          name="twitter:description"
          content="Dentalprep.ca - Information about dental board AFK exam"
        />
        <meta
          name="twitter:title"
          content="DentalPrep.ca - Assessment of Fundamental Knowledge"
        />
      </Head>
      <NavbarFour />
      <PageBanner
        pageTitle="AFK Exam"
        homePageUrl="/"
        homePageText=""
        activePageText=""
        imgClass="bg-1"
      />
      <AboutAFKExam />
      <Footer />
    </React.Fragment>
  );
};

export default Afk;
