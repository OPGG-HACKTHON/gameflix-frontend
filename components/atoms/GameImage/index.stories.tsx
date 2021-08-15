import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameImage from '../GameImage';

export default {
    title: 'atoms/GameImage',
    component: GameImage,
    decorators: [
        (Story) => (
            <div style={{ background: '#0c0c0c', padding: '3rem' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof GameImage>;

const Template: ComponentStory<typeof GameImage> = (args) => <GameImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://via.placeholder.com/278x368',
};
