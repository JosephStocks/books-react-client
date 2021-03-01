import { combineReducers } from "redux";

import alreadyRead from "./readBooks/alreadyRead.reducer";
import wantToRead from "./wantToReadBooks/wantToRead.reducer";

const rootReducer = combineReducers({
  alreadyRead: alreadyRead,
  wantToRead: wantToRead,
});

export default rootReducer;
