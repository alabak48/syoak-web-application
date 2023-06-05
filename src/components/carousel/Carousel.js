import Carousel from 'react-bootstrap/Carousel';
import "../../styles.css";
import {Col, Container, Row} from "react-bootstrap";
import React, {useRef} from "react";
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import {FadeInEffect} from "../animation/FadeInEffect";
import Drop from "../../assets/SyoakDrop_img.svg"
import Item1 from "../../assets/item-1.svg"
import Item2 from "../../assets/item-2.svg"
import Item3 from "../../assets/item-3.svg"
import Item4 from "../../assets/item-4.svg"


function CarouselContainer() {
    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (
        <section className="carousel px-3 px-lg-0">
            <FadeInEffect>
                <Carousel ref={ref} variant="dark" indicators={false} controls={false}
                          className="carousel__container">
                    <Carousel.Item className="pt-5 px-lg-5 px-md-0 px-sm-5" interval={1500}>
                        <div className="carousel__btn">
                            <div className="carousel__container align-center">
                                <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                                <button className="carousel__btn--round" data-text="Extraction"></button>
                                <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                            </div>
                            <div className="carousel__horizontal-line"></div>
                        </div>
                        <Container>
                            <Row className="pt-5 pt-lg-0 px-lg-5 px-sm-5 carousel__row">
                                <Col lg={4} md={6} sm={12} className="carousel__text">
                                    <h2 className="carousel__title pb-lg-5 pb-sm-4">How We Do It</h2>
                                    <h5 className="carousel__subtitle">Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                        reduce risk</h5>
                                    <p>We have a long and proud history givin emphasis to environment social and
                                        economic
                                        outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.</p>
                                </Col>
                                <Col lg={8} md={6} className="carousel-wrapper__img d-flex align-items-end justify-content-center">
                                    <div className="wrapper__tooltip--first">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                    </div>
                                    </div>
                                    <div className="wrapper__img">
                                        <img
                                            className=""
                                            src={Item1}
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="wrapper__tooltip--second">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="pt-5 px-lg-5 px-md-0 px-sm-5" interval={2100}>
                        <div className="carousel__btn">
                            <div className="align-center">
                                <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                                <button className="carousel__btn--round" data-text="Transport"></button>
                                <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                            </div>
                            <div className="carousel__horizontal-line"></div>
                        </div>
                        <Container>
                            <Row className="pt-5 px-lg-5 px-sm-5 carousel__row">
                                <Col lg={4} md={6} sm={12} className="carousel__text">
                                    <h2 className="carousel__title pb-lg-5 pb-sm-4">Mode of Transport</h2>
                                    <h5 className="carousel__subtitle">Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                        reduce risk</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries. </p>
                                </Col>
                                <Col lg={8} md={6} className="carousel-wrapper__img d-flex justify-content-center align-items-end">
                                    <div className="wrapper__tooltip--first">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                    <div className="wrapper__img">
                                        <img
                                            className=""
                                            src={Item2}
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="wrapper__tooltip--second">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="pt-5 px-lg-5 px-md-0 px-sm-5" interval={2100}>
                        <div className="carousel__btn">
                            <div className="align-center">
                                <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                                <button className="carousel__btn--round" data-text="Refining"></button>
                                <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                            </div>
                            <div className="carousel__horizontal-line"></div>
                        </div>
                        <Container>
                            <Row className="pt-5 px-lg-5 px-sm-5 carousel__row">
                                <Col lg={4} md={6} sm={12} className="carousel__text pb-5 pb-sm-5">
                                    <h2 className="carousel__title pb-lg-5 pb-sm-4">We Make it More Efficient</h2>
                                    <h5 className="carousel__subtitle">Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                        reduce risk</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has survived not only five centuries. </p>
                                </Col>
                                <Col lg={8} md={6} className="carousel-wrapper__img d-flex justify-content-center align-items-end">
                                    <div className="wrapper__tooltip--first">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                    <div className="wrapper__img">
                                        <img
                                            className=""
                                            src={Item3}
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="wrapper__tooltip--second">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="pt-5 px-lg-5 px-md-0 px-sm-5" interval={2100}>
                        <div className="carousel__btn ">
                            <div className="align-center">
                                <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                                <button className="carousel__btn--round" data-text="Export"></button>
                                <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                            </div>
                            <div className="carousel__horizontal-line"></div>
                        </div>
                        <Container>
                            <Row className="pt-5 px-lg-5 px-sm-5 carousel__row">
                                <Col lg={4} md={6} sm={12} className="carousel__text">
                                    <h2 className="carousel__title pb-lg-5 pb-sm-4">Where Does it Go</h2>
                                    <h5 className="carousel__subtitle">Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                        reduce risk</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries. </p>
                                </Col>
                                <Col lg={8} md={6} className="carousel-wrapper__img d-flex justify-content-center align-items-end">
                                    <div className="wrapper__tooltip--first">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                    <div className="wrapper__img">
                                        <img
                                            className=""
                                            src={Item4}
                                            alt="Fourth slide"
                                        />
                                    </div>
                                    <div className="wrapper__tooltip--second">
                                        <div className="tooltip__img">
                                            <img src={Drop} alt="Gas Drop" />
                                        </div>
                                        <div className="tooltip__text">
                                            <p>Syoak serves more than 2,500 petrol stations globally</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </FadeInEffect>
        </section>
    );
}

export default CarouselContainer;