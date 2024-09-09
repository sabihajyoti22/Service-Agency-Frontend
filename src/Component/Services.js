import React, { useContext } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { SiWeb3Dotjs, SiAltiumdesigner, SiWappalyzer } from 'react-icons/si';
import { VscDeviceMobile } from 'react-icons/vsc';
import { MdOutlineDoubleArrow } from 'react-icons/md';

import { UserContext } from "../UserContext"

export default function Services() {
    const { user } = useContext(UserContext)
    return (
        <>
            <Row>
                <Col md={6} lg={3} className='text-center'>
                    <a href={user ? "/order" : "/login"} onClick={() => {
                        window.sessionStorage.setItem("service", "Web Development")
                    }}>
                        <Card className='p-2 header-card mb-3'>
                            <Card.Body>
                                <SiWeb3Dotjs className='icons' />
                                <h4>Web Development</h4>
                                <p className='opacity-75'>We craft stunning and amazing web UI, using a well drafted UX to fit your product</p>
                                <small style={{ color: "blue" }}>Click here to order<MdOutlineDoubleArrow /></small>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col md={6} lg={3} className='text-center d-none d-lg-block'>
                    <a href={user ? "/order" : "/login"} onClick={() => { window.sessionStorage.setItem("service", "Web and Mobile Design") }}>
                        <Card className='p-2 header-card mb-3'>
                            <Card.Body>
                                <VscDeviceMobile className='icons' />
                                <h4>Web &amp; Mobile Design</h4>
                                <p className='opacity-75'>With well written codes, we build amazing apps for all platforms. Mobile and Web app generally</p>
                                <small style={{ color: "blue" }}>Click here to order<MdOutlineDoubleArrow /></small>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col md={6} lg={3} className='text-center d-none d-lg-block'>
                    <a href={user ? "/order" : "/login"} onClick={() => { window.sessionStorage.setItem("service", "Graphics Design") }}>
                        <Card className='p-2 header-card mb-3'>
                            <Card.Body>
                                <SiAltiumdesigner className='icons' />
                                <h4>Graphics Design</h4>
                                <p className='opacity-75'>Amazing flyers, social media posts and brand representation that would make your brand stand out</p>
                                <small style={{ color: "blue" }}>Click here to order<MdOutlineDoubleArrow /></small>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col md={6} lg={3} className='text-center d-none d-lg-block'>
                    <a href={user ? "/order" : "/login"} onClick={() => { window.sessionStorage.setItem("service", "Logo Design") }}>
                        <Card className='p-2 header-card mb-3'>
                            <Card.Body>
                                <SiWappalyzer className='icons' />
                                <h4>Logo Design</h4>
                                <p className='opacity-75'>We create stunning logos with exceptional UI/UX and brilliant SEO, PPC and Inbound Marketing</p>
                                <small style={{ color: "blue" }}>Click here to order<MdOutlineDoubleArrow /></small>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </>
    )
}
