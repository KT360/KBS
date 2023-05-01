import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import windowReducer from './Components/Window/windowSlice';

//Storage element that helps the app acess configured states in 
//Slices
export default configureStore({
    reducer: {
        window: windowReducer,
    },
});