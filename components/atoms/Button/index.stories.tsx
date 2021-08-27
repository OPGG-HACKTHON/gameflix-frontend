import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
    title: 'atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    buttonType: 'primary',
    children: '가져오기',
};

export const Secondary = Template.bind({});
Secondary.args = {
    buttonType: 'secondary',
    children: '로그아웃',
};
