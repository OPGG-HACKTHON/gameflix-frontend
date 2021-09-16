import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '.';

export default {
    title: 'molecules/Pagination',
    component: Pagination,
    args: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
    <Pagination {...args}>{args.children}</Pagination>
);

export const Default = Template.bind({});
Default.args = {
    totalPages: 4,
};
