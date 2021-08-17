import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '../Logo';

export default {
    title: 'atoms/Logo',
    component: Logo,
    decorators: [
        (Story) => (
            <div style={{ background: '#0c0c0c', padding: '3rem' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Big = Template.bind({});
Big.args = { size: 'big' };
