import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Toast from './Toast';

const meta = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: 'message',
    type: 'success',
    onClose: fn(),
  },
};

export const Error: Story = {
  args: {
    message: 'message',
    type: 'error',
    onClose: fn(),
  },
};
