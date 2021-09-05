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
    category: 'primary',
    children: '가져오기',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    category: 'primary',
    children: '비활성화',
    disabledState: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    category: 'secondary',
    children: '로그아웃',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    category: 'secondary',
    children: '비활성화',
    disabledState: true,
};
