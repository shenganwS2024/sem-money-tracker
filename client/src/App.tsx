// client/src/App.tsx
import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useAppDispatch } from './store';
import { addExpenseRealTime, fetchExpenses } from './features/expensesSlice';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import { Expense } from './types/expense'; 
const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // On mount, fetch existing expenses
    dispatch(fetchExpenses());

    const socket = io('http://localhost:4000');

    socket.on('expenseAdded', (expenseData: Expense) => {
      dispatch(addExpenseRealTime(expenseData));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/expenses" element={<ExpensesScreen />} />
      </Routes>
    </>
  );
};

export default App;
