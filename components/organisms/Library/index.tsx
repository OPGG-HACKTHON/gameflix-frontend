import React, { FunctionComponent } from 'react';
import { GameInfo } from 'types/responseInterface';
import styled from '@emotion/styled';
import ImageSlider from 'components/molecules/ImageSlider';

type LibraryProps = {
    label: string;
    list: GameInfo[];
};

const Library: FunctionComponent<LibraryProps> = (props) => {
    const { label, list } = props;
    return (
        <StyledWrapper>
            <StyledHeader>{`당신의 ${label} 게임 라이브러리`}</StyledHeader>
            <ImageSlider list={list} />
        </StyledWrapper>
    );
};

export default Library;

const StyledWrapper = styled.section`
    padding: 80px;
    width: 100vw;
    margin: 0;
`;
const StyledHeader = styled.h2`
    color: ${({ theme }) => theme.colors.default};
    margin-bottom: 29px;
`;
