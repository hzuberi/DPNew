import React from "react";
import Head from "next/head";
import NavbarFour from "../../components/_App/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";

const BlogGridFeb02 = () => {
  return (
    <React.Fragment>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
              },
              headline:
                "Answer to the question asked on feb 02, 2021 on twitter",
              image: "https://dentalprep.ca/assets/mainimage.jpg",
              author: {
                "@type": "Person",
                name: "Admin",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dentalprep.ca/assets/mainimage.jpg",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "Dentzine",
              },
              datePublished: "2021-02-02",
              dateModified: "2021-02-04",
            }),
          }}
        />

        <title>Dentzine - Answer Feb 02</title>
        <meta name="description" content="Dentzine - Answer Feb 02" />
        <meta
          name="og:title"
          property="og:title"
          content="Dentzine - Answer Feb 02"
        ></meta>
        <meta name="twitter:card" content="Dentzine - Answer Feb 02"></meta>
        <meta property="og:description" content="Dentzine - Answer Feb 02" />
        <meta name="twitter:description" content="Dentzine - Answer Feb 02" />
        <meta name="twitter:title" content="Dentzine - Answer Feb 02" />
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
                        <span>Posted On:</span> <a href="#">Feb 02, 2021</a>
                      </li>
                      <li>
                        <span>Posted By:</span> <a href="#">Admin</a>
                      </li>
                    </ul>
                  </div>

                  <h3>Answer to Question of Feb 02</h3>

                  <p>Option B.</p>
                  <p>
                    Rationale: Apical patency is established during root canal
                    preparation with the purpose of maintaining access to the
                    foramen (mechanical goal), but it is important that after
                    instrumentation the foramen is not only patent but also
                    clean (biological goal). A patency file, which should have a
                    smaller diameter than the foramen, will probably not do this
                    cleaning properly. The use of an instrument that binds to
                    the foramen and touches all root canal walls will certainly
                    be more indicated. Therefore, the best approach would be to
                    ensure apical patency with a file of smaller diameter during
                    instrumentation and then clean the foramen with a file that
                    binds to its walls.
                  </p>

                  <div className="about-btn">
                    <Link href="/dentzine-dental-magzine">
                      <a className="default-btn">Back</a>
                    </Link>
                </div>
                <div className="about-btn">
                    <Link href="/">
                      <a className="default-btn">Home</a>
                    </Link>
                  </div>
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

export default BlogGridFeb02;
