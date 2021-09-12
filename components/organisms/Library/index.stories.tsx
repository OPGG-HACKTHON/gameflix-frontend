import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Library from '../Library';

const list = [
    {
        slug: 'league-of-legend',
        name: 'League of Legend',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'factorio',
        name: 'Factorio',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'RimWorld',
        name: 'RimWorld',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'PUBG: BATTLEGROUNDS',
        name: 'PUBG: BATTLEGROUNDS',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: "Sid Meier's Civilization VI",
        name: "Sid Meier's Civilization VI",
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        url: 'string',
        genres: ['moba'],
        rating_external: 80.35918701514501,
        rating_external_count: 501,
        platforms: ['win', 'mac'],
        summary: 'test',
        involved_companies: ['test'],
    },
];

export default {
    title: 'organisms/Library',
    component: Library,
} as ComponentMeta<typeof Library>;

const Template: ComponentStory<typeof Library> = (args) => <Library {...args} />;

export const LotsOfImages = Template.bind({});
LotsOfImages.args = {
    label: 'STEAM',
    list,
};

export const OneImage = Template.bind({});
OneImage.args = {
    label: 'STEAM',
    list: [
        {
            slug: 'league-of-legend',
            name: 'League of Legend',
            release_at: 1256605200,
            updated_at: 1626713554,
            cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
            url: 'string',
            genres: ['moba'],
            rating_external: 80.35918701514501,
            rating_external_count: 501,
            platforms: ['win', 'mac'],
            summary: 'test',
            involved_companies: ['test'],
        },
    ],
};
