import React, { FunctionComponent } from 'react';
import { GameInfo } from 'types/responseInterface';
import styled from '@emotion/styled';
import ImageSlider from 'components/molecules/ImageSlider';
import Button from 'components/atoms/Button';

type LibraryProps = {
    label: string;
    list: GameInfo[];
    onLoad: React.MouseEventHandler<HTMLButtonElement>;
    loadText?: string;
};

const Library: FunctionComponent<LibraryProps> = (props) => {
    const { label, list, loadText = '가져오기', onLoad } = props;
    return (
        <LibraryContainer>
            <LibraryTitle>{`당신의 ${label} 게임 라이브러리`}</LibraryTitle>
            <Button category={'primary'} onClick={onLoad}>
                {loadText}
            </Button>
            <ImageSlider list={list} />
        </LibraryContainer>
    );
};

export default Library;

const LibraryContainer = styled.section`
    padding: 80px;
    width: 100vw;
    margin: 0;
`;
const LibraryTitle = styled.h2`
    color: ${({ theme }) => theme.colors.default};
    margin-right: 19px;
    margin-bottom: 29px;
    height: 46px;
    font-size: 32px;
    line-height: 46px;
`;
