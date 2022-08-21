import React from 'react'
import { VscFeedback } from "react-icons/vsc"
import { Card, Row, Col } from "react-bootstrap"

export default function ReviewCard({ reviews }) {
    const {clientName, clientEmail, serviceName, serviceProvider, comment} = reviews    
    return (
        <Card className='hover-feedback mb-3'>
            <Card.Body>
                <fieldset>
                    <legend>
                        <Row>
                            <Col lg={3} className='m-0 p-0'>
                                <VscFeedback className="icons-feedback" style={{ color: "navy" }} />
                            </Col>
                            <Col lg={9} className='m-0 p-0'>
                                <h4 className=' mt-1 ms-4 mb-0'>{clientName}</h4>
                                <small className='fs-5'>{clientEmail}</small>
                            </Col>
                        </Row>
                    </legend>
                    <p>{serviceName}</p>
                    <p>{comment }</p>
                    <small>Provided By:</small><br/>
                    <small>{serviceProvider}</small>
                </fieldset>
            </Card.Body>
        </Card>
    )
}
