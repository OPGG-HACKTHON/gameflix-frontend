import React, { FunctionComponent } from 'react';
import Library from 'components/organisms/Library';
import axios from 'axios';

const BlizzardClientId = '916b6064383441388fa56d2b3af3779a';
const BlizzardClientPwd = 'RrKJsOMXTn7AVxhFyscX8ABQiF9Ja9nw';
const REDIRECT_URI = 'http://localhost/';

const Libraries: FunctionComponent = () => {
    const onRegisterBlizzard = async () => {
        const response = await axios.post(
            `https://kr.battle.net/oauth/token?client_id=${BlizzardClientId}&client_secret=${BlizzardClientPwd}&grant_type=client_credentials&code=KRMkJgEGlv8OBbkEtT267vCNmKZbfdj0mN&redirect_uri=${REDIRECT_URI}`
        );
        console.log(response);
    };

    return (
        <>
            <Library label={'STEAM'} list={MOCK_STEAM} onLoad={() => console.log('STEAM')} />
            <Library
                label={'Epic Games Store'}
                list={MOCK_EPIC}
                onLoad={() => console.log('Epic Games Store')}
            />
            <Library label={'battle.net '} list={MOCK_BATTLENET} onLoad={onRegisterBlizzard} />
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
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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
        description: 'test',
        developer: 'test',
        background: 'https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg',
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

const MOCK_EPIC = [
    {
        slug: 'Grand Theft Auto: San Andreas',
        name: 'Grand Theft Auto: San Andreas',
        release_at: 1256605200,
        updated_at: 1626713554,
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lb9.jpg',
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
