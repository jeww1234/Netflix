import React from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./AppLayout.style.css"
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-black" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img
              src="/logo.jpg"
              alt="Logo"
              width="120"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              <Link to="/" className="nav-link" >Home</Link>
              <Link to="/movies" className="nav-link" >Movies</Link>
              <Link to="/series" className="nav-link" >Series</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
