import React from 'react';
import Head from "next/head";
import NavbarFour from '../../components/_App/NavbarFour';
import PageBanner from '../../components/Common/PageBanner';
import Subscribe from '../../components/Common/Subscribe';
import Footer from '../../components/_App/Footer'; 
import DoctorsStyleOne from '../../components/Common/DoctorsStyleOne';
import FunFactStyleOne from '../../components/Common/FunFactStyleOne';
import NbdeExam from '../../components/HomeEight/NbdeExam';
import AboutNbedExam from '../../components/HomeEight/AboutNbedExam';

const Nbde = () => {
    return (
        <React.Fragment>
            <Head>
            <title>NBDE Exam Info | DentalPrep.ca</title>
                <meta name="description" content="Dentalprep.ca - Information about dental board NBDE exam" />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - NBDE Exam Info"></meta>
                <meta name="twitter:card" content="DentalPrep.ca - NBDE Exam Info"></meta>
                <meta property="og:description" content="Dentalprep.ca - Information about dental board ACJ exam" />
                <meta name="twitter:description" content="Dentalprep.ca - Information about dental board ACJ exam" />
                <meta name="twitter:title" content="DentalPrep.ca - NBDE Exam Info" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Nbde Exam" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
            
                <AboutNbedExam />
            
            <Footer /> 
        </React.Fragment>
    )
}

export default Nbde;