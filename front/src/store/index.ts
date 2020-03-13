import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import petReducer from './pet/reducer';

export const store = configureStore({
  reducer: {
    pet: petReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
