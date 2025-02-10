import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Expense } from '../types/expense';
import { fetchAllExpenses, postNewExpense } from '../services/api';

interface ExpensesState {
  data: Expense[];
  loading: boolean;
  error: string | null;
}

const initialState: ExpensesState = {
  data: [],
  loading: false,
  error: null
};

// Thunk to fetch all expenses
export const fetchExpenses = createAsyncThunk('expenses/fetchAll', async () => {
  const expenses = await fetchAllExpenses();
  return expenses;
});

// Thunk to add a new expense
export const addExpense = createAsyncThunk('expenses/addOne', async (expense: Omit<Expense, '_id' | 'date'>) => {
  const newExpense = await postNewExpense(expense);
  return newExpense;
});

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpenseRealTime: (state, action: PayloadAction<Expense>) => {
      // For Socket.IO updates
      // (Only when the server broadcasts "expenseAdded")
      state.data.unshift(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action: PayloadAction<Expense[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch expenses';
      })
      .addCase(addExpense.fulfilled, (state, action: PayloadAction<Expense>) => {
        // We rely on the Socket.IO broadcast to add the item
        // state.data.unshift(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to add expense';
      });
  }
});

export const { addExpenseRealTime } = expensesSlice.actions;
export default expensesSlice.reducer;
