import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './ButtonNavigation.css';
import "../../postcss/styles.css";

const ButtonNavigation = () => {
    return (
        <>
            <section>
            <Container className="navigation-btn__container pt-5 pb-5">
                <Row>
                    <Col xl={12} lg={12} sm={12} md={12} className="navigation-btn__col mt-5 px-lg-5 px-md-0 px-sm-5">
                        <div className="btn-navigation__container--inner">
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
            </section>
        </>
    );
};

export default ButtonNavigation
