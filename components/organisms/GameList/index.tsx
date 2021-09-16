import React, {
    FunctionComponent,
    ReactEventHandler,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { STORE_NAME } from '../../../constant';
import styled from '@emotion/styled';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Button from 'components/atoms/Button';
import GameImage from 'components/atoms/GameImage';
import Paginations from 'components/molecules/pagination';
import useSWR from 'swr';
import UserContext from 'context/user';
import fetcher from 'utils/fetcher';
import { useSteamLogin, useBlizzardLogin } from 'hooks/';
import { useRouter } from 'next/router';
import { GameResponse } from 'types/responseInterface';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';

type GameListProps = {
    store: keyof typeof STORE_NAME;
};

const DEFAULT_SIZE = 24;

const GameList: FunctionComponent<GameListProps> = (props) => {
    const { store } = props;

    const { user } = useContext(UserContext);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
    const router = useRouter();
    const handleSteamLogin = useSteamLogin();
    const handleBlizzardLogin = useBlizzardLogin();

    const { id: userId } = user || {};

    const { data, error } = useSWR<GameResponse>(
        () =>
            userId && store && pageIndex
                ? `/users/${userId}/stores/${store}/games?page=${
                      pageIndex - 1
                  }&size=${DEFAULT_SIZE}`
                : null,
        fetcher
    );

    const handleLoadClick = useMemo(() => {
        switch (store) {
            case 'steam':
                return handleSteamLogin;
            case 'blizzard':
                return handleBlizzardLogin;
            case 'etc':
                return () => setIsOpenSearchModal(true);
        }
    }, [store, handleSteamLogin, setIsOpenSearchModal]);

    if (error) {
        router.push('/login');
    }

    if (!data || error) {
        return (
            <>
                <ListContainer>
                    <ListTitle>당신의 {STORE_NAME[store]}게임 라이브러리</ListTitle>
                    <SkeletonTheme color="rgba(196,196,196,0.5)">
                        <ImageSkeleton />
                        <ImageSkeleton />
                        <ImageSkeleton />
                        <ImageSkeleton />
                        <ImageSkeleton />
                        <ImageSkeleton />
                    </SkeletonTheme>
                </ListContainer>
            </>
        );
    }

    return (
        <>
            <ListContainer>
                <ListTitle>
                    당신의 {STORE_NAME[store]}게임 라이브러리
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
            <Paginations
                currentPage={pageIndex}
                totalCount={data.totalElements}
                pageSize={DEFAULT_SIZE}
                onPageChange={setPageIndex}
            />
            <Modal isOpen={isOpenSearchModal} onClose={() => setIsOpenSearchModal(false)}>
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

const ImageSkeleton = styled(Skeleton)`
    max-width: 276px;
    min-height: 368px;
    margin: 0 8px;
`;
