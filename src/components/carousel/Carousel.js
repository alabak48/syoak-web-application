import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/img_1.svg'
import image2 from '../../assets/img_2.svg'
import image3 from '../../assets/img_3.svg'
import "./Carousel.css";
import {ButtonToolbar, Col, Container, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
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


    const tooltip = (
        <Tooltip id="tooltip">
            <Image src={Drop} alt="Syoak drop" className="tooltip-image"/>
            <div className="tooltip-content">
                <span>Syoak serves more than 2,500 petrol stations globally</span>
            </div>
        </Tooltip>
    );

    return (
        <FadeInEffect>
            <Carousel ref={ref} variant="dark" indicators={false} controls={false} className="carousel pb-5">
                <Carousel.Item className="pt-5 px-5" interval={1500}>
                    <div className="carousel__btn">
                        <div className="carousel__container align-center">
                            <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                            <button className="carousel__btn--round" data-text="Extraction"></button>
                            <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                        </div>
                        <div className="carousel__horizontal-line"></div>
                    </div>
                    <Container>
                        <Row className="px-5 carousel-row">
                            <Col lg={4} className="carousel__text">
                                <h2 className="pb-5">How We Do It</h2>
                                <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                    reduce risk</h5>
                                <p>We have a long and proud history givin emphasis to environment social and economic
                                    outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                            </Col>
                            <Col lg={8} className="d-flex align-items-end justify-content-center">
                                <div style={{position: 'relative'}}>
                                    <ButtonToolbar style={{position: 'absolute', top: 190, right: 50, zIndex: 2}}>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <button bsStyle="default" className="tooltip__btn"></button>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                    <img
                                        className=""
                                        src={Item1}
                                        alt="First slide"
                                    />
                                    <ButtonToolbar style={{position: 'absolute', top: 450, right: 200, zIndex: 2}}>
                                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                                            <button bsStyle="default" className="tooltip__btn"></button>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="pt-5 px-5" interval={2100}>
                    <div className="carousel__btn">
                        <div className="align-center">
                            <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                            <button className="carousel__btn--round" data-text="Transport"></button>
                            <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                        </div>
                        <div className="carousel__horizontal-line"></div>
                    </div>
                    <Container>
                        <Row className="pt-5 px-5 carousel-row">
                            <Col lg={4} className="carousel__text">
                                <h2 className="pb-5">Mode of Transport</h2>
                                <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                    reduce risk</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, </p>
                            </Col>
                            <Col lg={8} className="d-flex justify-content-center align-items-end">
                                <img
                                    className=""
                                    src={Item2}
                                    alt="Second slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="pt-5 px-5" interval={2100}>
                    <div className="carousel__btn">
                        <div className="align-center">
                            <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                            <button className="carousel__btn--round" data-text="Refining"></button>
                            <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                        </div>
                        <div className="carousel__horizontal-line"></div>
                    </div>
                    <Container>
                        <Row className="pt-5 px-5 carousel-row">
                            <Col lg={4} className="carousel__text">
                                <h2 className="pb-5">We Make it More Efficient</h2>
                                <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                    reduce risk</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, </p>
                            </Col>
                            <Col lg={8} className="d-flex justify-content-center align-items-end">
                                <img
                                    className=""
                                    src={Item3}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="pt-5 px-5" interval={2100}>
                    <div className="carousel__btn ">
                        <div className="align-center">
                            <BiChevronLeft onClick={onPrevClick} className="carousel__arrows"/>
                            <button className="carousel__btn--round" data-text="Export"></button>
                            <BiChevronRight onClick={onNextClick} className="carousel__arrows"/>
                        </div>
                        <div className="carousel__horizontal-line"></div>
                    </div>
                    <Container>
                        <Row className="pt-5 px-5 carousel-row">
                            <Col lg={4} className="carousel__text">
                                <h2 className="pb-5">Where Does it Go</h2>
                                <h5>Syoak is uniquely positioned to deliver actionable intelligence to analyze and
                                    reduce risk</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, </p>
                            </Col>
                            <Col lg={8} className="d-flex justify-content-center align-items-end">
                                <img
                                    className=""
                                    src={Item4}
                                    alt="Fourth slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </FadeInEffect>
    );
}

export default CarouselContainer;