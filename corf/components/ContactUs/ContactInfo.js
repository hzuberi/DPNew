import React from 'react'; 

const ContactInfo = () => {
    return (      
        <div className="contact-info-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<a href="tel:+4165793335">
                                    <i className="bx bx-phone-call"></i>
                                    <span className="coninfo">Call Us: +1(416)579-3335</span>
                            </a>
						</div>
					</div>


					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							
							<a href="mailto:info@dentalprep.ca">
                                    <i className="bx bxs-paper-plane"></i>
                                    <span className="coninfo">Email: info@dentalprep.ca</span>
                                </a>
						</div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							
							<a href="https://www.facebook.com/Dental-Prep-327568810768811" target="_blank">
                                <i className="bx bxl-facebook"></i>
                                <span className="coninfo">Dentalprep Facebook page</span>
                                </a>
						</div>
					</div>

					
				</div>
			</div>
		</div>
    )
}

export default ContactInfo;