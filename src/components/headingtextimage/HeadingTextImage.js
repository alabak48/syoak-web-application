import React from 'react';
import {Container, Row, Col, Image, Tooltip, ButtonToolbar, OverlayTrigger} from 'react-bootstrap';
import "../../styles/styles.css"
import {FadeInEffect} from "../animation/FadeInEffect";
import {RxCross1} from 'react-icons/rx'
const HeadingTextImage = ({h5, h5ClassName, image, imageClassName, p, pClassName, reverse, className}) => {
    const contentClassName = reverse ? 'text-container order-lg-last' : '';
    const imageColumnClassName = reverse ? '' : 'order-lg-last';

    const tooltip = (
        <Tooltip id="tooltip">
            <RxCross1 alt="Tooltip X" className="tooltip-image" />
            <div className="tooltip-content">
                <span>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</span>
            </div>
        </Tooltip>
    );

    return (
        <Container className={`mt-5 px-5 pb-5${className}`}>
            <Row className="px-5 pt-5">
                <Col lg={5} className={`${contentClassName}`}>
                    <FadeInEffect>
                        {h5 && <h5 className={h5ClassName}>{h5}</h5>}
                        {p && <p className={pClassName}>{p}</p>}
                    </FadeInEffect>
                </Col>
                <Col lg={6} className={`${imageColumnClassName} d-flex justify-content-center px-5`}>
                    <FadeInEffect>
                        <div style={{ position: 'relative' }}>
                            <ButtonToolbar style={{ position: 'absolute', top: 190, right: 50, zIndex: 2 }}>
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <button bsStyle="default" className="tooltip__btn"></button>
                            </OverlayTrigger>
                        </ButtonToolbar>
                            <ButtonToolbar style={{ position: 'absolute', top: 10, left: 100, zIndex: 2 }}>
                                <OverlayTrigger placement="bottom" overlay={tooltip} >
                                <button bsStyle="default" className="tooltip__btn"></button>
                            </OverlayTrigger>
                        </ButtonToolbar>
                        <Image src={image} alt="Image" className={imageClassName}/>
                        </div>
                    </FadeInEffect>
                </Col>
            </Row>
        </Container>
    );
};

export default HeadingTextImage;
