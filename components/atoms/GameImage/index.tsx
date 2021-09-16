import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { SimpleGameInfo } from 'types/responseInterface';
import Link from 'next/link';

type GameImageProps = {
    game: SimpleGameInfo;
    showName?: boolean;
};

const GameImage: FunctionComponent<GameImageProps> = (props) => {
    const {
        game: { slug, name, cover },
        showName = false,
    } = props;
    return (
        <Link href={`/games/${slug}`}>
            <GameLink>
                <StyledImg src={cover} />
                {showName && (
                    <GameName>{name.length > 27 ? `${name.slice(0, 27)}...` : name}</GameName>
                )}
            </GameLink>
        </Link>
    );
};

export default GameImage;

const StyledImg = styled.img``;

const GameName = styled.p`
    margin: 14px 0 0 0;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.default};
    width: 274px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const GameLink = styled.a`
    cursor: pointer;
`;
