import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ImageSlider from '../ImageSlider';

const list = [
    { id: '1', src: 'https://via.placeholder.com/278x368?text=1' },
    { id: '2', src: 'https://via.placeholder.com/278x368?text=2' },
    { id: '3', src: 'https://via.placeholder.com/278x368?text=3' },
    { id: '4', src: 'https://via.placeholder.com/278x368?text=4' },
    { id: '5', src: 'https://via.placeholder.com/278x368?text=5' },
];

export default {
    title: 'molecules/ImageSlider',
    component: ImageSlider,
    args: {
        list,
        onClick: (id: string) => action(`clicked-${id}`),
    },
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
