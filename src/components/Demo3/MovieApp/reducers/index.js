import { combineReducers } from "redux";

import movies from "./movies_reducer";
import favorites from "./add_favourite_reducer";

/**
 * Note: 
 * When there are more then one reducers we use combineReducer method of redux library
 */
const rootReducer = combineReducers({
  movies,
  favorites,
});

export default rootReducer;