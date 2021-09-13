import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Libraries from '../Libraries';

export default {
    title: 'organisms/Libraries',
    component: Libraries,
} as ComponentMeta<typeof Libraries>;

const Template: ComponentStory<typeof Libraries> = (args) => <Libraries {...args} />;

export const Primary = Template.bind({});
