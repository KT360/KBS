import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

//(React Redux)
//The "Window" component manages the current page state
//updates it and returns the updated value for use
export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: {first_name:"", last_name:"", notes:"", image:""},
    },

    reducers: {
        update_form: (state, action) =>
        { 
            console.log("Page change: "+action.payload);
            return {
                ...state,
                value: action.payload
            }
        }
               
    },

})

export const {update_form} = modalSlice.actions;

export default modalSlice.reducer