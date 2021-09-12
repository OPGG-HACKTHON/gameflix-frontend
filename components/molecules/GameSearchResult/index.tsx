import React, { FunctionComponent } from 'react';
import { GameInfoSingluar } from 'types/responseInterface';

import Button from 'components/atoms/Button';
import Message from 'components/atoms/Message';

import styled from '@emotion/styled';

type GameSearchResultProps = {
    games: GameInfoSingluar[];
};

const GameSearchResult: FunctionComponent<GameSearchResultProps> = (props) => {
    const { games } = props;
    return (
        <GameResultContainer>
            {games.length === 0 ? (
                <Message message="검색결과가 없습니다." />
            ) : (
                games.map(({ name, slug, cover }) => (
                    <>
                        <GameResultSingularWrapper key={slug}>
                            <GameImg>
                                <img src={cover} alt="game image" height="128px" />
                            </GameImg>
                            <GameInfos>
                                <GameTitle>{name}</GameTitle>
                                <Button category="primary" fullWidth>
                                    내 라이브러리에 추가
                                </Button>
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

const GameResultContainer = styled.div``;

const GameResultSingularWrapper = styled.article`
    display: flex;
    height: 128px;
    padding: 45px 0;
`;

const GameImg = styled.div``;

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
`;

const Contour = styled.div`
    width: 914px;
    height: 1px;
    background: #333333;
`;
