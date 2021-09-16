import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameDetailSkeleton from './';

export default {
    title: 'organisms/GameDetailSkeleton',
    component: GameDetailSkeleton,
} as ComponentMeta<typeof GameDetailSkeleton>;

const Template: ComponentStory<typeof GameDetailSkeleton> = (args) => (
    <GameDetailSkeleton {...args}>{args.children}</GameDetailSkeleton>
);

export const Default = Template.bind({});
Default.args = {};
