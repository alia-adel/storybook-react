import { Header } from './Header';
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const userName = 'Jane Doe'

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: userName,
    },
  },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const userNameElm = canvas.getByTestId('user-name');
        // Adding tests to test component intercations
        await expect(userNameElm).toHaveTextContent(userName)
    }
};

export const LoggedOut = {};
