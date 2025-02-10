import { Router, Request, Response } from 'express';
import Expense from '../models/expense.model';

const router = Router();

/**
 * GET /api/expenses
 * Fetch all expenses
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error fetching expenses' });
  }
});

/**
 * POST /api/expenses
 * Create a new expense
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { amount, category } = req.body;
    if (!amount || amount <= 0 || !category) {
      return res.status(400).json({ message: 'Invalid expense data' });
    }

    const newExpense = new Expense({ amount, category });
    const savedExpense = await newExpense.save();

    // Emit real-time update via Socket.IO
    const io = req.app.get('io');
    io.emit('expenseAdded', savedExpense);

    return res.status(201).json(savedExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating expense' });
  }
});

export default router;
