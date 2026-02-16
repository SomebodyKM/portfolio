import type { Meta, StoryObj } from '@storybook/react-vite';

import QuestCard from './QuestCard';

const meta = {
  title: 'UI/QuestCard',
  component: QuestCard,
  tags: ['autodocs'],
} satisfies Meta<typeof QuestCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Planned: Story = {
  args: {
    title: 'Begin Training',
    difficulty: 2,
    status: 'planned',
    description: 'Learn the basics of the system.',
    objectives: ['Read the onboarding guide', 'Explore UI components'],
    reward: '+50 XP',
  },
};

export const InProgress: Story = {
  args: {
    title: 'Build UI Components',
    difficulty: 4,
    status: 'in-progress',
    description: 'Create reusable UI components using Storybook.',
    objectives: [
      'Create Button component',
      'Create Card component',
      'Preview in Storybook',
    ],
    reward: '+200 XP',
  },
};

export const Completed: Story = {
  args: {
    title: 'Setup Project',
    difficulty: 1,
    status: 'completed',
    description: 'Setting up project',
    objectives: [
      'Install dependencies',
      'Configure Tailwind',
      'Setup Storybook',
    ],
    reward: '+100 XP',
  },
};
