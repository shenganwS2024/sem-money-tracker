import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
