import React from 'react';
import {Container, Row, Col, Image, Tooltip, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';
import "../../styles/styles.css"
import {FadeInEffect} from "../animation/FadeInEffect";
import {RxCross1} from 'react-icons/rx'

const Blog = ({h5, h5ClassName, image, imageClassName, p, pClassName, reverse, className}) => {
    const contentClassName = reverse ? 'blog-text__container order-lg-last' : '';
    const imageColumnClassName = reverse ? '' : 'order-lg-last';

    const tooltip = (
        <Tooltip id="tooltip">
            <RxCross1 alt="Tooltip X" className="tooltip__img"/>
            <div className="tooltip__text">
                <span>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</span>
            </div>
        </Tooltip>
    );

    return (
        <section className="blog">
            <Container className={`blog__container mt-5 px-5 pb-5${className}`}>
                <Row className="blog__row px-5 pt-5">
                    <Col lg={5} className={`${contentClassName}`}>
                        <FadeInEffect>
                            {h5 && <h5 className={h5ClassName}>{h5}</h5>}
                            {p && <p className={pClassName}>{p}</p>}
                        </FadeInEffect>
                    </Col>
                    <Col lg={6} className={`${imageColumnClassName} blog__col d-flex justify-content-center px-5`}>
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
                                <Image src={image} alt="Image" className={imageClassName}/>
                            </div>
                        </FadeInEffect>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;
