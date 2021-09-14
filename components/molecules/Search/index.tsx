import React, { FunctionComponent, useState, useCallback } from 'react';
import styled from '@emotion/styled';

import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/Checkbox';
import Skeletons from 'components/molecules/Skeleton';
import GameSearchResult from 'components/molecules/GameSearchResult';

import useSWRInfinite from 'swr/infinite';
import { GAME_GET_SIZE } from 'constant';

import InfiniteScroll from 'react-infinite-scroll-component';
import Message from 'components/atoms/Message';

import fetcher from 'utils/fetcher';

const Search: FunctionComponent = () => {
    const [input, setInput] = useState<string>('');
    const [filtered, setFiltered] = useState<boolean>(false);
    const [btnclicked, setBtnClicked] = useState<boolean>(false);

    const { data, size, setSize } = useSWRInfinite(
        btnclicked
            ? (pageIndex) => `/games?page=${pageIndex}&size=${GAME_GET_SIZE}&search=${input}`
            : null,
        fetcher
    );

    const fetchData = () => {
        setSize(size + 1);
    };

    const isEndofData = (data && !data[data.length - 1].isLast) || true;
    const isReacingEnd = data && data[data.length - 1].numberOfElements < 10;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.preventDefault();
            setBtnClicked(true);
        },
        [input]
    );

    const handleCheck = () => {
        setFiltered(!filtered);
    };

    return (
        <>
            <StyledSearchWrapper>
                <SearchInputWrapper>
                    <StyledSearchInput
                        value={input}
                        onChange={handleChange}
                        placeholder="검색어를 입력하세요"
                    />
                    <Button onClick={handleClick} category="primary">
                        검색
                    </Button>
                </SearchInputWrapper>
                <CheckBox onClick={handleCheck}>내 라이브러리에서 검색</CheckBox>
                {btnclicked && !data && <Skeletons multiple />}
                {data && (
                    <InfiniteScroll
                        scrollableTarget="scrollableDiv"
                        dataLength={data.length}
                        next={fetchData}
                        hasMore={!isReacingEnd || !isEndofData}
                        loader={<Skeletons />}
                        scrollThreshold={0.9}
                        endMessage={
                            data[0].size !== 0 && (
                                <Message message="더 이상 검색 결과가 없습니다." />
                            )
                        }
                    >
                        {data.length > 0 &&
                            data.map((games) => (
                                <GameSearchResult key={games.games[0]?.slug} games={games.games} />
                            ))}
                    </InfiniteScroll>
                )}
            </StyledSearchWrapper>
        </>
    );
};

export default Search;

const StyledSearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    > label {
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
    }
`;

const SearchInputWrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 888px;
    height: 64px;
    border-radius: 18px;
    padding: 0px 10px;
    background-color: ${({ theme }) => theme.bgColors.inputField};
`;

const StyledSearchInput = styled.input`
    margin-left: 10px;
    width: 85%;
    font-size: 32px;
    border: none;
    background: transparent;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${({ theme }) => theme.components.searchInput};
    ::placeholder {
        color: ${({ theme }) => theme.components.searchInput};
    }
    :focus {
        outline: none;
    }
`;
