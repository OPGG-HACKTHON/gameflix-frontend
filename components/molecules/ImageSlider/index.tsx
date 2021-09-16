import React, { FunctionComponent, useCallback } from 'react';
import GameImage from 'components/atoms/GameImage';
import styled from '@emotion/styled';
import { SimpleGameInfo } from 'types/responseInterface';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export type ImageSliderProps = {
    list?: SimpleGameInfo[];
    onClick?: (id: string) => React.MouseEventHandler<HTMLAnchorElement>;
    loading?: boolean;
};

const ImageSlider: FunctionComponent<ImageSliderProps> = (props) => {
    const { list, loading } = props;
    return (
        <SkeletonTheme color="rgba(196,196,196,0.5)">
            <ImageContainer>
                {loading ? (
                    <li>
                        <ImageSkeleton />
                    </li>
                ) : !list || list.length === 0 ? (
                    <EmptyList>
                        <span>라이브러리가 비어 있습니다.</span>
                    </EmptyList>
                ) : (
                    list.map((gameInfo) => (
                        <li key={gameInfo.slug}>
                            <GameImage game={gameInfo} />
                        </li>
                    ))
                )}
            </ImageContainer>
        </SkeletonTheme>
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
    gap: 20px;
    overflow: hidden;
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

const ImageSkeleton = styled(Skeleton)`
    min-width: 264px;
    min-height: 352px;
`;
