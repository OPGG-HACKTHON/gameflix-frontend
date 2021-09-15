import React, { FunctionComponent } from 'react';
import Library from 'components/organisms/Library';

const Libraries: FunctionComponent = () => {
    return (
        <>
            <Library label={'STEAM'} list={MOCK_STEAM} onLoad={() => console.log('STEAM')} />
            <Library label={'GOG'} list={MOCK_GOG} onLoad={() => console.log('Epic Games Store')} />
            <Library
                label={'battle.net '}
                list={MOCK_BATTLENET}
                onLoad={() => console.log('battle.net')}
            />
            <Library
                label={'기타'}
                list={[]}
                onLoad={() => console.log('기타')}
                loadText="추가하기"
            />
        </>
    );
};

export default Libraries;

const MOCK_STEAM = [
    {
        slug: 'league-of-legend',
        name: 'League of Legend',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        store: 'steam',
    },
    {
        slug: 'factorio',
        name: 'Factorio',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
        store: 'steam',
    },
    {
        slug: 'RimWorld',
        name: 'RimWorld',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg',
        store: 'steam',
    },
    {
        slug: 'PUBG: BATTLEGROUNDS',
        name: 'PUBG: BATTLEGROUNDS',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
        url: 'string',
        store: 'steam',
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        store: 'steam',
    },
];

const MOCK_GOG = [
    {
        slug: 'Grand Theft Auto: San Andreas',
        name: 'Grand Theft Auto: San Andreas',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lb9.jpg',
        store: 'gog',
    },
];

const MOCK_BATTLENET = [
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        store: 'battlenet',
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        store: 'battlenet',
    },
];
