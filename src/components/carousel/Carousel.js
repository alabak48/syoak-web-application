import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/img_1.svg'
import image2 from '../../assets/img_2.svg'
import image3 from '../../assets/img_3.svg'
import "./Carousel.css";
import {Col, Container, Row} from "react-bootstrap";
import React, {useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

function CarouselContainer() {
    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };
    return (
        <Carousel ref={ref} variant="dark" indicators={false} controls={false} className="pb-5">
            <Carousel.Item className="pt-5 px-5 pb-5">
                <div className="carousel__btn">
                    <div className="carousel__container align-center">
                        <span aria-hidden="true" className="carousel-control-prev-icon" onClick={onPrevClick}></span>
                        <button className="carousel__btn--round"></button>
                        <span aria-hidden="true" className="carousel-control-next-icon" onClick={onNextClick}></span>
                    </div>
                    <div className="carousel__horizontal-line"></div>
                </div>
                <Container>
                    <Row className="pt-5 px-5 pb-5">
                        <Col lg={6}>
                            <h2 className="pb-5">How We Do It</h2>
                            <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h5>
                            <p>We have a long and proud history givin emphasis to environment social and economic
                                outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Col>
                        <Col lg={6}>
                            <img
                                className=""
                                src={image1}
                                alt="First slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item className="pt-5 px-5 pb-5">
                <div className="carousel__btn">
                    <div className="align-center">
                        <span aria-hidden="true" className="carousel-control-prev-icon" onClick={onPrevClick}></span>
                        <button className="carousel__btn--round"></button>
                        <span aria-hidden="true" className="carousel-control-next-icon" onClick={onNextClick}></span>
                    </div>
                    <div className="carousel__horizontal-line"></div>
                </div>
                <Container>
                    <Row className="pt-5 px-5 pb-5">
                        <Col lg={6}>
                            <h2 className="pb-5">Mode of Transport</h2>
                            <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, </p>
                        </Col>
                        <Col lg={6}>
                            <img
                                className=""
                                src={image1}
                                alt="Second slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item className="pt-5 px-5 pb-5">
                <div className="carousel__btn">
                    <div className="align-center">
                        <span aria-hidden="true" className="carousel-control-prev-icon" onClick={onPrevClick}></span>
                        <button className="carousel__btn--round"></button>
                        <span aria-hidden="true" className="carousel-control-next-icon" onClick={onNextClick}></span>
                    </div>
                    <div className="carousel__horizontal-line"></div>
                </div>
                <Container>
                    <Row className="pt-5 px-5 pb-5">
                        <Col lg={6}>
                            <h2 className="pb-5">We Make it More Efficient</h2>
                            <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, </p>
                        </Col>
                        <Col lg={6}>
                            <img
                                className=""
                                src={image1}
                                alt="Third slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item className="pt-5 px-5 pb-5">
                <div className="carousel__btn ">
                    <div className="align-center">
                        <span aria-hidden="true" className="carousel-control-prev-icon" onClick={onPrevClick}></span>
                        <button className="carousel__btn--round"></button>
                        <span aria-hidden="true" className="carousel-control-next-icon" onClick={onNextClick}></span>
                    </div>
                    <div className="carousel__horizontal-line--hidden"></div>
                </div>
                <Container>
                    <Row className="pt-5 px-5 pb-5">
                        <Col lg={6}>
                            <h2 className="pb-5">Where Does it Go</h2>
                            <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, </p>
                        </Col>
                        <Col lg={6}>
                            <img
                                className=""
                                src={image1}
                                alt="Fourth slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselContainer;