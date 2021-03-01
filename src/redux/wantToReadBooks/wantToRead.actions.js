import { ADD_WANT_BOOK } from "./wantToRead.types";

export const addBookToWantToRead = (book) => {
  return {
    type: ADD_WANT_BOOK,
    book: book,
  };
};
