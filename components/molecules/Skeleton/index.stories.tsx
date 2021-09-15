import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Skeletons from './';

export default {
    title: 'molecules/Skeleton',
    component: Skeletons,
} as ComponentMeta<typeof Skeletons>;

const Template: ComponentStory<typeof Skeletons> = (args) => (
    <Skeletons {...args}>{args.children}</Skeletons>
);

export const Multiple = Template.bind({});
Multiple.args = {
    multiple: true,
};

export const Singular = Template.bind({});
Singular.args = {};
