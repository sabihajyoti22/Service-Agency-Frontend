import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { GrFacebookOption } from "react-icons/gr"
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai"
import { GiRobberHand } from 'react-icons/gi';


export default function Contact() {
    return (
        <>
            <Container fluid id='contact' className='contact-div'>
                <Container>
                    <h1 className='text-white pt-5'>Contact <span style={{ color: "deepskyblue" }}>Us</span></h1>
                    <Row className='text-white'>
                        <Col lg={4} sm={12} className="">
                            <div className=''>
                                <Row className="mb-3">
                                    <Col lg={1} className="ps-4 pt-2">
                                        <GiRobberHand className='fs-1' />
                                    </Col>
                                    <Col lg={11}>
                                        <Row className='mb-2'>
                                            <h5 className='d-inline ms-4 mt-3'>Service Agency</h5>
                                        </Row>
                                    </Col>
                                    <p className=''>Ipsum accusam amet elitr amet et, diam diam amet eos nonumy et. Sea accusam eos consetetur accusam consetetur clita, sed invidunt at voluptua ipsum labore voluptua eirmod diam sed. Clita ut dolor lorem lorem, sed et sadipscing aliquyam voluptua elitr at. No sanctus gubergren rebum dolor rebum elitr lorem takimata et.
                                    </p>
                                    <div className='d-flex justify-content-center mt-2'>
                                        <GrFacebookOption className='footer-icons' />
                                        <AiOutlineTwitter className='footer-icons' />
                                        <AiOutlineYoutube className='footer-icons' />
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className='d-flex'>
                                <ul>
                                    <h5>Services </h5>
                                    <li>Web Development</li>
                                    <li>Web &amp; Mobile Design</li>
                                    <li>Graphics Design</li>
                                    <li>Logo Design</li>
                                </ul>
                                <ul>
                                    <h5>Outlook </h5>
                                    <li>Investors</li>
                                    <li>Office Zone</li>
                                    <li>Accessibility</li>
                                    <li>Sustainability</li>
                                    <li>Terms &amp; Support</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <fieldset style={{ border: '2px solid deepskyblue' }} className='mb-3'>
                                <legend>Have any questions? Let us know!</legend>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Row>
                                            <Col>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Col>
                                            <Col>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" className='port-messege' />
                                    </Form.Group>
                                    <Button className='meg-button px-3' variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Form>
                            </fieldset>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* Footer */}
            <Container className='p-3 d-flex justify-content-between'>
                <div>
                    <small className='me-2'>Terms &amp; Conditions</small>
                    <small className='me-2'>Privacy Policy</small>
                    <small className='me-2'>Contact Us</small>
                </div>
                <div>
                    <small>Powered by <span>Service Agency</span></small>
                </div>
            </Container>
        </>
    )
}
