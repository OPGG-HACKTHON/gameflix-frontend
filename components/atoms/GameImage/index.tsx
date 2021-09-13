import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type GameImageProps = {
    src: string;
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const GameImage: FunctionComponent<GameImageProps> = (props) => {
    const { src, onClick } = props;
    return (
        <StyledAnchor onClick={onClick}>
            <StyledImg src={src} />
        </StyledAnchor>
    );
};

export default GameImage;

const StyledAnchor = styled.a``;

const StyledImg = styled.img``;
