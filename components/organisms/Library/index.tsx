import React, { FunctionComponent } from 'react';
import { SimpleGameInfo } from 'types/responseInterface';
import styled from '@emotion/styled';
import ImageSlider from 'components/molecules/ImageSlider';
import Button from 'components/atoms/Button';
import Link from 'next/link';
import { STORE_NAME } from '../../../constant';

type LibraryProps = {
    store: keyof typeof STORE_NAME;
    list?: SimpleGameInfo[];
    numberOfElements?: number;
    onLoad: React.MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
};

const Library: FunctionComponent<LibraryProps> = (props) => {
    const { store, list, onLoad, numberOfElements, loading } = props;
    return (
        <LibraryContainer>
            <LibraryHeader>
                <Link href={`/${store}`}>
                    <LibraryTitle>{`당신의 ${STORE_NAME[store]} 게임 라이브러리`}</LibraryTitle>
                </Link>
                <Button category={'primary'} onClick={onLoad}>
                    {store === 'etc' ? '추가하기' : '가져오기'}
                </Button>
                {numberOfElements !== 0 && (
                    <LabelWrapper>
                        <Link href={`/${store}`}>
                            <AllListLabel>{numberOfElements}개 모두 보기 &gt;</AllListLabel>
                        </Link>
                    </LabelWrapper>
                )}
            </LibraryHeader>
            <ImageSlider list={list} loading={loading} />
        </LibraryContainer>
    );
};

export default Library;

const LibraryContainer = styled.section`
    padding: 80px 80px 0 80px;
    width: 1920px;
    box-sizing: border-box;
    margin: 0;
    white-space: nowrap;
`;

const LibraryHeader = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 29px;
`;

const LibraryTitle = styled.a`
    color: ${({ theme }) => theme.colors.default};
    margin-right: 16px;
    font-size: 32px;
    cursor: pointer;
    // line-height: 0px;
`;

const LabelWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
`;

const AllListLabel = styled.a`
    font-size: 20px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.secondary.hover};
    cursor: pointer;
`;
