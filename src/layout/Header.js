import React from "react";
import { Link } from "react-router-dom";
import { default as UnstyledNavbar } from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Navbar = styled(UnstyledNavbar)`
  margin: 0;
  background-color: rgb(71, 59, 241) !important;
`;

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        My Library
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/readbooks">
          Read Books
        </Nav.Link>
        <Nav.Link as={Link} to="/wanttoread">
          Want to Read
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
