import React from "react";
import Head from "next/head";
import NavbarFour from "../../components/_App/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";

const BlogGridFebArt01 = () => {
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
              headline: "Diabetes Mellitus and Periodontitis",
              image: "https://dentalprep.ca/assets/mainimage.jpg",
              author: {
                "@type": "Person",
                name: "Naghman Zuberi",
              },
              publisher: {
                "@type": "Organization",
                name: "Dentzine",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dentalprep.ca/assets/mainimage.jpg",
                },
              },
              datePublished: "2021-02-04",
              dateModified: "2021-02-04",
            }),
          }}
        />
        <title>Diabetes Mellitus and Periodontitis | Dentzine</title>
        <meta
          name="description"
          content="Diabetes Mellitus and Periodontitis"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Diabetes Mellitus and Periodontitis"
        ></meta>
        <meta
          name="twitter:card"
          content="Diabetes Mellitus and Periodontitis"
        ></meta>
        <meta
          property="og:description"
          content="Diabetes Mellitus and Periodontitis"
        />
        <meta
          name="twitter:description"
          content="Diabetes Mellitus and Periodontitis"
        />
        <meta
          name="twitter:title"
          content="Diabetes Mellitus and Periodontitis"
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
                        <span>Posted On:</span>
                        <span className="artwritten">Feb 04, 2021</span>
                      </li>
                      <li>
                        <span>Written By: </span>
                        <span className="artwritten">Naghman Zuberi</span>
                      </li>
                    </ul>
                  </div>

                  <h3>Diabetes Mellitus and Periodontitis</h3>

                  <p>
                    When the body is unable to produce a hormone called insulin
                    or cannot effectively use the Insulin it is producing. This
                    disease is called Diabetes Mellitus
                  </p>
                  <p>
                    Diabetes Mellitus is of Three types, Type I, Type II, and
                    Gestational Diabetes. In Type I Diabetes, which is also
                    known as Insulin Dependent Diabetes, the Islets of
                    Langerhans cannot produce Insulin. In Type II Diabetes, body
                    produces Insulin, but body cells cannot utilize Insulin
                    effectively. Type I diabetes usually develops in childhood
                    or in adolescence but can also develop in adulthood. Type II
                    Diabetes is found in adulthood. 90% of the people living
                    with Diabetes Mellitus are Type II Diabetics. Type I
                    Diabetics need Insulin to be injected to regulate their
                    blood glucose. Whereas some of the Type II Diabetics can
                    manage their blood glucose levels by healthy eating and
                    regular exercise. In some of the cases oral medications will
                    be required and in some extreme cases injectable Insulin is
                    required to maintain their blood glucose level.
                  </p>
                  <p>
                    More than 3% of the females during pregnancy develop
                    temporary diabetes. It is called Gestational Diabetes.
                    Diagnosis of Gestational Diabetes puts both mother and Child
                    at an increased risk of developing Diabetes later in life
                  </p>
                  <p>
                    Prediabetes is a condition where the blood glucose level is
                    towards higher side than normal but not too high to be
                    diagnosed as Type II Diabetes. Those who are diagnosed with
                    Prediabetes are at the same health risks as the Diabetics
                    are including atherosclerosis related hypertension, coronary
                    artery disease, and stroke.
                  </p>
                  <p>
                    Diabetics are at an increased risk of developing Diabetic
                    Nephropathy leading to Renal Failure, Diabetic Retinopathy
                    which may lead to blindness, Diabetic Peripheral Neuropathy
                    which may lead to a serious sequalae of limb amputation.
                    Diabetics also develop atherosclerosis related
                    Cardiovascular Problems.
                  </p>
                  <p>
                    In diabetics, if the blood glucose level is not controlled,
                    wounds take longer to heal.
                  </p>
                  <p>
                    Apart from all these generalized complications, Diabetics
                    are more prone to develop periodontal diseases (diseases of
                    the supporting structures of teeth). There are many reasons
                    including that diabetics are more prone to contract
                    infections. Periodontal disease is considered to be a
                    complication of diabetes.{" "}
                  </p>
                  <p>
                    Few studies have revealed that effective periodontal therapy
                    can result in reduced HbA1c. Several Meta-analyses have
                    confirmed that HbA1c reductions of around 0.4% can be
                    anticipated following an effective periodontal therapy
                  </p>
                  <p>
                    Apart from other measures to control blood glucose level in
                    diabetics, oral and periodontal health should also be
                    promoted as a part of diabetes management. At the moment
                    limited data supports this suggestion and a detailed large
                    randomized controlled trial should be conducted to confirm
                    these findings.
                  </p>
                  <p>&nbsp;</p>
                  <p>References:</p>
                  <p>
                    1. Diabetes Canada:{" "}
                    <Link href="https://www.diabetes.ca/about-diabetes/what-is-diabetes">
                      <a>
                        https://www.diabetes.ca/about-diabetes/what-is-diabetes
                      </a>
                    </Link>
                  </p>
                  <p>
                    1. Diabetes Canada:{" "}
                    <Link href="https://www.diabetes.ca/managing-my-diabetes/preventing-complications/nerve-damage---amputation">
                      <a>
                        https://www.diabetes.ca/managing-my-diabetes/preventing-complications/nerve-damage---amputation
                      </a>
                    </Link>
                  </p>
                  <p>3. Periodontitis and diabetes: a two-way relationship</p>
                  <p>
                    P. M. Preshaw, A. L. Alba, D. Herrera, S. Jepsen, A.
                    Konstantinidis, K. Makrilakis, and R. Taylor
                  </p>
                  <p></p>
                  <p>
                    <FacebookShareButton
                      url={
                        "https://dentalprep.ca/articles/diabetes-mellitus-and-periodontitis"
                      }
                      quote={"Diabetes Mellitus and Periodontitis"}
                      hashtag={"#dentalprep"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <span>&nbsp;</span>
                    <TwitterShareButton
                      url={
                        "https://dentalprep.ca/articles/diabetes-mellitus-and-periodontitis"
                      }
                      title={"Diabetes Mellitus and Periodontitis"}
                      hashtag={"#dentalprep"}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <span>&nbsp;</span>
                    <WhatsappShareButton
                      url={
                        "https://dentalprep.ca/articles/diabetes-mellitus-and-periodontitis"
                      }
                      title={"Diabetes Mellitus and Periodontitis"}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </p>
                  <p>
                    <div className="about-btn">
                      <Link href="/dentzine-dental-magzine">
                        <a className="default-btn">More Articles</a>
                      </Link>
                    </div>
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

export default BlogGridFebArt01;
