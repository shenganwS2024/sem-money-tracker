// client/src/screens/ExpensesScreen.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseHistory from '../components/ExpenseHistory';
import './MobileLayout.css';

const ExpensesScreen: React.FC = () => {
  return (
    <div className="app-container">
      <header className="header header-back">
        <Link to="/" className="back-arrow">
          &larr; 
        </Link>
        <h1>Expenses</h1>
      </header>

      <section className="content">
        <ExpenseForm />

        <ExpenseHistory />
      </section>
    </div>
  );
};

export default ExpensesScreen;
