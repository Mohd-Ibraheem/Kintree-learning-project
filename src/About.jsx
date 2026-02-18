import { Link, NavLink } from "react-router-dom";
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

import "swiper/css";
import "swiper/css/pagination";


function About() {
    return (
        <>
            <section className='py-5 hero-section'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-12 col-md-5 col-lg-5'>
                            <div>
                                <h1 className='fw-bold banner-text text-white'>About <span className='k-color'> Kintree</span></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-7 col-lg-7'>
                            <div>
                                <p className='about-main-text text-white'>At Kintree, we understand that family is more than just parents and siblings. It’s about all the people you love and cherish, no matter how far apart you are. That’s why we created Kintree – a place where families can come together, share stories, and stay connected.</p>
                                <p className='text-white '>We believe in making it easy for you to stay in touch with grandparents, cousins, and everyone else who matters to you. Our goal is to help you build stronger family bonds and create lasting memories.</p>
                                <p className="text-white">We’re always working to improve Kintree and make it even better for families like yours. Because at Kintree, family always comes first.</p>

                            </div>

                        </div>


                    </div>
                </div>
            </section>

            <section className='py-5 about-section'>
                <div className="container">
                    {/* <div className='text-center'>
                        <h1 className=' fw-bold'>About us</h1>
                        <p className='text-muted fs-6'>Kintree connects families across generations. Share stories, photos, and memories with loved ones, no matter the distance. We empower you to build stronger bonds and create lasting memories. Family comes first.</p>
                        <button className='exp-btn fw-bold'>Explore Now</button>
                    </div> */}
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                            <Card className='f-card ' style={{ width: "100%", height: "200px" }}>
                                <Card.Body>
                                    <div className='Card-icon icon-1 mb-2'><GiFamilyTree /></div>
                                    <Card.Title>53000+</Card.Title>
                                    <Card.Text>Family Trees Created</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                            <Card className='s-card' style={{ width: "100%", height: "200px" }}>
                                <Card.Body>
                                    <div className='Card-icon icon-2 mb-2'>< BsBuildingsFill /></div>
                                    <Card.Title>100+</Card.Title>
                                    <Card.Text>Countries around the world</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                            <Card className='t-card' style={{ width: "100%", height: "200px" }}>
                                <Card.Body>
                                    <div className='Card-icon icon-3 mb-2'><BsTranslate /></div>
                                    <Card.Title>10+</Card.Title>
                                    <Card.Text>Languages</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </section>

            <section className="discover-section py-5">
                <div className="container">
                    <div className="row pt-3 align-items-center">
                        <div className='col-12 col-md-8 col-lg-8'>
                            <div>
                                <h1 className='fw-bold'>Discover Your Family Story</h1>
                                <p>Discovering your family story is a journey that connects you to the past and enriches your understanding of who you are today. At Kintree, we make it easy to trace your ancestry, explore your heritage.</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="discover-img-container mb-4">
                                <img className="img-fluid" src="/assets/images/landing-banner-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="discover-img-container mb-4">
                                <img className="img-fluid" src="/assets/images/discover-img2.png" alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-8 col-lg-8'>
                            <div>
                                <h1 className='fw-bold'>Explore Your Ancestry</h1>
                                <p>Explore your ancestry with Kintree. Build your family tree, connect with relatives, and preserve your family legacy for generations to come.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row pt-3 align-items-center">
                        <div className='col-12 col-md-8 col-lg-8'>
                            <div>
                                <h1 className='fw-bold'>Find & Reunite </h1>
                                <p>Reconnect with your roots. Kintree helps you find and connect with long-lost family members. Discover your family history and build stronger bonds.</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='discover-img-container'>
                                <img className="img-fluid" src="/assets/images/best-family-tree-app.png.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="gray-bg py-5">
                <div className="container">
                    <div className="sec-world">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-lg-6">
                                <h2 className="fw-bold">Find your family in the
                                    world’s largest shared Kintree.</h2>
                                <p>We have over <b>a billion unique profiles</b> in our ever-growing family tree database.
                                    Discover the stories, records, and memories others have shared about your ancestors.

                                    Connect the past with the present — and become part of a global legacy.</p>
                                <p>Discover the stories, records, photographs, and personal memories that others have already shared about your ancestors. From birth and marriage records to family traditions and historical documents, every contribution helps bring your family history to life.</p>
                                {/* <Link to="/about">
                                    <button className='exp-btn fw-bold'>
                                        Explore Now
                                    </button>
                                </Link> */}

                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div>
                                    <img className="img-fluid" src="public\assets\images\family-tree-wolrd.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='privacy-section py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-12 col-md-1 col-lg-1'>
                            <div className='pryc-img'>
                                <img src="/assets/images/privacy.webp" alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className=' offset-1'>
                                <h1>Your privacy is our priority</h1>
                                <p className='text-white'>Your data is in safe hands. We are GDPR and ISO:27001 certified, meaning your information is protected by the highest standards of data security. Rest assured, your privacy is our priority.</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='pryc-2 offset-5'>
                                <img src="/assets/images/cert.png.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="vision-mission py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="mission-img">
                                <img className="img-fluid object-fit-cover" src="/assets/images/vision.png.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="mission-text">
                                <h1 className="fw-bold">Our Vision</h1>
                                <p>At Kintree, our vision is to empower families to connect, share, and grow across generations. We strive to be the leading platform where families can build stronger bonds, preserve their legacy, and celebrate their shared history. We envision a world where families are deeply connected, not just by blood, but by the stories, memories, and traditions they cherish and pass down through generations. We aim to create a vibrant and inclusive community where families can come together, support each other, and celebrate their shared heritage, ensuring that family legacies thrive for generations to come.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pt-5">
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="mission-text">
                                <h1 className="fw-bold">Our Mission</h1>
                                <p>At Kintree, we believe that family is more than just blood; it’s a bond that transcends distance and time. We’re a social platform built on the foundation of togetherness, designed to connect families across generations. Our mission is to empower you to nurture and strengthen your family relationships. We provide a safe and engaging space where you can share stories, photos, and memories, and stay connected with loved ones, no matter where life takes you. Driven by our passion for family, we continuously innovate to help you transform the way you connect with your loved ones. Because at Kintree, family always comes first.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="mission-img">
                                <img className="img-fluid object-fit-cover" src="/assets/images/mission.png.webp" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="py-5 testimonial-section">
                <div className="container testimonial">
                    <h1 className='fw-bold text-center'>Thousands of users talk about us</h1>
                    <div className="pt-5">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            autoplay={{ delay: 2500 }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <Card className="slid-card1 p-3" style={{ height: "320px" }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src="/assets/images/testimonial-user-1.png.webp"
                                                    alt="Vishal Agawane"
                                                    className="img-fluid rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="mb-0">Vishal Agawane</h3>
                                            </div>
                                        </div>

                                        <Card.Text className='mt-4'>Overall app is good and user friendly, The interface is fresh, colour scheme is also mild. Easy to enroll the family members and helps you to create your family tree in a very simple steps. Very helpful to keep a track record of our family members lives. Foreroom is great experience to share, likes & comment the post.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <Card className="slid-card2 p-3" style={{ height: "320px" }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src="/assets/images/testimonial-user-3.png.webp"
                                                    alt="Vishal Agawane"
                                                    className="img-fluid rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="mb-0">Ibrahim Khatri</h3>
                                            </div>
                                        </div>

                                        <Card.Text className='mt-4'>Kintree is a comprehensive family social platform to know your past, live your present and leave traces for your future generations.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <Card className="slid-card3 p-3" style={{ height: "320px" }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src="/assets/images/testimonial-user-2.png.webp"
                                                    alt="Vishal Agawane"
                                                    className="img-fluid rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="mb-0">Ajay Vyas</h3>
                                            </div>
                                        </div>

                                        <Card.Text className='mt-4'>One app by which we can connect with our family members. Kudos to Kintree Team</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card3 p-3" style={{ height: "320px" }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src="/assets/images/testimonial-user-5.png.webp"
                                                    alt="Vishal Agawane"
                                                    className="img-fluid rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="mb-0">Rajesh Chaudhary</h3>
                                            </div>
                                        </div>

                                        <Card.Text className='mt-4'>Kintree is a best app which you can use to add your family members. It will be very helpful for your future generations for know about their ancestors.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card1 p-3" style={{ height: "320px" }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src="/assets/images/testimonial-user-1.png.webp"
                                                    alt="Vishal Agawane"
                                                    className="img-fluid rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="mb-0">Vishal Agawane</h3>
                                            </div>
                                        </div>

                                        <Card.Text className='mt-4'>Overall app is good and user friendly, The interface is fresh, colour scheme is also mild. Easy to enroll the family members and helps you to create your family tree in a very simple steps. Very helpful to keep a track record of our family members lives. Foreroom is great experience to share, likes & comment the post.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>


            <section className="py-5 blog-section">
                <div className="container blog">
                    <h1 className='fw-bold text-center'>Our Blogs</h1>
                    <div className="pt-5">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            autoplay={{ delay: 2500 }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <Card className="slid-card1 p-1" style={{ height: "435px" }}>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card1 p-1 " style={{ height: "435px" }}>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card1 p-1" style={{ height: "435px" }}>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card1 p-1" style={{ height: "435px" }}>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="slid-card1 p-1" style={{ height: "435px" }}>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>


            <section className='featured-section py-5'>

                <div className="text-center">
                    <h1 className="fw-bold">We Got Featured in</h1>
                </div>

                <div className="logo-slider mt-4">
                    <div className="logo-track">
                        <div className="featured-img">
                            <img src="/assets/images/cxo-200x49.png.webp" alt="cxo" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/FE-200x83.png.webp" alt="FE" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/sm-200x45.png.webp" alt="sm" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/TG-200x66.png.webp" alt="TG" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/TOM-200x111.png.webp" alt="TOM" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/dq-200x140.png.webp" alt="dq" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/cxo-200x49.png.webp" alt="cxo" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/FE-200x83.png.webp" alt="FE" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/sm-200x45.png.webp" alt="sm" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/TG-200x66.png.webp" alt="TG" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/TOM-200x111.png.webp" alt="TOM" />
                        </div>
                        <div className="featured-img">
                            <img src="/assets/images/dq-200x140.png.webp" alt="dq" />
                        </div>

                    </div>
                </div>

            </section>

            <section className='faq-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1 className='fw-bold'>Frequently Asked Questions</h1>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="p-3">
                                <h2>Have Questions? We’ve Got Answers
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-8">
                            <div> <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        What is the best free family tree app?</Accordion.Header>
                                    <Accordion.Body>
                                        Kintree is one of the best free family tree apps for anyone who wants a simple, modern, and intuitive way to create and preserve their family history. It allows you to build your family tree, add details, upload photos, and collaborate with relatives—all within a clean and easy-to-use interface.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Can I build a family tree on Kintree for free?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. Kintree offers a free plan where you can create a family tree. This lets you start building your family connections and exploring your roots without any payment.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How do I create a family tree on the Kintree app?</Accordion.Header>
                                    <Accordion.Body>
                                        You can create a family tree on Kintree by following these steps:

                                        Sign up for a free account.
                                        Create a new tree and name it.
                                        Add your immediate family members such as parents, spouse, and children.
                                        Continue expanding by adding grandparents, ancestors, and extended relatives.
                                        Upload photos and personal details to enrich each profile.
                                        Kintree automatically arranges your entries into a clean and organized family tree layout.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        What features make Kintree one of the best family tree apps?</Accordion.Header>
                                    <Accordion.Body>
                                        Several features make Kintree stand out as one of the best family tree apps:

                                        Easy free family tree creation
                                        Collaborative tree building with relatives
                                        Option to upload photos and memories
                                        Private or public tree settings
                                        Simple navigation with multi-generation viewing
                                        GDPR and ISO-27001 compliant data security
                                        These features make Kintree ideal for preserving and sharing your family legacy.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        Is my information safe on the Kintree family tree app?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. Kintree uses strong privacy and security practices. Only the people you invite can view or edit your family tree unless you choose to make it public. The platform follows strict data protection standards, including GDPR and ISO-27001 compliance.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion></div>
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
    )
}

export default About;