import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import Icon1 from '../../assets/icon_1.svg';
import Icon2 from '../../assets/icon_2.svg';
import Icon3 from '../../assets/icon_3.svg';
import Icon4 from '../../assets/icon_4.svg';
import "../../styles/styles.css";
import { FadeInEffect } from '../animation/FadeInEffect'
import { SlideUpCard } from '../animation/SlideUpEffect'

function Achievements() {
    return (
        <Container className="achievements px-5 pb-5">
            <Row className="achievements__row px-5 pb-5">
                <FadeInEffect>
                <Col lg={7} className="achievements__col pb-5">
                    <h1 className="achievements__heading pb-4">Our Achievements</h1>
                    <p className="achievements__paragraph">SYOAK industry consists of companies that own and operate
                        extensive networks of
                        pipeline assets to connect producers of oil, natural gas and natural gas liquids from the
                        prolific North American resources to key markets. We also distribute natural gas to a growing
                        base of industrial and residential customers through transmission pipelines.</p>
                </Col>
            </FadeInEffect>
            </Row>
            <Row className="achievements--row px-5 pb-5">
                <Col lg={3} className="achievements__col pb-5">
                    <SlideUpCard>
                        <Card style={{width: '15rem'}}>
                            <Card.Img variant="top" src={Icon1}
                                      className="achievements__icon achievement__icon--first"/>
                            <Card.Body>
                                <Card.Title className="achievements__title">2562</Card.Title>
                                <Card.Text className="achievements__text">
                                    Square Meters Built
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SlideUpCard>
                </Col>
                <Col lg={3} className="achievements__col">
                    <SlideUpCard>

                        <Card style={{width: '15rem'}}>
                            <Card.Img variant="top" src={Icon2}
                                      className="achievements__icon achievement__icon--second"/>
                            <Card.Body>
                                <Card.Title className="achievements__title">184</Card.Title>
                                <Card.Text className="achievements__text">
                                    Completed Projects
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SlideUpCard>
                </Col>
                <Col lg={3} className="achievements__col">
                    <SlideUpCard>
                        <Card style={{width: '15rem'}}>
                            <Card.Img variant="top" src={Icon3}
                                      className="achievements__icon achievements__icon--three"/>
                            <Card.Body>
                                <Card.Title className="achievements__title">351</Card.Title>
                                <Card.Text className="achievements__text">
                                    Work With Us
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SlideUpCard>
                </Col>
                <Col lg={3} className="achievements__col">
                    <SlideUpCard>
                        <Card style={{width: '15rem'}}>
                            <Card.Img variant="top" src={Icon4}
                                      className="achievements__icon achievements__icon--five"/>
                            <Card.Body>
                                <Card.Title className="achievements__title">65</Card.Title>
                                <Card.Text className="achievements__text">
                                    Ideas Realized
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SlideUpCard>
                </Col>
            </Row>
        </Container>
    )
}
export default Achievements