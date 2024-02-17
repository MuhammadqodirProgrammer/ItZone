'use client';

import { configureStore } from '@reduxjs/toolkit';
import sendMessageSlice from './sendMessageSlice';

// Store yaratiish

const store = configureStore({
	reducer: {
        messageStore :sendMessageSlice
    },
});

export default store;
