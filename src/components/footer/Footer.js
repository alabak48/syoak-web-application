import Container from "react-bootstrap/Container";
import {Col, Row, Image} from "react-bootstrap";
import LogoName from "../../assets/Logo_name.svg"
import {FaMapMarkerAlt, FaPaperPlane} from 'react-icons/fa';
import {SlideUpCard} from '../animation/SlideUpEffect';
import {FadeInEffect} from '../animation/FadeInEffect';

function FooterContainer() {
    return (
        <footer className="footer">
            <Container className="footer-container mt-5 px-3 px-lg-5 px-sm-3">
                <Row className="footer__row px-lg-5">
                    <Col lg={6} md={3} sm={12} className="footer__col">
                        <FadeInEffect>
                            <SlideUpCard>
                                <Image className="footer__img" src={LogoName}></Image>
                                <p className="footer__text mt-4">We have a long and proud history giving emphasis to
                                    environment
                                    social and economic outcomes
                                    to deliver places that respond</p>
                                <div className="footer-contact__icon">
                                    <FaMapMarkerAlt/>1182 Williams Avenue, San Francisco
                                </div>
                                <div className="footer-contact__icon">
                                    <FaPaperPlane/> hello@syoak.com
                                </div>
                            </SlideUpCard>
                        </FadeInEffect>
                    </Col>
                    <Col lg={2} md={3} sm={2} className="footer-about__list mt-3">
                        <FadeInEffect>
                            <SlideUpCard>
                                <ul>
                                    <h6 className="footer-about__title about__title--company">Company</h6>
                                    <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">About
                                        us</a></li>
                                    <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Company</a>
                                    </li>
                                    <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">How we do
                                        it</a>
                                    </li>
                                </ul>
                            </SlideUpCard>
                        </FadeInEffect>
                    </Col>
                    <Col lg={2} md={3} sm={2} className="footer-about__list mt-3">
                        <SlideUpCard>
                            <ul>
                                <h6 className="footer-about__title about__title--services">Services</h6>
                                <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Oil & Gas
                                    Industry</a></li>
                                <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Fuel
                                    Management</a>
                                </li>
                                <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Chemical
                                    Research</a></li>
                                <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Power &
                                    Energy</a>
                                </li>
                                <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Eco & Bio
                                    power</a>
                                </li>
                            </ul>
                        </SlideUpCard>
                    </Col>
                    <Col lg={2} md={3} sm={1} className="footer-about__list mt-3 pb-lg-5">
                        <FadeInEffect>
                            <SlideUpCard>
                                <ul>
                                    <h6 className="footer-about__title about__title--projects">Projects</h6>
                                    <li><a className="footer-about__anchor--redirect" href="http://localhost:3000/">Factory</a>
                                    </li>
                                    <li><a className="footer-about__anchor--redirect"
                                           href="http://localhost:3000/">Industry</a></li>
                                    <li><a className="footer-about__anchor--redirect"
                                           href="http://localhost:3000/">Manufacturing</a>
                                    </li>
                                    <li><a className="footer-about__anchor--redirect"
                                           href="http://localhost:3000/">Mechanical</a></li>
                                </ul>
                            </SlideUpCard>
                        </FadeInEffect>
                    </Col>
                </Row>
            </Container>
            <Container className="footer-copyright mt-5 px-lg-5">
                <Row>
                    <Col lg={6} sm={6} className="footer-copyright__text mt-3 px-lg-5 pb-lg-3">
                        Copyright (c) 2019 syoak.com All rights reserved.
                    </Col>
                    <Col lg={2} sm={2} className="footer-copyright__text mt-3 px-lg-5">Support</Col>
                    <Col lg={2} sm={2} className="footer-copyright__text mt-3 px-lg-5">Privacy Policy</Col>
                    <Col lg={2} sm={2} className="footer-copyright__text mt-3 px-lg-5">Terms of Condition</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterContainer