import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin:null,
    destintion:null,
    traveltimeInformation: null
};

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin: (state, action)=> {
            state.origin = action.payload;
        },
        setDestination: (state, action)=>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state,action) => {
            state.traveltimeInformation = action.payload;
        }
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.traveltimeInformation;

//reducer
export default navSlice.reducer;