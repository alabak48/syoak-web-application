import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import "../../styles/styles.css"
import {FadeInEffect} from "../animation/FadeInEffect";

const HeadingTextImage = ({h5, h5ClassName, image, imageClassName, p, pClassName, reverse, className}) => {
    const contentClassName = reverse ? 'text-container order-lg-last' : '';
    const imageColumnClassName = reverse ? '' : 'order-lg-last';

    return (
        <Container className={`mt-5 px-5 pb-5 ${className}`}>
            <Row className="px-5">
                <Col lg={6} className={`${contentClassName}`}>
                    <FadeInEffect>
                        {h5 && <h5 className={h5ClassName}>{h5}</h5>}
                        {p && <p className={pClassName}>{p}</p>}
                    </FadeInEffect>
                </Col>
                <Col lg={5} className={`${imageColumnClassName} d-flex justify-content-center`}>
                    <FadeInEffect>
                        <Image src={image} alt="Image" className={imageClassName}/>
                    </FadeInEffect>
                </Col>
            </Row>
        </Container>
    );
};

export default HeadingTextImage;
