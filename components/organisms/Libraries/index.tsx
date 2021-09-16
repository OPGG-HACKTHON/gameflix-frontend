import React, { FunctionComponent, useState } from 'react';
import Library from 'components/organisms/Library';

import { SimpleGameInfo } from 'types/responseInterface';

import { useBlizzardLogin } from 'hooks';

const Libraries: FunctionComponent = () => {
    const [myBlizzard, setMyBlizzard] = useState<SimpleGameInfo[]>([]);
    const handleLogin = useBlizzardLogin(setMyBlizzard);

    return (
        <>
            <Library label={'STEAM'} list={MOCK_STEAM} onLoad={() => console.log('STEAM')} />
            <Library
                label={'Epic Games Store'}
                list={MOCK_EPIC}
                onLoad={() => console.log('Epic Games Store')}
            />
            <Library label={'battle.net '} list={myBlizzard} onLoad={handleLogin} />
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
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'factorio',
        name: 'Factorio',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'RimWorld',
        name: 'RimWorld',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'PUBG: BATTLEGROUNDS',
        name: 'PUBG: BATTLEGROUNDS',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: "Sid Meier's Civilization VI",
        name: "Sid Meier's Civilization VI",
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        store: 'steam',
        developer: 'test',
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        store: 'steam',
        developer: 'test',
    },
];

const MOCK_EPIC = [
    {
        slug: 'Grand Theft Auto: San Andreas',
        name: 'Grand Theft Auto: San Andreas',
        release_at: 1256605200,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lb9.jpg',
        store: 'epic_Games',
        developer: 'test',
    },
];

const MOCK_BATTLENET = [
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
    },
];
