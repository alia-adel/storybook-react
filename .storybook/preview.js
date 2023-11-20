/** @type { import('@storybook/react').Preview } */

import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer } from '@storybook/blocks';

const ExampleContainer = ({ children, ...props }) => {
  return <DocsContainer {...props}>{children}</DocsContainer>;
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
    docs: {
      // container: ExampleContainer,
      toc: {
        title: 'Table Of content'
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
}

export default preview
