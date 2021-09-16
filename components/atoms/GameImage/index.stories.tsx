import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameImage from '../GameImage';

export default {
    title: 'atoms/GameImage',
    component: GameImage,
} as ComponentMeta<typeof GameImage>;

const Template: ComponentStory<typeof GameImage> = (args) => <GameImage {...args} />;

export const Image = Template.bind({});
Image.args = {
    game: {
        slug: 'league-of-legends',
        name: 'League of Legend',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        store: 'steam',
        release_at: 1256605200,
        developer: 'riot-games',
    },
};

export const ImageWithName = Template.bind({});
ImageWithName.args = {
    game: {
        slug: 'league-of-legends',
        name: 'League of Legend',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        store: 'steam',
        release_at: 1256605200,
        developer: 'riot-games',
    },
    showName: true,
};
