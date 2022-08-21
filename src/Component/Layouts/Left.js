import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

    return (
        <Row>
            <Col className='layout-left d-flex justify-content-center align-items-center flex-lg-column m-lg-5 py-3'>
                <NavLink className='left-href me-3' to="/order">Order</NavLink>
                <NavLink className='left-href me-3' to='/serviceList'>Service List</NavLink>
                <NavLink className='left-href me-3' to='/review'>Review</NavLink>
                <NavLink className='left-button mt-lg-5' to='/admin/addService'>Admin Panel</NavLink>
            </Col>
        </Row>
    )
}
