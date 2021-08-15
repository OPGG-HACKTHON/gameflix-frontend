import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

export default {
    title: 'atoms/Button',
    component: Button,
    decorators: [
        (Story) => (
            <div style={{ background: '#0c0c0c', padding: '3rem' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    children: '로그아웃',
};
