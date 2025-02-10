import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addExpense } from '../features/expensesSlice';
import { Category } from '../types/expense';
import Button from './ui/Button';
import CategorySelect from './ui/CategorySelect';

const ExpenseForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [amountStr, setAmountStr] = useState<string>('00.00');
  const [category, setCategory] = useState<Category | ''>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, '');
    setAmountStr(rawValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(amountStr);
    if (isNaN(parsed) || parsed <= 0) {
      console.warn('Invalid amount:', amountStr);
      return;
    }
    if (!category) {
      console.warn('No category selected');
      return;
    }
    dispatch(addExpense({ amount: parsed, category }));
    setAmountStr('00.00');
    setCategory('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 20,
        maxWidth: '350px', // suitable max for desktop
        width: '97%',     // adapt to phone width
        margin: '0 auto',  // center horizontally
        padding: '0 10px'  // some side padding for smaller screens
      }}
    >
      <h2>Add New Expense</h2>

      {/* Amount Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8
        }}
      >
        <label style={{ marginRight: 8 }}>Amount:</label>
        <input
          type="text"
          value={`$${amountStr}`}
          onChange={handleAmountChange}
          required
          style={{
            textAlign: 'right',
            width: '82px', // or another fixed width
          }}
        />
      </div>

      {/* Category Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8
        }}
      >
        <label style={{ marginRight: 8 }}>Category:</label>
        <CategorySelect
          value={category}
          onChange={(cat) => setCategory(cat)}
          style={{
            width: '90px', // match or differ from amount input
          }}
        />
      </div>

      <div>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
