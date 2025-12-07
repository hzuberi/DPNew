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
              headline: "Pit and fissure sealants",
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
              datePublished: "2021-06-03",
              dateModified: "2021-06-03",
            }),
          }}
        />
        <title>Pit and fissure sealants | Dentzine</title>
        <meta name="description" content="Pit and fissure sealants" />
        <meta
          name="og:title"
          property="og:title"
          content="Pit and fissure sealants"
        ></meta>
        <meta name="twitter:card" content="Pit and fissure sealants"></meta>
        <meta property="og:description" content="Pit and fissure sealants" />
        <meta name="twitter:description" content="Pit and fissure sealants" />
        <meta name="twitter:title" content="Pit and fissure sealants" />
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
                        <span className="artwritten">June 03, 2021</span>
                      </li>
                      <li>
                        <span>Written By: </span>
                        <span className="artwritten">
                          <p>Dr. Meeti Charan</p>
                          <p>BDS, MDS (Pedodontics)</p>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3>Pit and fissure sealants</h3>

                  <p>
                    The occlusal morphology of the posterior teeth comprises of
                    pits and fissures which are more prone to plaque
                    accumulation in comparison to smooth surfaces. Difficulty in
                    maintaining oral hygiene is another attribute that increases
                    susceptibility of dental caries in them.
                  </p>
                  <p>
                    It has been noted that the enamel in pit and fissures does
                    not receive the same level of caries protection from
                    fluoride as smooth surface hence, it is important to protect
                    these vulnerable sites.
                  </p>
                  <p>
                    Sealant application is a preventive dental treatment in
                    which the application of sealants into pits and fissures
                    forms a micromechanical bond with the tooth thus providing a
                    physical barrier that keeps bacteria away from their source
                    of nutrient.
                  </p>
                  <p>
                    <b>Occlusal morphology of fissures:</b>
                  </p>
                  <p>
                    Indication for sealants depends on the morphology of
                    fissures. Commonly seen patterns are-
                  </p>
                  <p>
                    <table className="myTable">
                      <tr>
                        <td className="myTable" style={{width:100,padding:10}}>V type:</td>
                        <td className="myTable">
                          shallow and wide, tend to be self-cleaning and
                          somewhat caries-resistant
                        </td>
                        <td className="myTable">
                          non-invasive technique is recommended
                        </td>
                      </tr>
                      <tr>
                        <td className="myTable" style={{width:100,padding:10}}>U-type:</td>
                        <td className="myTable">
                          shallow and wide, tend to be self-cleaning and
                          somewhat caries-resistant
                        </td>
                        <td className="myTable">
                          non-invasive technique is recommended
                        </td>
                      </tr>
                      <tr>
                        <td className="myTable" style={{width:100,padding:10}}>I-type:</td>
                        <td className="myTable">
                          deep, narrow, and quite constricted, resembling a
                          bottleneck, caries susceptible
                        </td>
                        <td className="myTable">
                          may require invasive technique
                        </td>
                      </tr>
                      <tr>
                        <td className="myTable" style={{width:100,padding:10}}>IK- type:</td>
                        <td className="myTable">
                          narrow slit associated with a larger shape at the
                          bottom, highly susceptible to caries
                        </td>
                        <td className="myTable">
                          may require invasive technique
                        </td>
                      </tr>
                    </table>
                  </p>
                  <p>Where to place sealants:</p>
                  <p>
                    1. Pit and fissure of primary or permanent teeth when the
                    patient is at a high risk of experiencing caries
                  </p>
                  <p>
                    2. Non-cavitated deep pits and fissures in children,
                    adolescents, and adults
                  </p>
                  <p> 3. Individuals with special health care needs</p>
                  <p>Where not to place sealants:</p>
                  <p>
                    1. Shallow self-cleansing fissures in primary or permanent
                    teeth
                  </p>
                  <p> 2. Patients with low risk of developing carious lesion</p>
                  <p>
                    Classification: Pit and Fissure Sealant Materials are
                    classified into three main types:
                  </p>
                  <p>
                    <img
                      src="/img/articles/pits.png"
                      alt="Pit and fissure sealants"
                    />
                  </p>
                  <p>
                    <b>Procedure for sealants placement:</b>
                  </p>
                  <p>
                    It is suggested to clean the tooth with prior sealant
                    application with pumice or air polishing to ensures better
                    etching. Isolate the tooth using rubber dam as moisture
                    control is important for the success of sealants. In newly
                    erupted teeth a dry field can be achieved by cotton rolls
                    and isolation shields. The tooth is etched using 37%
                    orthophosphoric acid gel using application tips or brush.
                    Enamel is etched for 15 seconds for permanent molars and 15
                    to 30 seconds for primary teeth. Teeth with dental fluorosis
                    require additional etching time than this. Teeth are water
                    sprayed and air dried to get a frosty white appearance.
                    Following this bonding agent is applied and cured.
                  </p>
                  <p>
                    If glass ionomer cement is being used, etching and adhesive
                    is not required, and a surface conditioner may be used.
                    Sealant is made to flow from distal to mesial side in
                    mandibular teeth and from mesial aspect to distal in
                    maxillary teeth. Material should flow till cuspal inclines.
                    It is then cured for 10 to 20 seconds using visible light.
                    Sealant placement should be evaluated visually as well as
                    clinically. If the sealant has been lost or partially
                    retained, it should be reapplied.
                  </p>
                  <p>
                    Follow up appointments are required for clinically and
                    radiographical monitoring.
                  </p>
                  <p>
                    <b>Adhesive System:</b>
                  </p>
                  <p>
                    • A systematic review compared the retention rate of
                    sealants, combined with self-etch adhesive systems (sixth or
                    seventh generation), with that of etch-and-rinse adhesive
                    systems (fourth and fifth generations). The systematic
                    review concluded that the retention of occlusal fissure
                    sealants is higher when applied with the etch-and-rinse
                    adhesive system than with the self-etch adhesive system.
                  </p>

                  <p>
                    • An evidence-based report from the American Dental
                    Association and the American Academy of Pediatric Dentistry
                    supports the use of adhesive systems before sealant
                    application for better sealant retention.
                  </p>
                  <p>
                    <p>Reasons for failure:</p>
                  </p>
                  <p>
                    Most common cause is due to contamination from either saliva
                    or calcium phosphate products. Incomplete or slow
                    photopolymerization, air entrapment during placement are few
                    other causes.
                  </p>
                  <p>
                    <b>Controversies:</b>
                  </p>

                  <p>
                    • Bisphenol-A (BPA) are the most common monomers used in
                    resin composite restorations and resin-based sealants. It is
                    known for its estrogenic property with potential
                    reproductive and developmental human toxicity. However,
                    American Association of Pediatric Dentistry Guidelines, the
                    US Drug and Food Administration (FDA), and the American
                    Dental Association have concluded that the low-level of BPA
                    exposure from dental sealants poses no known health risks.
                  </p>

                  <p>
                    • There were concerns about partially lost sealant in that
                    it may leave sharp margins that trap food and eventually
                    lead to caries. A systematic review evaluated if the risk of
                    developing caries in previously sealed teeth with fully or
                    partially lost sealant surpasses the risk in teeth that have
                    never been sealed. It was found that the risk of caries
                    development in previously sealed teeth after a four-year
                    follow-up is less than or equal to that for never-sealed
                    teeth. In other words, teeth with partial or complete
                    sealant loss are not at a higher risk of developing caries
                    compared to never-sealed teeth.
                  </p>

                  <p>
                    <b>Conclusion:</b>
                  </p>
                  <p>
                    Selection of sealant material depends on various factors
                    like affordability, patient’s age, isolation technique and
                    the time of teeth eruption. Caries risk assessment is also
                    important in the decision-making process. With periodic
                    recall and evaluation, sealant is an effective means of
                    preventing pit and fissure caries in primary and permanent
                    teeth.
                  </p>
                  <p>References:</p>
                  <p>
                    1.Griffin, S.O.; Gray, S.K.; Malvitz, D.M.; Gooch, B.F.
                    Caries risk in formerly sealed teeth. J. Am. Dent. Assoc.
                    2009, 140, 415–423. [CrossRef] [PubMed]
                  </p>
                  <p>
                    2. Rohr M, Makinson OF, Burrow MF. Pits and fissures:
                    morphology. ASDC J Dent Child. 1991 Mar-Apr;58(2):97-103
                  </p>
                  <p>
                    3. Botton, G.; Morgental, C.S.; Scherer, M.M.; Lenzi, T.L.;
                    Montagner, A.F.; Rocha, R.D.O. Are self-etch adhesive
                    systems effective in the retention of occlusal sealants? A
                    systematic review and meta-analysis. Int. J. Paediatr. Dent.
                    2015, 26, 402–411. [CrossRef] [PubMed]{" "}
                  </p>
                  <p>
                    4. Beauchamp, J.; Caufield, P.W.; Crall, J.J.; Donly, K.;
                    Feigal, R.; Gooch, B.; Ismail, A.; Kohn, W.; Siegal, M.;
                    Simonsen, R. Evidence-based clinical recommendations for the
                    use of pit-and-fissure sealants: A report of the American
                    Dental Association Council on Scientific Affairs. J. Am.
                    Dent. Assoc. 2008, 139, 257–268. [CrossRef] [PubMed]
                  </p>
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
