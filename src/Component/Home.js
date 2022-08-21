import React, { useState, useRef } from 'react'
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import { GiRobberHand } from 'react-icons/gi';
import { FiPhoneCall } from 'react-icons/fi';
import { TbCurrentLocation } from 'react-icons/tb';
import jwt_deocde from "jwt-decode";

import AbouUs from './AbouUs';
import Work from './Work';
import Feedback from './Feedback';
import Contact from './Contact';
import Services from './Services';
import { useScript } from './useScript';


export default function Home() {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null)
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    window.localStorage.setItem("user", JSON.stringify(payload))
    window.location.reload()
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID, // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  user && window.localStorage.setItem("user", JSON.stringify(user))

  return (
    <>
      {/* Haeder */}
      <header className='bg-image container-fluid'>
        <div className='rectangle'>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home" className='text-white'><GiRobberHand className='fs-1' /><span className='text-brand ms-3'>Service Agency</span></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='text-white'>
                  <Row>
                    <Col>
                      <Row>
                        <Col lg={2}>
                          <FiPhoneCall className='fs-3 opacity-75 mt-2' />
                        </Col>
                        <Col lg={10} className='px-3'>
                          <a href='tel:+4733378901' className='text-white d-block fw-bold'>+4733378901</a>
                          <small className='opacity-25'>24/7 are open</small>
                        </Col>
                      </Row>
                    </Col>

                    <Col>
                      <Row>
                        <Col lg={2}>
                          <TbCurrentLocation className='fs-3 opacity-75 mt-2' />
                        </Col>
                        <Col lg={10} className='px-3'>
                          <a href='#location' className='text-white d-block fw-bold'>Malibagh</a>
                          <small className='opacity-25'>Dhaka, Bangladesh</small>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white' />
              <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
                <Nav className="me-auto">
                  <Nav.Link href="#home" className='text-white me-5 pe-5 border-nav'>Home</Nav.Link>
                  <Nav.Link href="#services" className='text-white me-5 pe-5 border-nav'>Our Services</Nav.Link>
                  <Nav.Link href="#aboutUs" className='text-white me-5 pe-5 border-nav'>About Us</Nav.Link>
                  <Nav.Link href="#work" className='text-white me-5 pe-5 border-nav'>Our Work</Nav.Link>
                  <Nav.Link href="#feedback" className='text-white me-5 pe-5 border-nav'>Client Feedback</Nav.Link>
                  <Nav.Link href="#contact" className='text-white me-5 pe-5 border-nav'>Contact</Nav.Link>
                </Nav>
                <Navbar.Text>
                  <div>
                    {!user && <div ref={googlebuttonref}></div>}
                    {user && (
                      <div>
                        <button onClick={() => {
                          setuser(null)
                          window.localStorage.removeItem("user")
                          // window.location.reload()
                        }}>
                          Logout
                        </button>
                        <img src={user.picture} alt={user.name} height="40px" width="40px" className='rounded-circle ms-3' />
                      </div>
                    )}
                  </div>
                  {/* {showloginButton ?
                      <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText='Login'
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                      />
                      : null}
                    {showlogoutButton ?
                      <>
                        <GoogleLogout
                          clientId={clientId}
                          buttonText="Logout"
                          onLogoutSuccess={onSignoutSuccess}
                        >
                        </GoogleLogout>
                        <Image src={user.imageUrl} alt={user.name} height="40px" width="40px" className='rounded-circle ms-3' />
                      </>
                      : null
                    } */}
                  <div id="signin"></div>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div id='services' className='d-flex justify-content-center align-items-center flex-column h-50 mt-5 text-white'>
            <p className='highlight-words p-0 m-0 fs-4 opacity-75'>Let's Grow Your</p>
            <h1 className='highlight-words mb-4 fs-1'>Barnd To Next Level</h1>
            <Button className='button-header' onClick={() => console.log("Primary")}>
              Primary
            </Button>
          </div>

          <div className='container'>
            <Services />
          </div>

        </div>
      </header>
      <main>
        {/* AboutUs */}
        <AbouUs />

        {/* Work */}
        <Work />

        {/* Feedback */}
        <Feedback />
      </main>
      {/* Contact */}
      <Contact />
    </>
  )
}
