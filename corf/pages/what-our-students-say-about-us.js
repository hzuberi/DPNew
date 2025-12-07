import React from "react";
import Head from "next/head";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Testimonials from "../components/HomeEight/Testimonials";

const Students = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Testimonials | DentalPrep.ca</title>
        <meta
          name="description"
          content="Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us."
        ></meta>
        <meta
          name="twitter:card"
          content="Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us."
        ></meta>
        <meta
          property="og:description"
          content="Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us."
        />
        <meta
          name="twitter:description"
          content="Dentalprep.ca - Hundreds of students passed AFK, ACJ and INDBE exams through us. Here are some samples how our students think about us."
        />
        <meta name="twitter:title" content="DentalPrep.ca - Testimonials" />
      </Head>
      <NavbarFour />
      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText=""
        activePageText=""
        imgClass="bg-1"
      />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default Students;
