import React, { useContext, useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

import Header from '../Layouts/Header'
import Left from '../Layouts/Left'

import { UserContext } from "../../UserContext"
import axios from 'axios'

export default function Review() {
  const { user, serverURL } = useContext(UserContext)
  const [error, setError] = useState("")
  const [reviews,setReviews] = useState({
    clientName: "",
    clientEmail: "",
    serviceName: "",
    serviceProvider: "",
    comment: "",
  })

  const {clientName, clientEmail, serviceName, serviceProvider, comment} = reviews

  const handleChange = (e) => {
    if(e.target.name === "serviceName"){
      setReviews({clientName, clientEmail, serviceName: e.target.value, serviceProvider, comment})
    }
    if(e.target.name === "serviceProvider"){
      setReviews({clientName, clientEmail, serviceName, serviceProvider: e.target.value, comment})
    }
    if(e.target.name === "comment"){
      setReviews({clientName, clientEmail, serviceName, serviceProvider, comment: e.target.value})
    }
  }

  const createReview = () => {
    axios.post(serverURL + "/api/reviews", reviews)
    .then((res)=>{
      if(res.status === 201){
        console.log("Review Created")
      }
      else{
        throw new Error("Couldn't create review")
      }
    })
    .catch((error)=>{
      setError(error.message)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    reviews.clientName = user.name
    reviews.clientEmail = user.email
    createReview()
    setReviews({
      serviceName: "",
      serviceProvider: "",
      comment: ""
    })
  }

  return (
    <>
    {error && <h1>{error}</h1>}
      <Container fluid className='p-0 m-0 common-back'>
        {user && <Header title="Review" username={user.name} />}
        <Row className="me-0">
          <Col lg={3}>
            <Left />
          </Col>
          <Col lg={6}>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Control type="text"  placeholder="Your Name" value={user && user.name} required/>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type="email"  placeholder="Company's Name,Designation" value={user && user.email} required/>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type="text" onChange={handleChange} value={serviceName} name="serviceName" placeholder="Service You Received" required/>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type="text" onChange={handleChange} value={serviceProvider} name="serviceProvider" placeholder="Service Provider" required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" onChange={handleChange} value={comment} name="comment" rows={3} placeholder="Comment" required/>
              </Form.Group>
              <Button className='px-3' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
