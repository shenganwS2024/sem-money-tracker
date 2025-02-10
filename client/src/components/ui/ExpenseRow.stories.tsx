import type { Meta, StoryObj } from '@storybook/react';
import ExpenseRow from './ExpenseRow';
import { Expense } from '../../types/expense';
import React from 'react';

const meta: Meta<typeof ExpenseRow> = {
  title: 'UI/ExpenseRow',
  component: ExpenseRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpenseRow>;

/**
 * A simple wrapper so we can show the `<tr>` in a real table
 */
function TableWrapper(args: { expense: Expense }) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <ExpenseRow {...args} />
      </tbody>
    </table>
  );
}

/**
 * Default story, with a sample expense
 */
export const TravelExpense: Story = {
  args: {
    expense: {
      date: new Date().toISOString(),
      amount: 12.34,
      category: 'Travel',
      _id: 'abc123', 
    },
  },
  render: (args) => <TableWrapper {...args} />,
};

/**
 * Another story with a different expense
 */
export const BillsExpense: Story = {
  args: {
    expense: {
      date: '2025-02-15T00:00:00.000Z',
      amount: 100.5,
      category: 'Bills',
      _id: 'def456',
    },
  },
  render: (args) => <TableWrapper {...args} />,
};
