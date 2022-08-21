import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function AboutUs() {
  return (
    <>
        <div id='aboutUs' className='container mb-4'>
            <h1 className='text-center mb-3'>Why Choose <span style={{color: "navy"}}>Us?</span></h1>
            <Row className='mb-3'>
                <Col lg={5} className='d-flex justify-content-center'>
                    <Image src="./Images/aboutUs.jpg"  height="500px"/>
                </Col>
                <Col lg={7} className='d-flex align-items-center '>
                    <p>Dolor magna diam amet dolor dolore lorem eos gubergren consetetur magna, erat dolores sea rebum aliquyam. Ea et no et aliquyam, labore elitr labore sit aliquyam, vero sit sed ipsum justo, sanctus diam magna sanctus diam lorem sea nonumy. Et et sed labore vero lorem labore et amet sed. Lorem voluptua et diam tempor dolore, dolor dolor lorem lorem ut elitr stet ipsum erat labore, consetetur nonumy takimata Dolor voluptua dolore et at dolore ea lorem invidunt sit diam, sed sit labore ipsum sit gubergren lorem sit tempor.<br/><br/>ea eirmod sit gubergren ipsum, eos est tempor sadipscing est sea. Et et sed aliquyam magna ipsum labore eirmod aliquyam sit, nonumy sadipscing kasd ipsum et ea sadipscing sadipscing consetetur labore. Consetetur.</p>
                </Col>
            </Row>
        </div>
        <div className="about-us-footer d-flex justify-content-center">
        <Row className='container mb-3'>
                <Col lg={4} className="p-3">
                    <h2 style={{color: "navy"}}>With a Diference.</h2>
                    <h2 style={{color: "navy"}}>Inovation.</h2>
                    <p className='mb-3'>Clita sit sit invidunt et clita justo sed justo. Sit sit gubergren est accusam stet. Tempor erat amet ipsum erat. Tempor dolores erat sit no sanctus ut, amet ut sadipscing gubergren elitr no ipsum elitr vero gubergren, sed erat sadipscing.</p>
                    <small className='fw-bold' style={{color: "navy"}}>Tempor Erat</small><br/>
                    <small>sit no sanctus</small>
                </Col>
                <Col lg={4} className="p-3">
                    <Image className='mb-2' src="./Images/about2.jpg" width="340px" height="200px"/>
                    <p className='mb-2'>Lorem dolore lorem sanctus est sed voluptua nonumy. Gubergren duo sea takimata stet rebum diam sea ut. Kasd accusam sadipscing eos ea sed voluptua,</p>
                    <IoIosArrowDroprightCircle className='fs-2 design-icons' style={{color: "navy"}}/>
                </Col>
                <Col lg={4} className="p-3">
                    <Image className='mb-2' src="./Images/about1.jpg" width="340px" height="200px"/>
                    <p className='mb-2'>Lorem dolore lorem sanctus est sed voluptua nonumy. Gubergren duo sea takimata stet rebum diam sea ut. Kasd accusam sadipscing eos ea sed voluptua,</p>
                    <IoIosArrowDroprightCircle className='fs-2 design-icons' style={{color: "navy"}}/>
                </Col>
            </Row>
        </div>
    </>
  )
}
