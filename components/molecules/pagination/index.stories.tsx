import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './';
import { action } from '@storybook/addon-actions';

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
    totalCount: 200,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 24,
    onPageChange: action('clicked!'),
};
