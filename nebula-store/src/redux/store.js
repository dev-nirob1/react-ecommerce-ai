import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these paths in state and actions to handle non-serializable session data from Supabase
                ignoredActions: ['auth/setAuth'],
                ignoredPaths: ['auth.session', 'auth.user'],
            },
        }),
});
