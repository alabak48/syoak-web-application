import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ButtonNavigation.css';

const ButtonNavigation= () => {
    return (
        <Container className="navigation-btn">
            <Row>
                <Col lg={12} className="navigation-btn px-5 pt-5">
                    <div className="btn-navigation__container">
                        <button className="carousel__btn--round" data-text="Extraction">
                        </button>
                        <div className="carousel__horizontal-line"></div>
                        <button className="carousel__btn--round" data-text="Transport">
                        </button>
                        <div className="carousel__horizontal-line"></div>
                        <button className="carousel__btn--round" data-text="Refining">
                        </button>
                        <div className="carousel__horizontal-line"></div>
                        <button className="carousel__btn--round" data-text="Export">
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ButtonNavigation
