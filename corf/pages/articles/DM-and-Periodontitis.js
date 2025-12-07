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

const BlogGridFebArt03 = () => {
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
              headline: "Dentzine - DM (Diabetes Mellitus) and Periodontitis",
              image: "https://dentalprep.ca/assets/mainimage.jpg",
              author: {
                "@type": "Person",
                name: "Dr. Shikha Sharma BDS, MDS (Periodontology)",
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
        <title>
          Dentzine - DM (Diabetes Mellitus) and Periodontitis
        </title>
        <meta
          name="description"
          content="DM (Diabetes Mellitus) and Periodontitis"
        />
        <meta
          name="og:title"
          property="og:title"
          content="DM (Diabetes Mellitus) and Periodontitis"
        ></meta>
        <meta
          name="twitter:card"
          content="DM (Diabetes Mellitus) and Periodontitis"
        ></meta>
        <meta
          property="og:description"
          content="DM (Diabetes Mellitus) and Periodontitis"
        />
        <meta
          name="twitter:description"
          content="DM (Diabetes Mellitus) and Periodontitis"
        />
        <meta
          name="twitter:title"
          content="DM (Diabetes Mellitus) and Periodontitis"
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
                        <span style={{ color: "black", marginLeft: 10 }}>
                          Feb 15, 2021
                        </span>
                      </li>
                      <li>
                        <span>Written By: </span>
                        <span className="artwritten">
                        Dr. Shikha Sharma BDS, MDS (Periodontology)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3>Diabetes Mellitus and Periodontitis</h3>

                  <p>
                    Dentist: Good morning, how may we help you today?
                  </p>
                  <p>
                  Patient: Good morning doctor, from many months I feel all my teeth are shaking, have bad breath and my gums bleed every time I brush. I am just 40 years old and don’t want to lose my teeth. Please help me.
                  </p>
                  <p>
                  Dentist: Can you please tell me about your medical history and if you are under any medications.
                  </p>
                  <p>
                  Patient: I am a diabetic and take medications for the same.(Doctor proceeds to check the patient’s oral cavity….)

                  </p>
                  <p>
                  Dentist: Ma’am, when was the last time you got a cleaning done for your teeth?
                  </p>
                  <p>
                  Patient: Never doctor. My friends had told me that the teeth become weak after the cleaning treatment, therefore, I am very scared to get the treatment done.
                  </p>
                  <p>
                  Doctor: Dear ma’am, I will explain you in detail two important points now on the basis of your oral examination.
                  </p>
                  <p>
                  1. The gums support your teeth above the bone. Therefore, the infection from plaque and tartar spreads from your gums to your bones. You have severe tartar and plaque around all your teeth. They are sitting around the necks of your teeth and have infected the gums and bones. This must have started many years ago and had slowly infected and destroyed the bones surrounding your teeth. This is called “Periodontitis”. Therefore, there is no adequate bone support, and your teeth are only standing with the support of the tartar (calculus). In order to reduce the infection, I have to first remove the tartar. This will lead to your teeth shaking more as the support tartar was providing will no more be present. However, if we have to stop the infection and save your teeth from falling, we need to remove the source of infection, which is plaque and tartar and let the bones and gums heal.
                  </p>
                  <p>
                  2. An individual who has diabetes has a slower healing response in gums and bone in presence of plaque and tartar. Therefore, as you have diabetes there is a higher chance that your gums are inflamed from a very long time and the capacity to reduce inflammation and initiate healing is compromised. This had led to a cascade of destructive events spreading the infection to the gums and bones of all teeth. The level of bone has reduced; therefore, the support has reduced and the teeth are shaking.
                  </p>
                  <p>
                  Patient: Thank you doctor, for all this information. I was not aware of these details. I want to get my treatment done now as fast as possible.
                  </p>
                  <p>
                  POINTS TO UNDERSTAND IF YOU HAVE DIABETES (EVIDENCE-BASED)
                  </p>
                  <p>
                  •	The first sign of inflammation: Bleeding gums. Ask your dentist to check if your gums are bleeding.</p>
                  <p>•	Notice if your teeth are developing spaces, have pus coming out of gums, bad breath, teeth are becoming loose or experiencing a bad taste in the mouth. Seek your dentist immediately.</p>
                  <p>•	Periodontitis affects both children as well as adults with diabetes.</p>
                  <p>•	There are diabetics who will have less inflammation in comparison to those who have double to five times the level of inflammation in presence of same levels of oral hygiene. This is because each diabetic has a different level of response to the presence of plaque and tartar (calculus) in the mouth, they are “hyper-responsive”, that is why no two diabetics should compare each other and seek a dentist for an absolute diagnosis.</p>
                  <p>•	Diabetes and Periodontitis are interlinked. If your gums are bleeding and are infected, they may be worsening your diabetes status. Extensive research has provided consistent evidence that treatment of periodontitis may improve the HbA1c levels in diabetics.</p>
                  <p>•	As the healing is slow in diabetics, regular follow-ups are mandatory to ensure the maintenance of periodontal health.

                  </p>
                  <p>
                    <FacebookShareButton
                      url={
                        "https://dentalprep.ca/articles/DM-and-Periodontitis"
                      }
                      quote={
                        "Diabetes Mellitus and Periodontitis"
                      }
                      hashtag={"#dentalprep"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <span>&nbsp;</span>
                    <TwitterShareButton
                      url={
                        "https://dentalprep.ca/articles/DM-and-Periodontitis"
                      }
                      title={
                        "Diabetes Mellitus and Periodontitis"
                      }
                      hashtag={"#dentalprep"}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <span>&nbsp;</span>
                    <WhatsappShareButton
                      url={"https://dentalprep.ca/articles/DM-and-Periodontitis"}
                      title={
                        "Diabetes Mellitus and Periodontitis"
                      }
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

export default BlogGridFebArt03;
