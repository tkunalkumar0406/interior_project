import React from 'react'
import {Navbar, Nav, Button, Form, FormControl,Image} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const HomePage = () => {
  return (
    <div >
      <Navbar bg="primary" variant="dark">
      <LinkContainer to='/'>
            <Navbar.Brand href="/">
            <Image className='logo-img-style'src='interior/interior.png' alt="INRT" roundedCircle />
            <h5 className='logo-text-style'>Interior Website</h5>
            </Navbar.Brand>
      </LinkContainer>
  
    <Nav className='classname' style={{padding:'23px 0px 0px 167px'}}>
    <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link> 
    </Nav>

    <Form inline>
      <Nav className='classname' style={{width:'35rem'}}>
      <FormControl type="text" placeholder="Search" className="mr-lg-2" />
      <Button variant="outline-light" style={{width:'12rem'}}>Search</Button>
      </Nav>
    </Form>
  </Navbar>
     
    </div>
  )
}

export default HomePage
