// client/src/screens/HomeScreen.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseSummary from '../components/ExpenseSummary';
import './MobileLayout.css'; // optional custom CSS

const HomeScreen: React.FC = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Money Tracker</h1>
      </header>

    <section className="content">
        <ExpenseSummary />

        {/* Wrap the button in a div with text-align center */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/expenses">
            <button className="primary-button">Add Expenses</button>
            </Link>
        </div>
    </section>

    </div>
  );
};

export default HomeScreen;
