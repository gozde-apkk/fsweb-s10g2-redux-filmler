import { combineReducers } from "redux";

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';




const combines = combineReducers({
    movieReducer : movieReducer,
    favoritesReducer : favoritesReducer
})


export default combines;
