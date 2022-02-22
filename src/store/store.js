import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from "./reducers/favoriteReducer";

export default configureStore({
    reducer:{
        favorite: favoriteReducer
    }
})