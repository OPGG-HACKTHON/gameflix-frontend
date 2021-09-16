import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageSlider from '../ImageSlider';

const list = [
    {
        slug: 'league-of-legends',
        name: 'League of Legends',
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
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        store: 'steam',
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
            store: 'steam',
            developer: 'not found',
            release_at: 1256605200,
        },
    ],
};

export const EmptyList = Template.bind({});
EmptyList.args = { list: [] };
