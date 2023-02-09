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
})