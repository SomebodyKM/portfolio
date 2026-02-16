import type { Meta, StoryObj } from '@storybook/react-vite';

import Achievement from './Achievement';

const meta = {
  title: 'UI/Achievement',
  component: Achievement,
  tags: ['autodocs'],
} satisfies Meta<typeof Achievement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
  args: {
    title: 'First Blood',
    description: 'Complete your first quest',
    icon: 'trophy',
    unlocked: true,
  },
};

export const Locked: Story = {
  args: {
    title: 'Legendary Hero',
    description: 'Complete all quest',
    icon: 'rocket',
    unlocked: false,
  },
};

export const CodeAchievement: Story = {
  args: {
    title: 'Code Wizard',
    description: 'Write your first component',
    icon: 'code',
    unlocked: true,
  },
};
