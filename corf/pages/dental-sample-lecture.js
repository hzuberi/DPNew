import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer'; 
import SamLec from '../components/HomeEight/SampleLec2';

const Sample = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Sample Lectures | DentalPrep.ca</title>
                <meta name="description" content="Dentalprep.ca - Sample lectures on different dentistry topics to give you an idea of our teaching style." />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Sample Lectures"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - Sample lectures on different dentistry topics to give you an idea of our teaching style."></meta>
                <meta property="og:description" content="Dentalprep.ca - Sample lectures on different dentistry topics to give you an idea of our teaching style." />
                <meta name="twitter:description" content="Dentalprep.ca - Sample lectures on different dentistry topics to give you an idea of our teaching style." />
                <meta name="twitter:title" content="DentalPrep.ca - Sample Lectures" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Sample Lectures" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
                <SamLec />
            <Footer /> 
        </React.Fragment>
    )
}

export default Sample;