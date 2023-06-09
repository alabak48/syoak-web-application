import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {BsArrowUpRight} from 'react-icons/bs';
import ButtonNavigation from "../buttonnavigation/ButtonNavigation";
import {FadeInEffect} from "../animation/FadeInEffect";
import "../../postcss/styles.css";


function HeroContainer() {
    return (
        <main className="hero px-3 px-lg-5 ">
            <Container className="hero__container mt-5 px-lg-5 px-xl-0  pb-5">
                <FadeInEffect>
                    <Row className="hero__row px-lg-5 ">
                        <Col xl={10} lg={9} md={11} sm={11} className="hero__title__col">
                            <h1 className="hero__title">Our business takes the industry of oil & gas to a new
                                level.</h1></Col>
                        <Col xl={5} lg={6} md={6} sm={12} className="hero-description__col">
                            <p className="hero-description">We have a long and proud history giving emphasis to
                                environment
                                social and economic outcomes
                                to
                                deliver places that respond</p>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} className="hero-button__col">
                            <Button className="btn btn--primary">
                                <BsArrowUpRight className="hero__arrow"/>
                                Learn more</Button>
                        </Col>
                    </Row>
                    <ButtonNavigation/>
                </FadeInEffect>
                <FadeInEffect>
                    <Col lg={7} className="hero-second__col mt-5 px-lg-5">
                        <h2 className="hero__subtitle">SYOAK Solution</h2>
                        <p className="hero-second__text mt-5">SYOAK industry consists of companies that own and operate
                            extensive networks of pipeline assets
                            to connect producers of oil, natural gas and natural gas liquids from the prolific North
                            American resources to key markets. We also distribute natural gas to a growing base of
                            industrial and residential customers through transmission pipelines.</p>
                    </Col>
                </FadeInEffect>
            </Container>
        </main>
    )
}

export default HeroContainer