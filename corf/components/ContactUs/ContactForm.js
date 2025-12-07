import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import Link from "next/link";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  let btnRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    btnRef.current.setAttribute("disabled", "disabled");
    try {
      const url = "https://dentalprep.ca/service/Service1.svc/sendInquiry";
      const { name, email, number, subject, text } = contact;
      const pay = { name, email, number, subject, text };
      const payload = JSON.stringify(pay);
      console.log(payload);
      const headers = {
        'Content-Type': 'application/json'
      }
      axios.post(url, payload, {
          headers: headers
        })
        .then((res) => {
          console.log(res);
        })
        .catch(console.error);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-contact-area contact">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
        <div className="section-title">
          <h2>Drop us a message for any query</h2>
          <p>
            For any inquiry about the courses we offer feel free to contact us.
            We will be please to answer your query as soon as possible.
          </p>
        </div>

        <div className="contact-wrap contact-pages mb-0">
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={contact.name}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.name && "Name is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={contact.email}
                      onChange={handleChange}
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.email && "Email is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="Your Phone"
                      value={contact.number}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.number && "Number is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.subject && "Subject is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="text"
                      className="form-control"
                      cols="30"
                      rows="5"
                      placeholder="Your Message"
                      value={contact.text}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.text && "Text body is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="contact-num">
                    <h3>Phone No:</h3>
                    <span>
                      <a href="tel:+14165793335">+1(416)-579-3335</a>
                    </span>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <button
                    type="submit"
                    className="default-btn btn-two"
                    ref={btnRef}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
