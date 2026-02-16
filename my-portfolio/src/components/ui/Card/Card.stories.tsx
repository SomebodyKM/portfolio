import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    glow: 'cyan',
    children: (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Quest Card</h3>
        <p className="text-sm text-slate-400">
          This is a base RPG card component.
        </p>
      </div>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cyan: Story = {
  args: {
    glow: 'cyan',
  },
};

export const Purple: Story = {
  args: {
    glow: 'purple',
  },
};

export const Gold: Story = {
  args: {
    glow: 'gold',
  },
};

export const NoGlow: Story = {
  args: {
    glow: 'none',
  },
};
