import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const windowSlice = createSlice({
    name: 'window',
    initialState: {
        value: "home_page",
    },

    reducers: {
        change_page: (state, action) =>
        { 
            console.log("Page change: "+action.payload);
            return {
                ...state,
                value: action.payload
            }
        }
               
    },

})

export const {change_page} = windowSlice.actions;

export default windowSlice.reducer