import { configureStore } from '@reduxjs/toolkit';
import courtsReducer from '../slices/courts/courtsSlice'
import procedureReducer from '../slices/procedure/procedureSlice'
import managersReducer from '../slices/managers/managersSlice';

export const store = configureStore({
    reducer: {
        courts: courtsReducer,
        procedures: procedureReducer,
        managers: managersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;