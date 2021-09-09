import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CloseIcon from './index';

export default {
    title: 'atoms/CloseIcon',
    component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
