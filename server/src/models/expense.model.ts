import mongoose, { Schema, Document } from 'mongoose';

export type Category = 'Bills' | 'Grocery' | 'Health' | 'Travel' | 'Others';

export interface IExpense extends Document {
  amount: number;
  category: Category;
  date: Date;
}

const ExpenseSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true },
    category: { type: String, enum: ['Bills', 'Grocery', 'Health', 'Travel', 'Others'], required: true },
    date: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export default mongoose.model<IExpense>('Expense', ExpenseSchema);
