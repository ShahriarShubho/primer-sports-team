import React from 'react';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './Navbar.css'

const Navabars = () => {
    return (
        <Navbar bg="dark" variant="dark" className="nav-style">
        <Navbar className="brand" href="#home">Premier Sports Team</Navbar>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/home">Team</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 p-4" />
          <Button variant="outline-info btn-lg">Search</Button>
        </Form>
      </Navbar>
    );
};

export default Navabars;