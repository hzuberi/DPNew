import React from 'react';

const TopHeader = () => {
    return (      
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <a href="tel:+4165793335">
                                    <i className="bx icon-phone"></i>
                                    Call Us: +1(416)579-3335
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@dentalprep.ca">
                                    <i className="bx icon-paperplane"></i>
                                    Email: info@dentalprep.ca
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Dental-Prep-327568810768811" target="_blank">
                                    <i className="bx icon-facebook"></i>
                                    Dentalprep Facebook page
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;