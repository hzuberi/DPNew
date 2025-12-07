import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  // Preloader

  return (
    <React.Fragment>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="fb:admins" content="327568810768811" />
        <meta
          name="keywords"
          content="inbde exam, ndeb exam preparation, nbed afk Exam,afk preparation course online,ndeb afk questions,national board dental examination,canada dental exam, national dental board of canada, foreign dentist canada, afk practice questions, acj questions, indbe questions,ndeb online coaching, assessment of fundamental knowledge, assessment of clinical judgement"
        ></meta>

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dentalprep.ca" />
        <meta
          property="og:image"
          content="https://dentalprep.ca/assets/mainimage.jpg"
        />

        <meta property="og:name" content="Dentalprep.ca" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="twitter:site" content="@dental_prep" />
        <meta
          name="twitter:image"
          content="https://dentalprep.ca/assets/mainimage.jpg"
        />
      </Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-5DFL5FHJT8`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','G-5DFL5FHJT8'), {
              page_path: window.location.pathname,
            };
          `,
        }}
      />
      {children}

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
  );
};

export default Layout;
