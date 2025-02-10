export type Category = 'Bills' | 'Grocery' | 'Health' | 'Travel' | 'Others';

export interface Expense {
  _id?: string;
  amount: number;
  category: Category;
  date: string; // stored as ISO string in Mongo
}
