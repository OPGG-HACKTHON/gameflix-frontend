import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeSwitch from './index';

export default {
    title: 'atoms/ThemeSwitch',
    component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
