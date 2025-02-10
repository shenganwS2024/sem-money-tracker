import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGODB_URI } from './config';
import expenseRoutes from './routes/expense.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/expenses', expenseRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

export default app;
