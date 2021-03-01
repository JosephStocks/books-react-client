import React from "react";
import { useSelector } from "react-redux";
import DisplayBook from "./DisplayBook";

import styled from "styled-components";

const H2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default function ReadBooks() {
  const books = useSelector((state) => state.alreadyRead.readBooks);
  return (
    <>
      <Grid>
        {books.map((book) => (
          <DisplayBook book={book} />
        ))}
      </Grid>
    </>
  );
}
