import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import Header from '../Layouts/Header'
import Left from '../Layouts/Left'
import ServiceCard from '../Layouts/SeviceCard'
import axios from "axios"

import { UserContext } from "../../UserContext"

export default function ServiceList() {
    const { user, serverURL } = useContext(UserContext)
    const [services, setServices] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getService = () => {
        axios.get(serverURL + "/api/services")
            .then((res) => {
                setIsLoading(true)
                setServices(res.data)
            })
            .catch((err) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        getService()
    })

    return (
        <>
            {error && <h1>{error}</h1>}
            <Container fluid className='p-0 m-0 common-back'>
                {user && <Header title="Service List" username={user.name} />}

                <Row className="me-0">
                    <Col lg={3} md={12}>
                        <Left />
                    </Col>
                    <Col lg={9} md={12} className="mt-5">
                        <Row className='container-fluid'>
                            {isLoading && services.map((service) => {
                                return <Col key={service._id} lg={4}>
                                    <ServiceCard services={service} />
                                </Col>
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
