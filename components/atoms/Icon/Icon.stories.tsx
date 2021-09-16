import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

export default {
    title: 'atoms/Icon',
    component: Icon,
    argTypes: {
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Light = Template.bind({});
Light.args = {
    name: 'Light',
};

export const Dark = Template.bind({});
Dark.args = {
    name: 'Dark',
};

export const Close = Template.bind({});
Close.args = {
    name: 'Close',
};

export const Magnifier = Template.bind({});
Magnifier.args = {
    name: 'Magnifier',
};

export const Check = Template.bind({});
Check.args = {
    name: 'Check',
};

export const InitialLogo = Template.bind({});
InitialLogo.args = {
    name: 'InitialLogo',
};
