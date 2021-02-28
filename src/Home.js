import React, { useEffect, useState } from "react";
import { bookSearchByISBN, bookSearch, bookSearchByTitle, bookSearchByAuthor } from "./api-calls/3rd-party-apis";
import axios from "axios";
import styled from "styled-components";
import Book from "./Book";

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
`;

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  const search = () => {
    (async () => {
      let result = await bookSearchByTitle(searchText);
      console.log(result);
      setBooks(result.items);
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          value={searchText}
          type="text"
          id="search"
          placeholder="Search for a book!"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="submit">Submit</button>
      </Form>
      <div>
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
}
