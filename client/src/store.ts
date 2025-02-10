import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import expensesReducer from './features/expensesSlice';

export const store = configureStore({
  reducer: {
    expenses: expensesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
