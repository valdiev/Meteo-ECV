import {createSlice} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        listOfFavorite: []
    },
    reducers:{
        addEmployee: (state,action) => {
            state.listOfFavorite.push(action.payload)
        }
    }
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer