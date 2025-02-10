import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ExpenseRow from './ui/ExpenseRow';

const ExpenseHistory: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.data);

  // Group expenses by date (string)
  const grouped = expenses.reduce((acc, expense) => {
    const dateKey = new Date(expense.date).toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(expense);
    return acc;
  }, {} as Record<string, typeof expenses>);

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div>
      <h2>Expense History</h2>
      {sortedDates.map((dateStr) => (
        <div key={dateStr} style={{ marginBottom: 10 }}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {grouped[dateStr].map((exp) => (
                <ExpenseRow key={exp._id} expense={exp} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ExpenseHistory;
