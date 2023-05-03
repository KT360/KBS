import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import windowReducer from './Components/Window/windowSlice';
import modalReducer from './Components/Uploading/modalSlice';
import pageReducer from './Components/Pages/pageSlice';

//Storage element that helps the app acess configured states in 
//Slices
export default configureStore({
    reducer: {
        window: windowReducer,
        modal: modalReducer,
        page: pageReducer
    },
});