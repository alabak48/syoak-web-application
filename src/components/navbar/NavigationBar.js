import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo_name.svg';
import {Nav} from "react-bootstrap";
import {FaPaperPlane, FaUserCircle} from 'react-icons/fa';
import "../../styles/styles.css";
import {FadeInEffect} from '../animation/FadeInEffect'

function NavigationBar() {
    return (
        <FadeInEffect>
            <header className="navigation px-5">
                <Navbar className="px-4" expand="lg">
                    <Container className="navigation__container">
                        <div className="logo-wrapper">
                            <Navbar.Brand href="#home" className="navigation__logo">
                                <img
                                    alt=""
                                    src={Logo}
                                    width="70"
                                    height="30"
                                    className="navigation__logo--first d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar__nav" data-bs-target="#responsive-navbar__nav" />
                        <Navbar.Collapse id="responsive-navbar__nav">
                            <Nav className="nav-links me-auto">
                                <Nav.Link className="nav-links nav-links__services me-auto">Services</Nav.Link>
                                <Nav.Link className="nav-links nav-links__projects me-auto">Projects</Nav.Link>
                                <Nav.Link className="nav-links nav-links__about-us me-auto">About us</Nav.Link>
                                <Nav.Link className="nav-links nav-links__blog me-auto">Blog</Nav.Link>
                            </Nav>
                            <Nav className="registration mr-auto">
                                <Nav.Link className="registration registration__log-in me-auto"><FaUserCircle
                                    className="icon-registration icon-registration__log-in"/> Log in</Nav.Link>
                                <Nav.Link eventKey={2} className="registration registration__contact-us me-auto">
                                    <FaPaperPlane className="icon-registration icon-registration__contact-us"/> Contact
                                    us
                                </Nav.Link>
                                <button className="btn btn--secondary">Sign up</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </FadeInEffect>
    );
};

export default NavigationBar;