import React from 'react';
import Head from "next/head";
import NavbarFour from '../../components/_App/NavbarFour';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer'; 
import SampleTwo from '../../components/HomeEight/SampleTwo';

const Sample2 = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Sample Lecture Two | DentalPrep.ca</title>
                <meta name="description" content="DentalPrep.ca - Sample Lecture Two" />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Sample Lecture Two"></meta>
                <meta name="twitter:card" content="DentalPrep.ca - Sample Lecture Two"></meta>
                <meta property="og:description" content="DentalPrep.ca - Sample Lecture Two" />
                <meta name="twitter:description" content="DentalPrep.ca - Sample Lecture Two" />
                <meta name="twitter:title" content="DentalPrep.ca - Sample Lecture Two" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Sample Two" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
                <SampleTwo />
            <Footer /> 
        </React.Fragment>
    )
}

export default Sample2;