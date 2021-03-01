import { ADD_READ_BOOK } from "./alreadyRead.types";

export const addBookToRead = (book) => {
  return {
    type: ADD_READ_BOOK,
    book: book,
  };
};
