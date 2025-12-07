import React from "react";
import Head from "next/head";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Dentzine - A magzine for dentistry related articles</title>
        <meta
          name="description"
          content="Dentzine - Share your knowledge through this great oppertunity to publish your dentistry articles."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Dentzine - A magzine for the dentistry related articles"
        ></meta>
        <meta
          name="twitter:card"
          content="Dentzine - Share your knowledge through this great oppertunity to publish your dentistry articles."
        ></meta>
        <meta
          property="og:description"
          content="Dentzine - Share your knowledge through this great oppertunity to publish your dentistry articles."
        />
        <meta
          name="twitter:description"
          content="Dentzine - Share your knowledge through this great oppertunity to publish your dentistry articles."
        />
        <meta
          name="twitter:title"
          content="Dentzine - A magzine for the dentistry related articles"
        />
      </Head>
      <NavbarFour />
      <PageBanner
        pageTitle="Dentzine"
        homePageUrl="/"
        homePageText=""
        activePageText=""
        imgClass="bg-1"
      />

      <div className="blog-area">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Dentzine
              </li>
            </ol>
          </nav>
          <div className="section-title">
            <h1>Breaking the Norms</h1>
            <h3>Providing you a platform to get published</h3>
          </div>

          <div className="row">
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">1 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/answers/answer-feb-01">
                    <a>
                      <h3>Answer to the Question Feb 01</h3>
                    </a>
                  </Link>

                  <Link href="/answers/answer-feb-01">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">2 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/answers/answer-feb-02">
                    <a>
                      <h3>Answer to the Question Feb 02</h3>
                    </a>
                  </Link>

                  <Link href="/answers/answer-feb-02">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">4 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/articles/diabetes-mellitus-and-periodontitis/">
                    <a>
                      <h3>Diabetes Mellitus and Periodontitis</h3>
                      <p>Naghman Zuberi</p>
                    </a>
                  </Link>

                  <Link href="/articles/diabetes-mellitus-and-periodontitis">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">5 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/answers/answer-feb-05">
                    <a>
                      <h3>Answer to the Question Feb 05</h3>
                    </a>
                  </Link>

                  <Link href="/answers/answer-feb-05">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">9 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/answers/answer-feb-09">
                    <a>
                      <h3>Answer to the Question Feb 09</h3>
                    </a>
                  </Link>

                  <Link href="/answers/answer-feb-09">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">10 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/articles/dry-socket-possible-causes">
                    <a>
                      <h3>
                        Dry Socket- Possible Causes, Symptoms and Management
                      </h3>
                      <p>DR. Farooq Sorathia, Dr. Naghman Zuberi</p>
                    </a>
                  </Link>

                  <Link href="/articles/dry-socket-possible-causes">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">15 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/articles/DM-and-Periodontitis">
                    <a>
                      <h3>
                        Diabetes Mellitus and Periodontitis
                      </h3>
                      <p>Dr. Shikha Sharma BDS, MDS (Periodontology)</p>
                    </a>
                  </Link>

                  <Link href="/articles/DM-and-Periodontitis">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">15 Feb 2021</a>
                    </li>
                  </ul>

                  <Link href="/articles/DM-and-Periodontitis">
                    <a>
                      <h3>
                        Cross bites- Classification, Possible causes, and management
                      </h3>
                      <p>Moustafa El-Rass</p>
                      <p>BDS, MSc in Orthodontics and Pedodontics - Specialist Orthodontist
                      </p>
                    </a>
                  </Link>

                  <Link href="/articles/cross-bites-classification">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">03 June 2021</a>
                    </li>
                  </ul>

                  <Link href="/articles/Pit-and-fissure-sealants">
                    <a>
                      <h3>
                      Pit and fissure sealants
                      </h3>
                      <p>Dr. Meeti Charan BDS, MDS (Pedodontics)</p>
                    </a>
                  </Link>

                  <Link href="/articles/Pit-and-fissure-sealants">
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          <p>
            Send your publications at <b>info@dentalprep.ca</b> Please put{" "}
            <b>
              <i>To be published</i>
            </b>
            in the subject.
          </p>
        </div>
      </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default BlogGrid;
