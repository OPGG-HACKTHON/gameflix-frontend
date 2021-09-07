import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeSwitch from './index';
import { action } from '@storybook/addon-actions';

export default {
    title: 'atoms/Switch',
    component: ThemeSwitch,
    args: {
        toggleTheme: () => action('toggle Theme.'),
    },
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
