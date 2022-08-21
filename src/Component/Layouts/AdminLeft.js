import React from 'react'
import { Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

export default function AdminLeft() {
    return (
        <Row>
            <Col className='layout-left d-flex justify-content-center align-items-center flex-lg-column m-lg-5 py-3'>
                <NavLink className='left-href me-3' to='/order'>Order</NavLink>
                <NavLink className='left-href me-3' to='/admin/addService'>Add Service</NavLink>
                <NavLink className='left-href me-3' to='/admin/adminserviceList'>Service List</NavLink>
                <NavLink className='left-href me-3' to='/admin/orderList'>Order List</NavLink>
            </Col>
        </Row>
    )
}
