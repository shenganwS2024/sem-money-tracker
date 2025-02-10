import { Expense, Category } from '../types/expense';

const BASE_URL = 'http://localhost:4000/api';

export async function fetchAllExpenses() {
  const response = await fetch(`${BASE_URL}/expenses`); 
  if (!response.ok) {
    throw new Error(`Failed to fetch expenses: ${response.statusText}`);
  }
  return response.json();
}


export async function postNewExpense(data: { amount: number; category: Category }): Promise<Expense> {
  const response = await fetch(`${BASE_URL}/expenses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`Failed to create expense: ${response.statusText}`);
  }
  return response.json();
}
