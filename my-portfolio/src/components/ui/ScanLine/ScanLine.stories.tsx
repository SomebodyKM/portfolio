import type { Meta, StoryObj } from '@storybook/react-vite';

import ScanLine from './ScanLine';

const meta = {
  title: 'UI/ScanLine',
  component: ScanLine,
  tags: ['autodocs'],
} satisfies Meta<typeof ScanLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cyan: Story = {
  args: {
    color: 'cyan',
    duration: 2,
  },
};

export const Purple: Story = {
  args: {
    color: 'purple',
    duration: 2.5,
  },
};

export const GoldGlow: Story = {
  args: {
    color: 'gold',
    duration: 4,
  },
};
