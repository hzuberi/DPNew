import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import MainBanner from '../components/HomeEight/MainBanner';

import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Footer from '../components/_App/Footer';
import AboutUs from '../components/HomeEight/AboutUs';
import FunFactStyleThree from '../components/Common/FunFactStyleThree';
import Magzine from '../components/Common/Magzine';
import Subscribe from '../components/Common/Subscribe';

const Index8 = () => {


    return (
        <React.Fragment>
            <Head>
            <title>Home Page | DentalPrep.ca</title>
                <meta name="description" content="Dentalprep.ca -INBDE AFK ACJ Canada Dental Board Exams" />
                <meta name="og:title" property="og:title" content="Dentalprep.ca - INBDE AFK ACJ Canada Dental Board Exams"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - INBDE AFK ACJ Canada Dental Board Exams"></meta>
                <meta property="og:description" content="Naghman Zuberi's lectures to prepare for INBDE part 1 and part 2 exams. Crack canadian AFK and ACJ Exams" />
                <meta name="twitter:description" content="Naghman Zuberi's lectures to prepare for INBDE part and exams. Crack canadian AFK and ACJ Exams" />
                <meta name="twitter:title" content="Dental Preparations | INBDE | AFK | ACJ" />
            </Head>
            <NavbarFour />
            <MainBanner />
            <div style={{marginTop:20}}></div>
            <AboutUs />
            <div style={{marginTop:20}}></div>
            <FunFactStyleThree />
            <Magzine />
            <TestimonialStyleOne />
            <Footer /> 

            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dentalprep",
            image: "https://dentalprep.ca/assets/mainimage.jpg",
            url: "https://dentalprep.ca",
            telephone: "+14165793555",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "00",
              addressLocality: "Toronto",
              addressRegion: "ON",
              postalCode: "ABC",
              addressCountry: "CA",
            },
            sameAs: [
              "https://www.facebook.com/Dental-Prep-327568810768811",
              "https://twitter.com/dental_prep",
              "https://www.youtube.com/channel/UCZVrHF29WDuuu5vMnCbDgiw",
            ],
          }),
        }}
      />
        </React.Fragment>
    )
}

export default Index8;