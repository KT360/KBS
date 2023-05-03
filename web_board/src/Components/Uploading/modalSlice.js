import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

//(React Redux)
//The "Window" component manages the current page state
//updates it and returns the updated value for use
export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: { imagePath:"random image path", name:"", title:"Intern, Kautex(Textron)", notes:"",},
    },

    reducers: {
        update_form: (state, action) =>
        { 

            console.log("The pay load: "+action.payload.imagePath);
            const newState =  {
                ...state,
                value:{
                    ...state.value,
                    ...action.payload
                } ,
            };

            console.log("New state: "+ newState.value.imagePath);
            return newState;
        }
               
    },

})

export const {update_form} = modalSlice.actions;

export default modalSlice.reducer