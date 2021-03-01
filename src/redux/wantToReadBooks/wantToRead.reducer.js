import { ADD_WANT_BOOK } from "./wantToRead.types";

const INITIAL_STATE = {
  wantToReadBooks: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WANT_BOOK:
      return {
        ...state,
        wantToReadBooks: [...state.wantToReadBooks, action.book], // state.cart.concat(action.data)
      };
    default:
      return state;
  }
};

export default reducer;
