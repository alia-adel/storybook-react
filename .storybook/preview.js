/** @type { import('@storybook/react').Preview } */

import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer, ArgTypes } from '@storybook/blocks';
import { Global } from '@emotion/react';
import { GlobalStyle } from '../src/shared/global';

import '../src/index.css'
const preview = {
decorators: [
    (Story) => (
      <>
        <Global styles={GlobalStyle} />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      // storySort: (a, b) =>
      //   a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
    docs: {
      toc: {
        title: 'Table Of content'
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
          <Controls />
        </>
      ),
    },
  },
}

export default preview
