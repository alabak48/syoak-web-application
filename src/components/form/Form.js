import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import GoogleMap from "../../assets/google_map.svg";
import {FadeInEffect} from '../animation/FadeInEffect';
import {SlideUpCard} from '../animation/SlideUpEffect';
import "../../styles/styles.css";


function ContactForm() {
    return (
        <section className="form-container px-lg-0 px-sm-5 px-3">
            <Container className="px-lg-5 pb-lg-5">
                <Row className="px-lg-5 pb-lg-5">
                    <Col lg={6} sm={6} className="form mt-5">
                        <SlideUpCard>
                            <FadeInEffect>
                                <h2 className="form__title">Get in touch with us</h2>
                                <Form className="form-container mt-5">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="form-container__label">Name</Form.Label>
                                        <Form.Control type="name"/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="form-container__label">Email address</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="form-container__label">Message</Form.Label>
                                        <Form.Control as="textarea" placeholder="Write something here..." rows={5}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                        <Form.Label className="form-container__verification">Verification</Form.Label>
                                        <Form.Check type="checkbox" className="form-container__check"
                                                    label="I am not a robot"/>
                                    </Form.Group>
                                    <Button className="btn btn--primary">
                                        Send a message
                                    </Button>
                                </Form>
                            </FadeInEffect>
                        </SlideUpCard>
                    </Col>
                    <Col lg={6} sm={6} className="form-map mt-5 px-sm-5 mb-5 mb-lg-0">
                        <FadeInEffect>
                            <SlideUpCard>
                                    <Image className="form-map__image d-flex justify-content-center"
                                           src={GoogleMap}></Image>
                            </SlideUpCard>
                        </FadeInEffect>
                    </Col>
                </Row>
            </Container>
        </section>);
}

export default ContactForm