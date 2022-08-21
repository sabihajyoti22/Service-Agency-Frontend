import React from 'react'
import { Container } from "react-bootstrap"
import { GiRobberHand } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router-dom';

export default function Header({ title, username }) {
  return (
    <>
      <Container fluid className='layout-header d-flex text-white align-items-center justify-content-between'>
        <div className='d-flex col-lg-6 justify-content-between'>
          <div className='d-flex col-lg-6'>
            <GiRobberHand className='fs-1 ms-3 mt-2' />
            <h2 className='ms-3'>Service <small className='d-block fs-5 opacity-75'>Agency</small></h2>
          </div>
          <div className='d-flex col-lg-6'>
            <Link to="/" style={{color: "white"}}>
              <ImHome className='fs-2 mx-3' />
              <p className='ms-2'>Home</p>
            </Link>
            <h3 className='col-lg-6'>{title}</h3>
          </div>
        </div>
        <div className='d-flex justify-content-end col-lg-6'>
          <h3>{username}</h3>
        </div>
      </Container>
    </>
  )
}
