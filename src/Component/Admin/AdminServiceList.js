import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from "axios"

import Header from '../Layouts/Header'
import AdminLeft from '../Layouts/AdminLeft'

import { UserContext } from "../../UserContext"

export default function AdminServiceList({ onSendEditData }) {
    const { serverURL } = useContext(UserContext)
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

    const handleEdit = (id) => {
        const selectedService = services.filter((service) => service._id === id)
        onSendEditData(selectedService)
    }

    useEffect(() => {
        getService()
    })

    return (
        <>
            {error && <h1>{error}</h1>}
            <Container fluid className='p-0 m-0 common-back'>
                <Header title="Service List" />

                <Row className="me-0">
                    <Col lg={3} md={12}>
                        <AdminLeft />
                    </Col>
                    <Col lg={9} md={12} className="mt-5">
                        <Row className='container-fluid'>
                            {isLoading && services.map((service) => {
                                const { _id, serviceName, serviceDesc } = service
                                return <Col key={_id} lg={4}>
                                    <Card className='service-card p-2 header-card mb-3'>
                                        <Link to="/admin/addService">
                                            <BiEditAlt className='fs-3 service-card-del' onClick={() => { handleEdit(_id) }} />
                                        </Link>
                                        <Card.Body className='text-center'>
                                            <AiOutlineCloudServer className='icons' />
                                            <h4>{serviceName}</h4>
                                            <p className='opacity-75'>{serviceDesc}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
