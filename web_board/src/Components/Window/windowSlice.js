import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const windowSlice = createSlice({
    name: 'window',
    initialState: {
        value: 0,
    },

    reducers: {
        change_page: (state, action) =>
        { 
            return {
                ...state,
                value: action.payload
            }
        }
               
    },

})

export const {change_page} = windowSlice.actions;

export default windowSlice.reducer