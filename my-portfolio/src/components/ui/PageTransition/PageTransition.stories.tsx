import type { Meta, StoryObj } from '@storybook/react-vite';

import PageTransition from './PageTransition';

const meta = {
  title: 'UI/PageTransition',
  component: PageTransition,
  tags: ['autodocs'],
} satisfies Meta<typeof PageTransition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isTransitioning: true,
  },
};
