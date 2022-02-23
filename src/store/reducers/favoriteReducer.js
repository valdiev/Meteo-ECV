import {createSlice, current} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        listOfFavorite: [{ville: "Oignies", temp: 10, daily: null, weather: "02n"},
            {ville: "Sydney", temp: 24, daily: null, weather: "09d"},
            {ville: "New York", temp: 12, daily: null, weather: "50d"}]
    },
    reducers:{
        addFavorite: (state,action) => {
            state.listOfFavorite.push(action.payload)
        }
    }
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer