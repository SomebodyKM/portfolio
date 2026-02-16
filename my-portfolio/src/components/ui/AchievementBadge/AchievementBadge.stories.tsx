import type { Meta, StoryObj } from '@storybook/react-vite';

import AchievementBadge from './AchievementBadge';

const meta = {
  title: 'UI/AchievementBadge',
  component: AchievementBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof AchievementBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
  args: {
    title: 'Quest Starter',
    description: 'Complete your first quest',
    icon: 'trophy',
    unlocked: true,
  },
};

export const Locked: Story = {
  args: {
    title: 'Master Coder',
    description: 'Finish all coding quest',
    icon: 'code',
    unlocked: false,
  },
};

export const ZapBadge: Story = {
  args: {
    title: 'Speed Runner',
    description: 'Complete a quest in record time',
    icon: 'zap',
    unlocked: true,
  },
};
