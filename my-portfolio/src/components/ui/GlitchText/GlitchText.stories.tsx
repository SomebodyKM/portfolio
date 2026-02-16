import type { Meta, StoryObj } from '@storybook/react-vite';

import GlitchText from './GlitchText';

const meta = {
  title: 'UI/GlitchText',
  component: GlitchText,
  tags: ['autodocs'],
} satisfies Meta<typeof GlitchText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'PLAYER ONE',
  },
};

export const LargeTitle: Story = {
  args: {
    children: 'LEVEL UP',
    className: 'text-4xl font-bold',
  },
};

export const Disable: Story = {
  args: {
    children: 'SYSTEM ONLINE',
    trigger: false,
  },
};
