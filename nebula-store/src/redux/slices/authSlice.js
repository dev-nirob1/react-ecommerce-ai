import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    profile: null,
    session: null,
    isLoading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.session = action.payload.session;
            state.profile = action.payload.profile;
            state.isLoading = false;
        },
        clearAuth: (state) => {
            state.user = null;
            state.session = null;
            state.profile = null;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setAuth, clearAuth, setLoading } = authSlice.actions;
export default authSlice.reducer;
