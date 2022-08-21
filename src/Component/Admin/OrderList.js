import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import { TiFolderDelete } from 'react-icons/ti';
import axios from "axios"

import Header from '../Layouts/Header'
import AdminLeft from '../Layouts/AdminLeft'

import { UserContext } from "../../UserContext"

export default function OrderList() {
    const { serverURL } = useContext(UserContext)

    const [orders, setOrders] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getOrders = () => {
        axios.get(serverURL + "/api/orders")
            .then((res) => {
                setIsLoading(true)
                setOrders(res.data)
            })
            .catch((err) => {
                setError(error.message)
            })
    }

    const handleDelete = (id)=>{
        axios.delete(serverURL + `/api/orders/${id}`)
        .then((res) => {
            getOrders()
          })
          .catch((error) => {
            setError(error.message)
          })
    }

    useEffect(() => {
        getOrders()
    })

    return (
        <>
            {error && <h1>{error}</h1>}
            <Container fluid className='p-0 m-0 common-back'>
                <Header title="Order List" />
                <Row className="me-0">
                    <Col lg={3}>
                        <AdminLeft />
                    </Col>
                    <Col lg={9} className='container mt-3 px-5'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading && orders.map((order) => {
                                        <td>{}</td>
                                        const { _id, username, useremail, service, projectDesc, price, createdOn } = order;
                                    return <tr key={_id}>
                                        <td>{username}</td>
                                        <td>{useremail}</td>
                                        <td>{service}</td>
                                        <td>{projectDesc}</td>
                                        <td>{price}</td>
                                        <td>{createdOn}</td>
                                        <td><TiFolderDelete className='order-row-delete fs-4 ms-3 mt-0' onClick={()=>{ handleDelete(_id)}} /></td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
