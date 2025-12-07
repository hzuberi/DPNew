import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer'; 
import DoctorsStyleOne from '../components/Common/DoctorsStyleOne';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';
import AboutUs3 from '../components/HomeEight/AboutUs3';

const About = () => {
    return (
        <React.Fragment>
            <Head>
            <title>About Us | Dentalprep.ca</title>
                <meta name="description" content="Dentalprep.ca - Know more how we are helping dentists to go through licencing process in Canade " />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - About Us"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - Know more how we are helping dentists to go through licencing process in Canade"></meta>
                <meta property="og:description" content="Know more how we are helping dentists to go through licencing process in Canade" />
                <meta name="twitter:description" content="Know more how we are helping dentists to go through licencing process in Canade" />
                <meta name="twitter:title" content="DentalPrep.ca - About Us" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            /> 
            <div style={{marginTop:20}}></div>
                <AboutUs3 />
            <div style={{marginTop:20}}></div>
            <Footer /> 
        </React.Fragment>
    )
}

export default About;