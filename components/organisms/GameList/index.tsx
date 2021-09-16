import React, {
    FunctionComponent,
    ReactEventHandler,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { PAGE_SIZE, STORE_NAME } from '../../../constant';
import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import GameImage from 'components/atoms/GameImage';
import useSWR, { useSWRConfig } from 'swr';
import UserContext from 'context/user';
import fetcher from 'utils/fetcher';
import { useSteamLogin } from '../../../hooks';
import { useRouter } from 'next/router';
import { GameResponse, Pagination, SimpleGameInfo } from 'types/responseInterface';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';

type GameListProps = {
    store: keyof typeof STORE_NAME;
};

const GameList: FunctionComponent<GameListProps> = (props) => {
    const { store } = props;
    const { user } = useContext(UserContext);
    const { id: userId } = user || {};
    const router = useRouter();
    const { page = 1 } = router.query;
    const { mutate } = useSWRConfig();
    const url = useMemo(() => {
        if (store === 'all') {
            return `/games?page=${page}&size=${PAGE_SIZE}`;
        } else if (userId && store && page) {
            return `/users/${userId}/stores/${store}/games?page=${page}&size=${PAGE_SIZE}`;
        }
        return null;
    }, [userId, store, page]);
    const { data, error } = useSWR<GameResponse>(url, fetcher);
    const handleSteamLogin = useSteamLogin();
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
    const handleLoadClick = useMemo(() => {
        switch (store) {
            case 'steam':
                return handleSteamLogin;
            case 'etc':
                return () => setIsOpenSearchModal(true);
        }
    }, [store, handleSteamLogin, setIsOpenSearchModal]);
    const handleClose = useCallback(async () => {
        setIsOpenSearchModal(false);
        if (store === 'etc') {
            await mutate(
                `/users/${user?.id}/stores/etc/games?page=${page}&size=${PAGE_SIZE}`,
                fetcher(`/users/${user?.id}/stores/etc/games?page=${page}&size=${PAGE_SIZE}`)
            );
        }
    }, [user]);
    if (error) {
        router.push('/login');
    }
    if (!data || error) {
        return <div>loading...</div>;
    }
    return (
        <>
            <ListContainer>
                <ListTitle>
                    {store !== 'all' && '당신의 '}
                    {STORE_NAME[store]}게임 라이브러리
                    <Button category={'primary'} onClick={handleLoadClick}>
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
            <Modal isOpen={isOpenSearchModal} onClose={handleClose}>
                <Search />
            </Modal>
        </>
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
    width: 1750px;
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
