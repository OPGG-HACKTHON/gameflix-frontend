import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameList from '../GameList';

export default {
    title: 'organisms/GameList',
    component: GameList,
} as ComponentMeta<typeof GameList>;

const Template: ComponentStory<typeof GameList> = (args) => <GameList {...args} />;

export const Store = Template.bind({});
Store.args = {
    store: 'steam',
};
