import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SyoakLogoName from '../../assets/SyoakLogoName.svg';
import {Nav} from "react-bootstrap";
import {FaPaperPlane, FaUserCircle} from 'react-icons/fa';
import {FadeInEffect} from '../animation/FadeInEffect';
import "../../postcss/styles.css";
import {useNavigate} from "react-router";

function NavigationBar() {
    const navigate = useNavigate();
    return (
        <FadeInEffect>
            <header className="navigation px-lg-5">

                <Navbar className="px-lg-4" expand="lg">

                    <Container className="navigation__container">
                        <img
                            alt=""
                            src={SyoakLogoName}
                            width="70"
                            height="30"
                            className="navigation__logo--second small-screen-only"
                        />{' '}
                        <Navbar.Toggle aria-controls="responsive-navbar__nav" data-bs-target="#responsive-navbar__nav" />
                        <Navbar.Collapse id="responsive-navbar__nav">
                            <Nav className="nav-links me-auto">
                                <Nav.Link className="nav-links nav-links__services me-auto" href="#servicesSection">Services</Nav.Link>
                                <Nav.Link className="nav-links nav-links__projects me-auto" href="#achievementSection">Projects</Nav.Link>
                                <Nav.Link className="nav-links nav-links__about-us me-auto" href="#aboutSection">About us</Nav.Link>
                                <Nav.Link className="nav-links nav-links__blog me-auto" href="#blogSection">Blog</Nav.Link>
                            </Nav>
                            <Nav className="registration mr-auto">
                                <Nav.Link className="registration registration__log-in me-auto"><FaUserCircle
                                    className="icon-registration icon-registration__log-in" /> Log in</Nav.Link>
                                <Nav.Link eventKey={2}
                                          className="registration registration__contact-us me-auto" href="#contactForm">
                                    <FaPaperPlane className="icon-registration icon-registration__contact-us"/> Contact
                                    us
                                </Nav.Link>
                                <button className="btn btn--secondary" onClick={() => navigate("/admin")}>Sign up</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </FadeInEffect>
    );
};

export default NavigationBar;