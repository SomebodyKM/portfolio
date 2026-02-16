import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cyan: Story = {
  args: {
    children: 'Start Game',
    variant: 'cyan',
  },
};

export const Purple: Story = {
  args: {
    children: 'Skills',
    variant: 'purple',
  },
};

export const Gold: Story = {
  args: {
    children: 'Enter Dungeon',
    variant: 'gold',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Boss Fight',
    variant: 'gold',
    fullWidth: true,
  },
};

export const NoGlow: Story = {
  args: {
    children: 'Contact',
    variant: 'cyan',
    glow: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Locked',
    variant: 'cyan',
    disabled: true,
  },
};
