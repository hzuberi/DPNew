import React from 'react';
import Head from "next/head";
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';

const Contact = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Contact Us | DentalPrep.ca</title>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                <meta name="description" content="Dentalprep.ca - Have a question? Send inquiry and we will be glad to be in touch" />
                <meta name="og:title" property="og:title" content="DentalPrep.ca - Contact Us"></meta>
                <meta name="twitter:card" content="Dentalprep.ca - Have a question? Send inquiry and we will be glad to be in touch"></meta>
                <meta property="og:description" content="Naghman Zuberi's lectures to prepare for NBDE part 1 and part 2 exams. Crack canadian AFK and ACJ Exams" />
                <meta name="twitter:description" content="Naghman Zuberi's lectures to prepare for NBDE part and exams. Crack canadian AFK and ACJ Exams" />
                <meta name="twitter:title" content="DentalPrep.ca - Contact Us" />
            </Head>
            <NavbarFour />
            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="" 
                activePageText="" 
                imgClass="bg-1" 
            />  
            
            <ContactForm />
            <Footer /> 
        </React.Fragment>
    )
}

export default Contact;