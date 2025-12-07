import React from 'react';
import Head from "next/head";
import NavbarFour from '../../components/_App/NavbarFour';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer'; 
import SampleOne from '../../components/HomeEight/SampleOne';

const Sample1 = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Sample Lecture One | DentalPrep.ca</title>
                <meta name="description" content="DentalPrep.ca - Sample Lecture One" />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Sample Lecture One"></meta>
                <meta name="twitter:card" content="DentalPrep.ca - Sample Lecture One"></meta>
                <meta property="og:description" content="DentalPrep.ca - Sample Lecture One" />
                <meta name="twitter:description" content="DentalPrep.ca - Sample Lecture One" />
                <meta name="twitter:title" content="DentalPrep.ca - Sample Lecture One" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Sample One" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
                <SampleOne />
            <Footer /> 
        </React.Fragment>
    )
}

export default Sample1;