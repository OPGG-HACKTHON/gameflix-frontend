import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Library from '../Library';

const list = [
    {
        slug: 'league-of-legend',
        name: 'League of Legend',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'factorio',
        name: 'Factorio',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'RimWorld',
        name: 'RimWorld',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'PUBG: BATTLEGROUNDS',
        name: 'PUBG: BATTLEGROUNDS',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: "Sid Meier's Civilization VI",
        name: "Sid Meier's Civilization VI",
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        store: 'steam',
        developer: 'not found',
        release_at: 1256605200,
    },
];

export default {
    title: 'organisms/Library',
    component: Library,
} as ComponentMeta<typeof Library>;

const Template: ComponentStory<typeof Library> = (args) => <Library {...args} />;

export const LotsOfImages = Template.bind({});
LotsOfImages.args = {
    store: 'steam',
    list,
};

export const OneImage = Template.bind({});
OneImage.args = {
    store: 'etc',
    list: [
        {
            slug: 'league-of-legend',
            name: 'League of Legend',
            store: 'steam',
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
            developer: 'not found',
            release_at: 1256605200,
        },
    ],
};
