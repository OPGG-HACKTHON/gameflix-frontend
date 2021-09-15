import React, { FunctionComponent, useCallback } from 'react';
import GameImage from 'components/atoms/GameImage';
import styled from '@emotion/styled';
import { GameInfo } from 'types/responseInterface';
export type ImageSliderProps = {
    list: GameInfo[];
    onClick?: (id: string) => React.MouseEventHandler<HTMLAnchorElement>;
};

const ImageSlider: FunctionComponent<ImageSliderProps> = (props) => {
    const { list, onClick } = props;
    const handleClick = useCallback(
        (slug: string): React.MouseEventHandler<HTMLAnchorElement> =>
            () => {
                onClick?.(slug);
            },
        [onClick]
    );
    return (
        <ImageContainer>
            {list.length === 0 ? (
                <EmptyList>
                    <span>라이브러리가 비어 있습니다.</span>
                </EmptyList>
            ) : (
                list.map(({ slug, cover }) => (
                    <li key={slug}>
                        <GameImage src={cover} onClick={handleClick(slug)} />
                    </li>
                ))
            )}
        </ImageContainer>
    );
};

export default ImageSlider;

const ImageContainer = styled.ul`
    display: flex;
    list-style: none;
    width: 1700px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: scroll;
    gap: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const EmptyList = styled.li`
    width: 100%;
    height: 368px;
    color: ${({ theme }) => theme.colors.default};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.borderColors.secondary.default};
    border-radius: 10px;
    box-sizing: border-box;
    span {
        font-size: 24px;
    }
`;
