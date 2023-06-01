import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {BsArrowUpRight} from 'react-icons/bs';
import "../../styles/styles.css"
import ButtonNavigation from "../buttonnavigation/ButtonNavigation";
import {FadeInEffect} from "../animation/FadeInEffect";

function MainContainer() {
    return (
        <main>
            <Container className="main mt-5 px-5 pb-5">
                <FadeInEffect>
                    <Row className="main__row px-5">
                        <Col xl={10} lg={9} md={11} sm={11} className="main__title-col">
                            <h1 className="main__title">Our business takes the industry of oil & gas to a new
                                level.</h1>
                        </Col>
                        <Col xl={5} lg={6} md={6} sm={12} className="main__description-col">
                            <p className="main__description">We have a long and proud history giving emphasis to
                                environment
                                social and economic outcomes
                                to
                                deliver places that respond</p>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} className="main__button-col">
                            <Button className="btn btn--primary">
                                <BsArrowUpRight className="main__arrow"/>
                                Learn more</Button>
                        </Col>

                    </Row>
                    <ButtonNavigation/>
                </FadeInEffect>
                <FadeInEffect>
                    <Col lg={6} className="main-second mt-5 px-5">
                        <h2>SYOAK Solution</h2>
                        <p className="main-second__text mt-5">SYOAK industry consists of companies that own and operate
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

export default MainContainer