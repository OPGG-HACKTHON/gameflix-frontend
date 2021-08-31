import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from './index';

export default {
    title: 'Molecules/Search',
    component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
