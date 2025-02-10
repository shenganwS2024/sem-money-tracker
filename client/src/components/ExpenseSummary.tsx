import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Category, Expense } from '../types/expense';

const categories: Category[] = ['Bills', 'Grocery', 'Health', 'Travel', 'Others'];

const ExpenseSummary: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.data);

  // Compute total per category
  const totals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Expense Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat}>
              <td>{cat}</td>
              <td>${(totals[cat] || 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseSummary;
