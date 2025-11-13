import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./AppLayout.style.css";
import { Link } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const searchByKeyword = (event) => {
    event.preventDefault();
    //url 변경
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="position-relative">
      <Navbar
        expand="lg"
        className="bg-black position-fixed w-100 nav-area"
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
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
              style={{ Height: "100%" }}
              navbarScroll
            >
              <Link to="/" className="nav-link" onClick={() => setExpanded(false)}>
                Home
              </Link>
              <Link to="/movies" className="nav-link" onClick={() => setExpanded(false)}>
                Movies
              </Link>
              <Link to="/series" className="nav-link" onClick={() => setExpanded(false)}>
                Series
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword || ""}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
