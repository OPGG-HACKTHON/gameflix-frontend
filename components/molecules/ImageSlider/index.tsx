import React, { FunctionComponent } from 'react';
import GameImage from 'components/atoms/GameImage';
import styled from '@emotion/styled';

export type GameImageType = {
    id: string;
    src: string;
};

export type ImageSliderProps = {
    list: GameImageType[];
    onClick: (id: string) => React.MouseEventHandler<HTMLAnchorElement>;
};

const ImageSlider: FunctionComponent<ImageSliderProps> = (props) => {
    const { list, onClick } = props;
    return (
        <ImageContainer>
            {list.map(({ id, src }) => (
                <li key={id}>
                    <GameImage src={src} onClick={onClick(id)} />
                </li>
            ))}
        </ImageContainer>
    );
};

export default ImageSlider;

const ImageContainer = styled.ul`
    display: flex;
    list-style: none;
    width: 1200px;
    overflow: scroll;
    gap: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
