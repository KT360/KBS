import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import windowReducer from './Components/Window/windowSlice';
export default configureStore({
    reducer: {
        window: windowReducer,
    },
});