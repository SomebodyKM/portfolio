import type { Meta, StoryObj } from '@storybook/react-vite';

import SkillNode from './SkillNode';

const meta = {
  title: 'UI/SkillNode',
  component: SkillNode,
  tags: ['autodocs'],
} satisfies Meta<typeof SkillNode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
  args: {
    name: 'React',
    status: 'unlocked',
    size: 'medium',
  },
};

export const Learning: Story = {
  args: {
    name: 'TypeScript',
    status: 'learning',
    size: 'medium',
  },
};

export const Locked: Story = {
  args: {
    name: 'WebGL',
    status: 'locked',
    size: 'medium',
  },
};
