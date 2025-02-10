import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Default Button
export const Default = Template.bind({});
Default.args = {
  children: 'Click Me'
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true
};

// Custom Text
export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Submit'
};

// Button with Custom Style
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: 'Styled Button',
  style: { backgroundColor: 'green', padding: '12px 20px' }
};
