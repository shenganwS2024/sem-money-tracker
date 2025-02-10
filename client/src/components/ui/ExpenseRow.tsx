// client/src/components/ui/ExpenseRow.tsx
import React from 'react';
import { Expense } from '../../types/expense';

interface ExpenseRowProps {
  expense: Expense;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense }) => {

  const formattedDate = new Date(expense.date).toLocaleDateString(); 

  return (
    <tr>
      <td>{formattedDate}</td> {/* Display the date */}
      <td>${expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
    </tr>
  );
};

export default ExpenseRow;
