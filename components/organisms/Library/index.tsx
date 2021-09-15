import React, { FunctionComponent } from 'react';
import { SimpleGameInfo } from 'types/responseInterface';
import styled from '@emotion/styled';
import ImageSlider from 'components/molecules/ImageSlider';
import Button from 'components/atoms/Button';

type LibraryProps = {
    label: string;
    list: SimpleGameInfo[];
    onLoad: React.MouseEventHandler<HTMLButtonElement>;
    loadText?: string;
};

const Library: FunctionComponent<LibraryProps> = (props) => {
    const { label, list, loadText = '가져오기', onLoad } = props;
    return (
        <LibraryContainer>
            <LibraryHeader>
                <LibraryTitle>{`당신의 ${label} 게임 라이브러리`}</LibraryTitle>
                <Button category={'primary'} onClick={onLoad}>
                    {loadText}
                </Button>
            </LibraryHeader>
            <ImageSlider list={list} />
        </LibraryContainer>
    );
};

export default Library;

const LibraryContainer = styled.section`
    padding: 80px 0 0 80px;
    width: 100vw;
    margin: 0;
    white-space: nowrap;
`;

const LibraryHeader = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 29px;
`;

const LibraryTitle = styled.h2`
    color: ${({ theme }) => theme.colors.default};
    margin-right: 16px;
    font-size: 32px;
    // line-height: 0px;
`;
