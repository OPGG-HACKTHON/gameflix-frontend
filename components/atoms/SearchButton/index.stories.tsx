import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchButton from './';

export default {
    title: 'atoms/SearchButton',
    component: SearchButton,
} as ComponentMeta<typeof SearchButton>;

const Template: ComponentStory<typeof SearchButton> = (args) => (
    <SearchButton {...args}>{args.children}</SearchButton>
);

export const Default = Template.bind({});
Default.args = {};
