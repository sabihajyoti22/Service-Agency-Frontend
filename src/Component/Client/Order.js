import React, { useContext, useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import axios from "axios"

import Header from '../Layouts/Header'
import Left from '../Layouts/Left'

import { UserContext } from "../../UserContext"

export default function Order() {
  const { user, serverURL } = useContext(UserContext) 
  console.log(user)

  const [error,setError] = useState("")
  const [orders,setOrders] = useState({
    username: "",
    useremail: "",
    service: window.sessionStorage.getItem("service"),
    projectDesc: "",
    price: "",
  })

  const {username,useremail,service,projectDesc,price} = orders

  const handleChange = (e) =>{
    if(e.target.name === "projectDesc"){
      setOrders({username, useremail,service,projectDesc: e.target.value,price})
    }
    if(e.target.name === "price"){
      setOrders({username, useremail,service,projectDesc,price: e.target.value})
    }
  }

  const createOrder = () => {
    axios.post(serverURL + "/api/orders", orders)
    .then((res)=>{
      if(res.status === 201){
        console.log("Order created")
      }
      else{
        throw new Error("could not create new order");
      }
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    orders.username = user.name
    orders.useremail = user.email
    window.sessionStorage.removeItem("service")
    createOrder()
    setOrders({
      service: "",
      projectDesc: "",
      price: ""
    })
  }
  
  return (
    <>
    {error && <h1>{error}</h1>}
      <Container fluid className='p-0 m-0 common-back'>
        {user && <Header title="Order" username={user.name}/>}
        <Row className="me-0">
          <Col lg={3}>
            <Left />
          </Col>
          <Col lg={6}>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Control type="text" name="username" onChange={handleChange} value={user && user.name} required/>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type="email" name="useremail" onChange={handleChange} value={user && user.email} required/>

              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type="text" name="service" onChange={handleChange} placeholder="Service" value={service} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="projectDesc" onChange={handleChange} rows={3} placeholder="Project Details"  value={projectDesc} required/>
              </Form.Group>
              <Form.Group className='mb-3 w-50'>
                <Form.Control type="text" name="price" onChange={handleChange} placeholder="Price" value={price} required/>
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
