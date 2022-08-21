import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Work() {
    return (
        <>
            <div id='work' className='work container-fluid'>
                <div className='container px-5'>
                    <h1 className='text-center text-white pt-5'>Here are Some of <span>Our Work</span></h1>
                    <Carousel className='p-5'>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="./Images/project1.png"
                                alt="First slide"
                                height="520px"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="./Images/project2.jpg"
                                alt="Second slide"
                                height="520px"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./Images/project3.jpg"
                                alt="Third slide"
                                height="520px"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
