import React from "react";
import { default as UnstyledNavbar } from "react-bootstrap/Navbar";
import styled from "styled-components";

const Navbar = styled(UnstyledNavbar)`
  background-color: lightgray;
  margin: 0;
  padding: 0;
`;

export default function Footer() {
  return (
    <Navbar bg="light" variant="light">
      Is there something here?
    </Navbar>
  );
}
