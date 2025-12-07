import React from "react";
import Head from "next/head";
import NavbarFour from "../../components/_App/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";

const BlogGridFeb01 = () => {
  return (
    <React.Fragment>
      <Head>
      <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
      },
      "headline": "Answer to the question asked on feb 01, 2021 on twitter", 
      "image": "https://dentalprep.ca/assets/mainimage.jpg", 
      "author": {
        "@type": "Person",
        "name": "Admin",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dentalprep.ca/assets/mainimage.jpg"
        }
      },  
      "publisher": {
        "@type": "Organization",
        "name": "Dentzine"
      },
      "datePublished": "2021-02-01",
      "dateModified": "2021-02-04"
    }) }}
  />

        <title>Dentzine - Answer Feb 01</title>
        <meta
          name="description"
          content="Dentzine - Answer Feb 01"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Dentzine - Answer Feb 01"
        ></meta>
        <meta
          name="twitter:card"
          content="Dentzine - Answer Feb 01"
        ></meta>
        <meta
          property="og:description"
          content="Dentzine - Answer Feb 01"
        />
        <meta
          name="twitter:description"
          content="Dentzine - Answer Feb 01"
        />
        <meta
          name="twitter:title"
          content="Dentzine - Answer Feb 01"
        />
      </Head>
      <NavbarFour />
      <PageBanner
        pageTitle="Dentzine"
        homePageUrl=""
        homePageText=""
        activePageText=""
        imgClass="bg-1"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> <a href="#">Feb 01, 2021</a>
                      </li>
                      <li>
                        <span>Posted By:</span> <a href="#">Admin</a>
                      </li>
                    </ul>
                  </div>

                  <h3>Answer to Question of Feb 01</h3>

                  <p>Option C.</p>
                  <p>
                    Rationale: Methemoglobinemia may also occur with Articaine
                    or the topical anesthetic Benzocaine. Methemoglobinemia is
                    induced by an excess of the metabolites of these drugs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default BlogGridFeb01;
