import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { FaApple, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaGooglePlay, FaThreads, FaXTwitter } from 'react-icons/fa6';
import { IoCall, IoLogInOutline } from 'react-icons/io5';
import { PiDna, PiLockKeyOpen } from 'react-icons/pi';
import { BsBuildingsFill, BsFillThreadsFill, BsTranslate } from 'react-icons/bs';
import { GiFamilyTree } from 'react-icons/gi';
import { TbBinaryTreeFilled } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { BiDirections } from "react-icons/bi";


function Contact() {



    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

       
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.fname) newErrors.fname = "Full name is required";
        if (!formData.lname) newErrors.lname = "Subject name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.message) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            console.log(formData);
        }
    }


    return (
        <>
            {/* <section className="py-3 px-5 bread-crumb-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="text-white fw-bold">Contact Us</h1>
                    </div>

                    <div>
                        <Breadcrumb className="mt-2">
                            <Breadcrumb.Item
                                linkAs={Link}
                                linkProps={{ to: "/" }}
                            >
                                Home
                            </Breadcrumb.Item>

                            <Breadcrumb.Item>
                                Contact Us
                            </Breadcrumb.Item>

                           
                        </Breadcrumb>
                    </div>
                </div>
            </section> */}

            <section className="contact-us-section py-5" id="contact">
                <div className="container">
                    <div className="contact-heading text-center m-auto"><h1 className=" fw-bold">Contact Us</h1></div>
                    <div className="row align-items-center pt-5">

                        
                        <div className="col-12 col-md-12 col-lg-6 mb-3">
                            <div className="contact-detail py-5">
                                <h6 className="fw-bold">GET IN TOUCH</h6>
                                <h2 className="fw-bold">We’d Love To Hear From You.</h2>
                                <p>We value your feedback. Contact us with any questions, suggestions, or feedback you may have. We’re always striving to improve your Kintree experience.</p>

                                <p className="contact-p">Have a project in mind? Send a message.</p>
                                <p className="contact-text">

                                    <span className="fs-5 me-2"><IoMdMail /></span> <a href="mailto: info@kintree.com">

                                        info@kintree.com
                                    </a>
                                </p>
                                <p className="contact-p">Would you like to join our growing team?</p>
                                <p className="contact-text d-flex">
                                    <span className="fs-4 me-2"><BiDirections /></span> 315-Parvati Industrial Estate, New Sun Mill Compound, Lower Parel West, Mumbai, Maharashtra 400013
                                </p>
                            </div>
                        </div>

                        
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="form-shad mb-3 p-4 shadow">
                                <h3 className="fw-bold mb-3">Send A Message</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="fname"
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                value={formData.fname}
                                                onChange={handleChange}
                                            />
                                            <p className="text-danger">{errors.fname}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            <p className="text-danger">{errors.phone}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="lname"
                                                className="form-control"
                                                placeholder="Subject"
                                                value={formData.lname}
                                                onChange={handleChange}
                                            />
                                            <p className="text-danger">{errors.lname}</p>
                                        </div>





                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Write message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            <p className="text-danger">{errors.message}</p>
                                        </div>

                                        <div className="col-12 text-center">
                                            <button type="submit" className="submit-btn">
                                                Submit
                                            </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>


                <div className="m-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.599426526896!2d72.82431337418191!3d18.99329025456588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5daf2c31df%3A0x273a4ce7afc2a958!2sKintree%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1770875266761!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kintree Location"
                    ></iframe>
                </div>

            </section>

            <footer className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className='text-center'>
                            <img className='footer-logo' src="assets/images/new-logo.png" alt="" />
                            <Nav className="justify-content-center pt-3">
                                <Nav.Link as={NavLink} to="/" className="text-black">
                                    Home
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/about" className="text-black">
                                    About
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/blog" className="text-black">
                                    Blog
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/contact" className="text-black">
                                    Contact Us
                                </Nav.Link>
                            </Nav>

                            <div className='footer-icon-container d-flex justify-content-center gap-2 pt-3'>
                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaInstagram />
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaFacebookF />
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaXTwitter />
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaLinkedinIn />
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaYoutube />
                                    </a>
                                </div>

                                <div>
                                    <a href="#" className='footer-icons fs-4'>
                                        <FaThreads />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='footer-text-container d-flex gap-3 mt-3'>
                            <div className='footer-text'>
                                <p className="text-white">@2025 Kintree All rights reserved</p>
                            </div>
                            <div className='footer-text '>
                                <a className='text-decoration-none text-white' href="#">Terms and Condition</a>
                            </div>
                            <div className='footer-text '>
                                <a className='text-decoration-none text-white' href="#">Privacy Policy</a>
                            </div>
                            <div className='footer-text '>
                                <a className='text-decoration-none text-white' href="#">Shipping & Delivery</a>
                            </div>
                            <div className='footer-text '>
                                <a className='text-decoration-none text-white' href="#">Cancellation & Refund</a>
                            </div>
                            <div className='footer-text '>
                                <a className='text-decoration-none text-white' href="#">Child Safety Standards Policy</a>
                            </div>
                            <div className='footer-text'>
                                <p className="text-white">Made with ❤️ in India</p>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    );
}

export default Contact;