import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userData: {},
	error: null,
	loading: true,
};

const messageSlice = createSlice({
	name: 'sendMessage',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload;
			state.loading = false;
			state.error = null;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { setUserData ,setLoading,setError } = messageSlice.actions;

export default messageSlice.reducer