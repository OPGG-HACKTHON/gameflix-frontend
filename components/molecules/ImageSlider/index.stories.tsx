import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageSlider from '../ImageSlider';

const list = [
    {
        slug: 'league-of-legend',
        name: 'League of Legend',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'factorio',
        name: 'Factorio',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'RimWorld',
        name: 'RimWorld',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'PUBG: BATTLEGROUNDS',
        name: 'PUBG: BATTLEGROUNDS',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: "Sid Meier's Civilization VI",
        name: "Sid Meier's Civilization VI",
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        developer: 'test',
        store: 'test',
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        developer: 'test',
        store: 'test',
    },
];

export default {
    title: 'molecules/ImageSlider',
    component: ImageSlider,
    args: {
        list,
    },
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args} />;

export const LotsOfImages = Template.bind({});
LotsOfImages.args = {};

export const OneImage = Template.bind({});
OneImage.args = {
    list: [
        {
            slug: 'league-of-legend',
            name: 'League of Legend',
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
            release_at: 1256605200,
            developer: 'test',
            store: 'RiotGames',
        },
    ],
};

export const EmptyList = Template.bind({});
EmptyList.args = { list: [] };
