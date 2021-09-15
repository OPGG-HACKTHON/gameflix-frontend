import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameSearchResult from './';

export default {
    title: 'molecules/GameSearchResult',
    component: GameSearchResult,
} as ComponentMeta<typeof GameSearchResult>;

const Template: ComponentStory<typeof GameSearchResult> = (args) => <GameSearchResult {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    games: [],
};

export const Singluar = Template.bind({});
Singluar.args = {
    games: [
        {
            name: 'League of Legends',
            slug: 'league-of-legends',
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
            release_at: 1256605200,
            store: 'etc',
            developer: 'Riot Games',
        },
    ],
};

export const Plural = Template.bind({});
Plural.args = {
    games: [
        {
            name: 'League of Legends',
            slug: 'league-of-legends',
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
            release_at: 1256605200,
            store: 'etc',
            developer: 'Riot Games',
        },
        {
            name: 'Quantum League',
            slug: 'quantum-league',
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co200y.jpg',
            release_at: 1256605200,
            store: 'etc',
            developer: 'Samsung Ele.',
        },
    ],
};
