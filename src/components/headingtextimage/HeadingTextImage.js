import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../styles/styles.css"

const HeadingTextImage = ({ h5, h5ClassName, image, imageClassName, p, pClassName, reverse, className }) => {
    const contentClassName = reverse ? 'text-container order-lg-last' : '';
    const imageColumnClassName = reverse ? '' : 'order-lg-last';

    return (
        <Container className={`mt-5 px-5 pb-5 ${className}`}>
            <Row className="px-5 pb-5">
                <Col lg={6} className={`${contentClassName}`}>
                    {h5 && <h5 className={h5ClassName}>{h5}</h5>}
                    {p && <p className={pClassName}>{p}</p>}
                </Col>
                <Col lg={6} className={`pb-5 ${imageColumnClassName} d-flex align-items-center justify-content-center`}>
                    <Image src={image} alt="Image" className={imageClassName} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeadingTextImage;
