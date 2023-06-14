import React from 'react';
import {Container, Row, Col, Image, Tooltip, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';
import {FadeInEffect} from "../animation/FadeInEffect";
import {RxCross1} from 'react-icons/rx';
import Image1 from "../../assets/img_1.svg"
import Image2 from "../../assets/img_2.svg"
import Image3 from "../../assets/img_3.svg"

    const tooltip = (
        <Tooltip id="tooltip">
            <div className="tooltip__container">
                <div className="tooltip__icon">
                    <RxCross1 alt="Tooltip X" className="tooltip__x" />
                </div>
                <div className="tooltip__content">
                    Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk
                </div>
            </div>
        </Tooltip>
    );

function BlogContainer() {
    return (
        <section className="blog px-lg-0 px-xl-5" id="blogSection">
            <Container className="blog__container mt-5 pb-5">
                <Row className="blog__row px-lg-5 mt-sm-5 pt-5">
                    <Col xl={6} lg={6} md={6}>
                        <FadeInEffect>
                            <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h5>
                            <p>We have a long and proud history giving emphasis to environment social and economic
                                outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </FadeInEffect>
                    </Col>
                    <Col xl={6} lg={6} md={6} className="blog__col d-flex justify-content-center px-5">
                        <FadeInEffect>
                            <div style={{position: 'relative'}}>
                                <ButtonToolbar style={{position: 'absolute', top: 190, right: 50, zIndex: 2}}>
                                    <OverlayTrigger placement="top" overlay={tooltip}>
                                        <button bsstyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <ButtonToolbar style={{position: 'absolute', top: 10, left: 100, zIndex: 2}}>
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <button bsstyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <Image src={Image1} alt="Mechanic part" className="blog__img" />
                            </div>




                        </FadeInEffect>
                    </Col>
                </Row>
                <Row className="blog__row px-lg-5 mt-sm-5 pt-5">
                    <Col xl={6} lg={6} md={6} className="blog__col d-flex justify-content-left px-5 order-2 order-sm-1">
                        <FadeInEffect>
                            <div style={{position: 'relative'}}>
                                <ButtonToolbar style={{position: 'absolute', top: 190, right: 50, zIndex: 2}}>
                                    <OverlayTrigger placement="top" overlay={tooltip}>
                                        <button bsStyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <ButtonToolbar style={{position: 'absolute', top: 10, left: 100, zIndex: 2}}>
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <button bsStyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <Image src={Image2} alt="Gas pump" className="blog__img" />
                            </div>
                        </FadeInEffect>
                    </Col>
                    <Col xl={6} lg={6} md={6} className="order-1 order-sm-2">
                        <FadeInEffect>
                            <h5>Our business takes the industry of oil and gass to a new level.</h5>
                            <p>We have a long and proud history emphasizing environment social and economic
                                outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </FadeInEffect>
                    </Col>
                </Row>
                <Row className="blog__row px-lg-5 mt-sm-5 pt-5">
                    <Col xl={6} lg={6} md={6}>
                        <FadeInEffect>
                            <h5>Syoak serves more than 2,500 petrol stations globally</h5>
                            <p>We have a long and proud history giving emphasis to environment social and economic outcomes
                                to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </FadeInEffect>
                    </Col>
                    <Col xl={6} lg={6} md={6} className="blog__col d-flex justify-content-center px-5">
                        <FadeInEffect>
                            <div style={{position: 'relative'}}>
                                <ButtonToolbar style={{position: 'absolute', top: 190, right: 50, zIndex: 2}}>
                                    <OverlayTrigger placement="top" overlay={tooltip}>
                                        <button bsStyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <ButtonToolbar style={{position: 'absolute', top: 10, left: 100, zIndex: 2}}>
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <button bsStyle="default" className="tooltip__btn"></button>
                                    </OverlayTrigger>
                                </ButtonToolbar>
                                <Image src={Image3} alt="Gas truck" className="blog__img" />
                            </div>
                        </FadeInEffect>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BlogContainer;
