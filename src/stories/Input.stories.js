import React from 'react'
import Input from '../components/Input'

/**
 * Input Stories
 */
const meta = {
    id: 'basic-input-stories',
    title: 'Components/Input',
    subTitle: 'Test SubTitle',
    component: Input,
    argTypes: {// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
        type: {
            type: 'string',
            table: {
                defaultValue: { summary: 'text' },
                type: { summary: 'string' },
            }
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
    // decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px', backgroundColor: 'skyblue', height: '300px' }}><Story /></div>],
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