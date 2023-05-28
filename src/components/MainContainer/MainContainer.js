import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {BsArrowUpRight} from 'react-icons/bs';
import "../../styles/styles.css"

function MainContainer() {
    return (
        <main>
            <Container className="main mt-5 px-5">
                <Row className="main__row px-5">
                    <Col xl={10} lg={9} md={11} sm={11} className="main__title-col">
                        <h1 className="main__title">Our business takes the industry of oil & gas to a new level.</h1>
                    </Col>
                    <Col xl={5} lg={6} md={6} sm={12} className="main__description-col">
                        <p className="main__description">We have a long and proud history giving emphasis to environment
                            social and economic outcomes
                            to
                            deliver places that respond</p>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} className="main__button-col">
                        <Button className="btn btn--primary">
                            <BsArrowUpRight className="main__arrow" />
                            Learn more</Button>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default MainContainer