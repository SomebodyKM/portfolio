import type { Meta, StoryObj } from '@storybook/react-vite';

import Loader from './Loader';

const meta = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Loading Assets',
    value: 65,
  },
};

export const XPBar: Story = {
  args: {
    label: 'Level Progress',
    value: 42,
    color: 'purple',
  },
};

export const Gold: Story = {
  args: {
    label: 'Boss Charge',
    value: 90,
    color: 'gold',
  },
};
