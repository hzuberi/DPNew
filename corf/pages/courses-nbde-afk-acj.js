import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import DoctorsStyleOne from '../components/Common/DoctorsStyleOne';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';
import Department from '../components/HomeEight/Department';

const Courses = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Courses We Offer | DentalPrep.ca</title>
                <meta name="description" content="Dentalprep.ca - For information about AFK, ACJ or INBDE exams visit our site." />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Courses We Offer"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - AFK ACJ Canada Dental Board Exams"></meta>
                <meta property="og:description" content="Dentalprep.ca - For information about AFK, ACJ or INBDE exams visit our site." />
                <meta name="twitter:description" content="Dentalprep.ca - For information about AFK, ACJ or INBDE exams visit our site." />
                <meta name="twitter:title" content="DentalPrep.ca - Courses We Offer" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Courses" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
            
                <Department />
            
            <Footer /> 
        </React.Fragment>
    )
}

export default Courses;