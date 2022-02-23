import {createSlice, current} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        listOfFavorite: [{ville: "Oignies", temp: 10, daily: null}]
    },
    reducers:{
        addFavorite: (state,action) => {
            state.listOfFavorite.push(action.payload)
            console.log(current(state.listOfFavorite));
        }
    }
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer