import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Row, Col } from 'react-bootstrap'

import { UserContext } from '../UserContext'
import ReviewCard from './Layouts/ReviewCard'

export default function Feedback() {
    const { serverURL } = useContext(UserContext)
    const [review, setReview] = useState([])
    const [isLoading, setIsLaoding] = useState(false)

    const getReview = () => {
        axios.get(serverURL + "/api/reviews")
            .then((res) => {
                setIsLaoding(true)
                setReview(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getReview()
    })

    return (
        <>
            <div id='feedback' className='container mb-3'>
                <h1 className='text-center my-5'>Clients Feed<span style={{ color: "navy" }}>Back</span></h1>
                <Row>
                    {isLoading && review.map((reviews) => {
                        return <Col lg={4} key={reviews._id}>
                            <ReviewCard reviews={reviews}/>
                        </Col>
                    })}
                </Row>
            </div>
        </>
    )
}
