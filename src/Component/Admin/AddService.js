import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import axios from "axios"

import Header from '../Layouts/Header'
import AdminLeft from '../Layouts/AdminLeft'

import { UserContext } from '../../UserContext'

export default function AddService({ selectedService, btnText }) {
    const { serverURL } = useContext(UserContext)
    const [error, setError] = useState("")
    const [buttonValue, setButtonValue] = useState("Submit")
    const [services, setServices] = useState({
        serviceName: "",
        serviceDesc: "",
    })

    const { serviceName, serviceDesc } = services

    const handleChange = (e) => {
        if (e.target.name === "serviceName") {
            setServices({ serviceName: e.target.value, serviceDesc })
        }
        if (e.target.name === "serviceDesc") {
            setServices({ serviceName, serviceDesc: e.target.value })
        }
    }

    const createService = () => {
        axios.post(serverURL + "/api/services", services)
            .then((res) => {
                if (res.status === 201) {
                    console.log("Service Created")
                }
                else {
                    throw new Error("Couldn't create review")
                }
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const editService = () => {
        axios.patch(serverURL + `/api/services/${selectedService.id}`, services)
            .then((res) => {
                // createService()
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (btnText === "Edit Service") {
            editService()
            setButtonValue("Submit")
        } else {
            createService()
        }
        setServices({
            serviceName: "",
            serviceDesc: ""
        })
    }

    useEffect(() => {
        setServices({
            serviceName: selectedService.serviceName,
            serviceDesc: selectedService.serviceDesc
        })
    }, [selectedService])

    return (
        <>
            {error && <h1>{error}</h1>}
            <Container fluid className='p-0 m-0 common-back'>
                <Header title="Add Service" />
                <Row className="me-0">
                    <Col lg={3}>
                        <AdminLeft />
                    </Col>
                    <Col lg={6} className='mt-3'>
                        <Form className='mt-5' onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Control type="text" name="serviceName" value={serviceName} onChange={handleChange} placeholder="Enter Title" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" name="serviceDesc" value={serviceDesc} onChange={handleChange} rows={3} placeholder="Enter Description" required />
                            </Form.Group>
                            <Button className='px-3' variant="primary" type="submit">
                                {buttonValue}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

AddService.defaultProps = {
    selectedService: {
        serviceName: "",
        serviceDesc: "",
    },
};