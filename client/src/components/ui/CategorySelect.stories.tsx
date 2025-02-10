import type { Meta, StoryObj } from '@storybook/react';
import CategorySelect from './CategorySelect';
import { Category } from '../../types/expense';

const meta: Meta<typeof CategorySelect> = {
  title: 'UI/CategorySelect',
  component: CategorySelect,
  tags: ['autodocs'], 
  argTypes: {
    onChange: { action: 'changed' }, 
    style: { control: 'object' },    
  },
};

export default meta;
type Story = StoryObj<typeof CategorySelect>;

// 1. The Default story: No category selected
export const Default: Story = {
  args: {
    value: '',
    style: { width: '120px' },
    onChange: (newCat) => {
      console.log(`Selected category: ${newCat}`);
    },
  },
};

// 2. A story showing "Bills" pre-selected
export const BillsSelected: Story = {
  args: {
    value: 'Bills' as Category,
    style: { width: '120px' },
    onChange: (newCat) => {
      console.log(`Selected category: ${newCat}`);
    },
  },
};
