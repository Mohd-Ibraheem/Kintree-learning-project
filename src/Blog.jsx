import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { FaApple, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaGooglePlay, FaThreads, FaXTwitter } from 'react-icons/fa6';
import { IoLogInOutline } from 'react-icons/io5';
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

import "swiper/css";
import "swiper/css/pagination";

function Blog() {
    return (
        <>

            {/* <section className="py-3 px-5 bread-crumb-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="text-white fw-bold">Blogs</h1>
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
                                Blog
                            </Breadcrumb.Item>

                        </Breadcrumb>
                    </div>
                </div>
            </section> */}

            <section className="py-5 ">
                <div className="container">
                    <div className="bolg-heading text-center m-auto"><h1 className=" fw-bold">Blog</h1></div>
                    <div className="row pt-4">
                        <div className="col-12 col-md-4 col-lg4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/Family-Traditions-.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>One Season</h5>
                                            <Card.Text className='mt-3'>As winter begins to wane in India, a wave of joyous harvest festivals sweeps across the country.he bonfires of Lohri, the overflowing </Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/Kintree-Christmas-family-tree-app.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>How to Create a Ch. </h5>
                                            <Card.Text className='mt-3'>There’s something special about Christmas memories—the glow of the tree, the laughter around the dinner table. </Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 col-lg4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/Family-Traditions-.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>One Season</h5>
                                            <Card.Text className='mt-3'>As winter begins to wane in India, a wave of joyous harvest festivals sweeps across the country.he bonfires of Lohri, the overflowing </Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-12-col-md-4 col-lg-4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/Kintree-Family-Tree.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>Why Every Family</h5>
                                            <Card.Text className='mt-3'>Every family has at least one spooky story — the kind that resurfaces during late-night conversations when the lights</Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4 col-lg4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/Family-Traditions-.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>One Season</h5>
                                            <Card.Text className='mt-3'>As winter begins to wane in India, a wave of joyous harvest festivals sweeps across the country.he bonfires of Lohri, the overflowing </Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <Card className="slid-card1 p-1 border-0 mb-4" style={{ height: "435px" }}>
                                <Card.Body>

                                    <div className='blog-img'>
                                        <img
                                            src="/assets/images/best-family-tree-app.png.webp"
                                            alt="Vishal Agawane"
                                            className="img-fluid object-fit-cover"
                                            style={{ width: "100%", height: "250px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-end'>
                                        <div>
                                            <h5 className='fw-bold mt-3'>The Interview Project:</h5>
                                            <Card.Text className='mt-3'>Have you ever listened to an older relative tell a story from their youth and thought, “I need to write this down”? We’ve all been there. </Card.Text>
                                        </div>
                                        <div>
                                            <button className='blog-btn ms-5'><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
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

export default Blog;