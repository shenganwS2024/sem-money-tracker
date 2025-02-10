import React, { CSSProperties } from 'react';
import { Category } from '../../types/expense';

interface CategorySelectProps {
  value: Category | '';
  onChange: (value: Category | '') => void;
  style?: CSSProperties;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange, style }) => {
  const categories: Category[] = ['Bills', 'Grocery', 'Health', 'Travel', 'Others'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Category | '')}
      style={style}
    >
      <option value="">Select One</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
