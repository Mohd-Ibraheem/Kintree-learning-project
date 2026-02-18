import { NavLink, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogInOutline } from "react-icons/io5";
import { PiLockKeyOpen } from "react-icons/pi";

function Layout() {
  return (
    <>
      {/* ===== SAME HOME NAVBAR ===== */}
      <Navbar expand="lg" className="w-100 px-4 py-0 fixed-top nav-bg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img
              className="nav-logo"
              src="/assets/images/new-logo.png"
              alt="Kintree"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 offset-3 gap-5" navbarScroll>
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>

            <button className="me-5 nav-btn log">
              <span className="me-2">
                <PiLockKeyOpen />
              </span>
              Login
            </button>

            <button className="nav-btn sing">
              <span className="me-1 fs-6">
                <IoLogInOutline />
              </span>
              Sign Up
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== PAGE CONTENT ===== */}
      <main style={{ paddingTop: "70px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;