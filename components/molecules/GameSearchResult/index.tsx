import React, { FunctionComponent, useCallback, useContext } from 'react';
import { SimpleGameInfo } from 'types/responseInterface';
import Link from 'next/link';

import Button from 'components/atoms/Button';
import Message from 'components/atoms/Message';

import styled from '@emotion/styled';
import axios from 'axios';
import { END_POINT } from '../../../constant';
import UserContext from 'context/user';

type GameSearchResultProps = {
    games: SimpleGameInfo[];
};

const GameSearchResult: FunctionComponent<GameSearchResultProps> = (props) => {
    const { games } = props;
    const { user } = useContext(UserContext);
    const handleClick = useCallback<(slug: string) => React.ReactEventHandler<HTMLButtonElement>>(
        (slug) => async () => {
            if (!user) {
                return;
            }
            const token = window.localStorage.getItem('token');
            await axios.post(
                `${END_POINT}/users/${user.id}/games`,
                {
                    slug,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        },
        []
    );
    return (
        <GameResultContainer>
            {games.length === 0 ? (
                <Message message="검색결과가 없습니다." />
            ) : (
                games.map(({ name, slug, cover, release_at, developer }) => (
                    <>
                        <GameResultSingularWrapper key={slug}>
                            <Link href="/games/[slug]" as={`/games/${slug}`}>
                                <GameImg>
                                    <img src={cover} alt="game image" height="128px" />
                                </GameImg>
                            </Link>
                            <GameInfos>
                                <Link href="/games/[slug]" as={`/games/${slug}`}>
                                    <GameTitle>
                                        {name.length > 40 ? `${name.slice(0, 40)}...` : name}
                                    </GameTitle>
                                </Link>
                                <GameDescription>
                                    {new Date(release_at * 1000).getFullYear()} | {developer}
                                </GameDescription>
                                <div>
                                    {user?.games.every((game) => game.slug !== slug) && (
                                        <Button category="primary" onClick={handleClick(slug)}>
                                            내 라이브러리에 추가
                                        </Button>
                                    )}
                                </div>
                            </GameInfos>
                        </GameResultSingularWrapper>
                        <Contour />
                    </>
                ))
            )}
        </GameResultContainer>
    );
};

export default GameSearchResult;

const GameResultContainer = styled.div`
    width: 888px;
`;

const GameResultSingularWrapper = styled.article`
    display: flex;
    height: 128px;
    max-width: 645px;
    padding: 45px 0;
`;

const GameImg = styled.div`
    cursor: pointer;
`;

const GameInfos = styled.div`
    display: flex;
    margin-left: 21px;
    justify-content: space-between;
    flex-direction: column;
`;

const GameTitle = styled.h2`
    line-height: 46px;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: -10px;
    white-space: nowrap;
    color: ${(props) => props.theme.components.searchInput};
    cursor: pointer;
`;

const GameDescription = styled.h2`
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    color: ${(props) => props.theme.components.searchInput};
`;

const Contour = styled.div`
    width: 912px;
    height: 1px;
    background: #333333;
`;
