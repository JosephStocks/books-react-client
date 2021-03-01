import { ADD_READ_BOOK } from "./alreadyRead.types";

const INITIAL_STATE = {
  readBooks: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_READ_BOOK:
      return {
        ...state,
        readBooks: [...state.readBooks, action.book], // state.cart.concat(action.data)
      };
    default:
      return state;
  }
};

export default reducer;
