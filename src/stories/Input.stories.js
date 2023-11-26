import React from 'react'
import Input from '../components/Input'
import { userEvent, within } from '@storybook/testing-library'

/**
 * Input Stories
 */
const meta = {
    id: 'basic-input-stories',
    title: 'Components/Forum/Input',
    subTitle: 'Test SubTitle',
    component: Input,
    render: (args, {loaded: {todo}}) => <Input {...args} {...todo}></Input>,
    loaders: [
        async () => ({
            todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
        }),
    ],
    theme: 'dark',
    argTypes: {// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
        type: {
            type: 'string',
            table: {
                defaultValue: { summary: 'text' },
                type: { summary: 'string' },
            }
        },
        labelColor: {
            name: 'Label Color',
            control: 'color'
        },
        borderColor: {
            name: 'Border Color',
            control: 'color',
            description: 'The color that will surround the input field.',            
            table: {
                type: { summary: 'string' },
              } 
        },
        hasLabel: {
            name: 'Input has label',
            control: 'boolean',
            description: 'A flag to show an input label',
            table: {
                type: { summary: 'boolean' },
            }
        },
        placeholder: {
            name: 'Date',
            control: 'date',
            description: 'The default value that will appear before the user starts writing.',
            table: {
                type: { summary: 'string' },
            }
        }
    },
    tags: ['autodocs'],
    layout: 'fullscreen',
    decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px', backgroundColor: 'skyblue', height: '300px' }}><Story /></div>],
    parameters: {
        componentSubtitle: 'SubTitle example....',
        docs: {
            toc: {
                disable: false, // 👈 toggle the table of contents
            },
        },
    }
}

/**
 * Input Text story description
 */
export const Text = {
    args: {
        type: 'text',
        /**
         * Border color
         */
        borderColor: 'red',
        hasLabel: true
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByTestId('inputLabel');
    
        await userEvent.type(emailInput, 'example-email@email.com', {
        delay: 100,
        });
    }
}

/**
 * Input Number story description
 */
export const Number = {
    args: {
        type: 'number',
        borderColor: 'green',
        hasLabel: true
    }
}


export default meta