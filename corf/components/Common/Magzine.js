import React from "react";
import dynamic from "next/dynamic";
import Link from 'next/link';

const OwlCarousel = dynamic(import("react-owl-carousel3"));


const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: false,
  autoplay: false,
  smartSpeed: 0,
  autoplayHoverPause: false,

  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 20,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

const Magzine = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="client-area c-bg pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Dentzine</h2>
          <span style={{color:'blue',textAlign:'right'}}>
                <Link href="/dentzine-dental-magzine">
                    <a><h6>(More Articles)</h6></a>
                </Link>
            </span>
        </div>

        {display ? (
          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="single-client">
              <h3>Cross bites- Classification, Possible causes, and management</h3>
              <p>Written by: <i>Moustafa El-Rass BDS, MSc in Orthodontics and Pedodontics - Specialist Orthodontist
</i></p>
              <p>
                <span style={{color:'blue'}}>
                <Link href="/articles/Cross-bites-classification">
                    <a>...Read More</a>
                </Link>
            </span>
              </p>

            </div>

            <div className="single-client">
              <h3>Dry Socket- Possible Causes, Symptoms and Management</h3>
              <p>Written by: <i>DR. Farooq Sorathia, Dr. Naghman Zuberi</i></p>
              <p>
                <span style={{color:'blue'}}>
                <Link href="/articles/dry-socket-possible-causes">
                    <a>...Read More</a>
                </Link>
            </span>
              </p>

            </div>

            
          </OwlCarousel>
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
};

export default Magzine;
