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
              headline:
                "Cross bites- Classification, Possible causes, and management",
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
        <title>
          Cross bites- Classification, Possible causes, and management |
          Dentzine
        </title>
        <meta
          name="description"
          content="Cross bites- Classification, Possible causes, and management"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Cross bites- Classification, Possible causes, and management"
        ></meta>
        <meta
          name="twitter:card"
          content="Cross bites- Classification, Possible causes, and management"
        ></meta>
        <meta
          property="og:description"
          content="Cross bites- Classification, Possible causes, and management"
        />
        <meta
          name="twitter:description"
          content="Cross bites- Classification, Possible causes, and management"
        />
        <meta
          name="twitter:title"
          content="Cross bites- Classification, Possible causes, and management"
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
                        <span className="artwritten">Feb 20, 2021</span>
                      </li>
                      <li>
                        <span>Written By: </span>
                        <span className="artwritten">
                          <p>Moustafa El-Rass</p>
                          <p>
                            BDS, MSc in Orthodontics and Pedodontics -
                            Specialist Orthodontist
                          </p>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3>
                    Cross bites- Classification, Possible causes, and management
                  </h3>

                  <p>
                    A cross bite is defined in laypersons’ terms as a type of
                    malocclusion where the upper teeth fit inside of lower teeth
                    which is exactly opposite as they fit in the normal
                    occlusion. According to Graber, however, cross bite is a
                    condition where one or more teeth may be abnormally malposed
                    buccally, lingually or labially with reference to opposing
                    teeth. Another common term is under bite, which differs from
                    cross bite by including the full arch of both anterior and
                    posterior teeth.
                  </p>
                  <p>
                    Cross bites can be classified broadly as anterior and
                    posterior cross bites. Furthermore, each can be
                    sub-classified as being true or functional cross bites. A
                    true anterior cross bite is defined as being present in both
                    centric relation and centric occlusion without much
                    noticeable change. On the other hand, a functional anterior
                    cross bite would be present with the patient biting in
                    centric occlusion only with the ability to bring the
                    anterior teeth to an edge to edge relationship when guided
                    to bite in centric relation. Another term for functional
                    anterior cross bite is pseudo class III. As for the
                    posterior cross bite, the same true and functional
                    sub-classifications can be applied. However, in case of
                    functional posterior cross bite there would be a lateral
                    rather the anterior jump manifesting clinically as
                    unilateral posterior cross bite on one side and normal
                    horizontal posterior bite on the opposite side with an
                    associated lower midline shift to the affected side. Other
                    classifications, based mainly on etiology, have been
                    advocated such as dental vs. skeletal, acquired vs.
                    developmental and so on.
                  </p>
                  <p>
                    Generally speaking, cross bites are not very common in North
                    America. However, the prevalence of posterior cross bites is
                    higher than the anterior counterparts.
                  </p>
                  <p>
                    What causes cross bites is usually more than a single
                    clear-cut factor; rather this problem is usually
                    multi-factorial regarding the cause. Depending on the nature
                    of a particular cross bite, etiology can be predicted with
                    the help of thorough medical and dental history recording,
                    clinical and radiographic examination as well as familial
                    and heredity analysis. For dental cross bites, both anterior
                    or posterior, some of the most common causes are history of
                    traumatic injury, prolonged retention of primary teeth,
                    ectopic eruption of permanent teeth, prolonged habits,
                    supernumerary teeth, cleft lip/palate, as well as arch
                    length discrepancy. On the other hand, skeletal cross bites
                    mostly have a genetic factor. For anterior skeletal cross
                    bite, there could be deficiency in anterior maxillary
                    growth, excessive anterior mandibular growth, or a
                    combination of both. Regarding posterior skeletal cross
                    bites, there could be a deficiency in horizontal maxillary
                    sutural growth, excessive horizontal mandibular growth it
                    could be a combination of two. As for the functional cross
                    bites, they are usually caused by any combination of the
                    aforementioned factors leading to premature occlusal
                    interferences which eventually lead the patient to develop a
                    more comfortable “shifted” position of mandible. Sucking
                    habits also contribute to development of posterior
                    functional crossbites.
                  </p>
                  <p>
                    Though the main motivation for patients/parents to seek the
                    orthodontic treatment is usually compromised esthetics, it
                    is prudent to explain the consequences of failure, or even
                    delay, in the treatment of such conditions and the possible
                    detrimental effects they might have on the developing
                    occlusion. Such as, tooth decay, periodontal diseases,
                    stress on facial and masticatory muscles, grinding of teeth
                    as well as abnormal growth patterns and psychological
                    effects, to name a few.
                  </p>
                  <p>
                    The timing of orthodontic intervention for the treatment of
                    cross bite has been a topic of constant debate. However,
                    there is a consensus on the importance of early treatment of
                    anterior dental cross bite as well as any type of
                    malocclusion associated with a functional shift from centric
                    relation; both anterior and posterior. On the other hand,
                    posterior cross bite can be either treated in early mixed
                    dentition or delayed after the eruption of premolars as long
                    as there are no obvious functional discrepancies or
                    associated shifts. For an anterior under bite with true
                    Class III skeletal malocclusion, the treatment is either
                    carried out in early mixed dentition for mild to moderate
                    cases or should be delayed until completion of skeletal
                    growth in more severe cases.
                  </p>
                  <p>
                    Treatment modalities for cross bites differ according to the
                    age of the patient, etiology, and severity of the disease.
                    In dental anterior cross bites, for instance, treatment may
                    vary from the periodic use of a simple tongue blade,
                    removable orthodontic appliance with springs, removable bite
                    plane, to a more complex fixed appliances or full mouth
                    braces. As for the posterior cross bites, maxillary dental
                    and/or skeletal expanders are used to correct the horizontal
                    deficiency usually associated with these types of
                    malocclusions. For mild to moderate functional cross bites,
                    a simple elimination of the premature contact by grinding or
                    extraction of the offending primary tooth with or without
                    functional appliance would solve the problem. For the
                    treatment of a more complexed anterior cross bite associated
                    with true class III skeletal malocclusions, different
                    treatment options are there. These options will be discussed
                    in another article soon as they are beyond the scope of this
                    article.
                  </p>
                  <p>
                    After the completion of cross bite treatment, retention is
                    usually not needed for simple anterior dental cross bites if
                    sufficient overbite is present. On the other hand, posterior
                    cross bites corrected by maxillary expansion usually need
                    prolonged retention of full arch with removable appliances.
                    There would be chances of relapse specially if there is a
                    history of prolonged thumbsucking.
                  </p>
                  <p>
                  *Dr. El-Rass  is full time Orthodontics Practitioner in Jeddah, KSA
                  </p>
                  <p></p>
                  <p>
                    <FacebookShareButton
                      url={
                        "https://dentalprep.ca/articles/Cross-bites-classification"
                      }
                      quote={
                        "Cross bites- Classification, Possible causes, and management"
                      }
                      hashtag={"#dentalprep"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <span>&nbsp;</span>
                    <TwitterShareButton
                      url={
                        "https://dentalprep.ca/articles/Cross-bites-classification"
                      }
                      title={
                        "Cross bites- Classification, Possible causes, and management"
                      }
                      hashtag={"#dentalprep"}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <span>&nbsp;</span>
                    <WhatsappShareButton
                      url={
                        "https://dentalprep.ca/articles/Cross-bites-classification"
                      }
                      title={
                        "Cross bites- Classification, Possible causes, and management"
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

export default BlogGridFebArt01;
