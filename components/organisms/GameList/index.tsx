import React, { FunctionComponent, ReactEventHandler, useContext, useEffect } from 'react';
import { STORE_NAME } from '../../../constant';
import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import GameImage from 'components/atoms/GameImage';
import useSWR from 'swr';
import UserContext from 'context/user';
import fetcher from 'utils/fetcher';
import { useGOGLogin, useSteamLogin } from '../../../hooks';
import { useRouter } from 'next/router';
import { Pagination, SimpleGameInfo } from 'types/responseInterface';

type GameListProps = {
    store: keyof typeof STORE_NAME;
};

interface GameResponse extends Pagination {
    games: SimpleGameInfo[];
}

const DEFAULT_SIZE = 24;

const GameList: FunctionComponent<GameListProps> = (props) => {
    const { store } = props;
    const { user } = useContext(UserContext);
    const { id: userId } = user || {};
    const router = useRouter();
    const { page = 1 } = router.query;
    const { data, error } = useSWR<GameResponse>(
        () =>
            userId && store && page
                ? `/users/${userId}/stores/${store}/games?page=${page}&size=${DEFAULT_SIZE}`
                : null,
        fetcher
    );
    const handleLogin = useSteamLogin();
    const handleLogin2 = useGOGLogin();
    console.log(data);
    if (!data || error) {
        return <div>loading...</div>;
    }
    return (
        <ListContainer>
            <ListTitle>
                당신의 {STORE_NAME[store]}게임 라이브러리
                <Button category={'primary'} onClick={handleLogin}>
                    {store !== 'etc' ? '가져오기' : '추가하기'}
                </Button>
            </ListTitle>
            <GameContainer>
                {data.games.length === 0 ? (
                    <EmptyList>
                        <span>라이브러리가 비어 있습니다.</span>
                    </EmptyList>
                ) : (
                    data.games.map((game) => (
                        <GameWrapper key={game.slug}>
                            <GameImage game={game} showName />
                        </GameWrapper>
                    ))
                )}
            </GameContainer>
        </ListContainer>
    );
};

export default GameList;

const ListContainer = styled.article`
    width: 1920px;
    padding: 80px;
    box-sizing: border-box;
    margin: 0;
`;

const ListTitle = styled.h2`
    color: ${({ theme }) => theme.colors.default};
    margin: 0 0 29px 0;
    height: 46px;
    font-size: 32px;
    font-weight: 900;
    line-height: 46px;
    display: flex;
    gap: 16px;
`;

const GameContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 21px;
    width: 1734px;
    list-style: none;
    padding: 0;
    margin: auto;
`;

const GameWrapper = styled.li`
    margin-bottom: 87px;
`;

const EmptyList = styled.li`
    width: 100%;
    height: 368px;
    color: ${({ theme }) => theme.colors.default};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.borderColors.primary};
    border-radius: 10px;
    box-sizing: border-box;
    span {
        font-size: 24px;
    }
`;

const list = [
    {
        slug: 'league-of-legends',
        name: 'League of Legends',
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
        store: 'steam',
    },
    {
        slug: 'Oxygen Not Included',
        name: 'Oxygen Not Included',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rq7.jpg',
        store: 'steam',
    },
    {
        slug: "Sid Meier's Civilization VI",
        name: "Sid Meier's Civilization VI",
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        store: 'steam',
    },
    {
        slug: 'StarCraft',
        name: 'StarCraft',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7n.jpg',
        store: 'steam',
    },
    {
        slug: 'Diablo III',
        name: 'Diablo III',
        cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gbk.jpg',
        store: 'steam',
    },
];
