import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import PQuest from '../components/HomeEight/PQuest' 

const PracQuest = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Dental Exam Practice Questions | DentalPrep.ca</title>
                <meta name="description" content="Dentalprep.ca - Here are some practice questions for AFK, ACJ and INDBE exams" />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Dental Exam Practice Questions"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - AFK ACJ Canada Dental Board Exams"></meta>
                <meta property="og:description" content="Dentalprep.ca - Here are some practice questions for AFK, ACJ and INDBE exams" />
                <meta name="twitter:description" content="Dentalprep.ca - Here are some practice questions for AFK, ACJ and INDBE exams" />
                <meta name="twitter:title" content="DentalPrep.ca - Dental Exam Practice Questions" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Practice Questions" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
                <PQuest />
            <Footer /> 
        </React.Fragment>
    )
}

export default PracQuest
