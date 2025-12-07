import React from 'react';
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const NavbarFour = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <header className="header-area">
                <TopHeader />
                
                <div className="nav-area nav-area-seven">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container">
                                    <Link href="/">
                                        <a onClick={toggleNavbar} className="navbar-brand">
                                            <div style={{fontSize:'2rem',fontFamily:'MuseoModerno'}}>Dentalprep.ca</div>
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                                <Link href="/">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        Home
                                                    </a>
                                                </Link>
                                            </li>

        
                                            <li className="nav-item">
                                                <Link href="/courses-nbde-afk-acj" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                         Courses
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About</a>
                                                </Link>
                                            </li>
        
                                            <li className="nav-item">
                                                <Link href="/dental-sample-lecture" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        Sample Lectures
                                                    </a>
                                                </Link>
                                            </li>
                                    
                                            <li className="nav-item">
                                                <Link href="/dental-exam-practice-questions" rel="nofollow">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                        Practice Questions
                                                    </a>
                                                </Link>

                                            </li>

                                            <li className="nav-item">
                                                <Link href="/what-our-students-say-about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                    Testimonials
                                                    </a>
                                                </Link>  
                                            </li>


                                            <li className="nav-item">
                                                <Link href="/dentzine-dental-magzine" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                    <i>Dentzine</i>
                                                    </a>
                                                </Link>

                                                
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default NavbarFour;
