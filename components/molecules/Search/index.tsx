import React, { FunctionComponent, useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/Checkbox';
import Skeletons from 'components/molecules/Skeleton';
import GameSearchResult from 'components/molecules/GameSearchResult';

import { gameAPI } from 'api/api';
import { SimpleGameInfo } from 'types/responseInterface';
import { GAME_GET_SIZE } from 'constant';

import InfiniteScroll from 'react-infinite-scroll-component';
import Message from 'components/atoms/Message';

import useSearchGame from 'api/game';

const Search: FunctionComponent = () => {
    const [input, setInput] = useState<string>('');
    const [filtered, setFiltered] = useState<boolean>(false);
    // const [searchResult, setSearchResult] = useState([] as SimpleGameInfo[]);
    // const [hasMoreData, setHasMoreData] = useState<boolean>(true);
    // const page = useRef(0);
    const [btnclicked, setBtnClicked] = useState<boolean>(false);

    const { data, isLoading, isError } = useSearchGame(btnclicked, input, 0, 10);

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

    // const fetchMoreData = async () => {
    //     try {
    //         console.log('fetching more datas...');
    //         setLoading(true);

    //         const response = await gameAPI.getGames(Number(page), GAME_GET_SIZE, input);
    //         const responseData = await response.data;

    //         console.log(responseData.games);
    //         setSearchResult([...searchResult, ...responseData.games]);
    //         setHasMoreData(responseData.length === GAME_GET_SIZE);
    //         console.log('more data loading...', hasMoreData);
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //         page.current += GAME_GET_SIZE;
    //         console.log('next page will be', page);
    //     }
    // };

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
                <SearchResultWrapper>
                    {btnclicked && isLoading && <Skeletons />}
                    {data && <GameSearchResult games={data.games} />}
                </SearchResultWrapper>

                {/* 아래는 인피니트 스크롤 실패. */}
                {/* {loading && searchResult.length === 0 && <Skeletons />}
                {searchResult.length > 0 && (
                    <InfiniteScroll
                        dataLength={10}
                        next={() => console.log('next!!')}
                        hasMore={hasMoreData}
                        loader={loading && <Skeletons />}
                        endMessage={
                            !hasMoreData && <Message message="더 이상 검색 결과가 없습니다." />
                        }
                    >
                        <GameSearchResult games={searchResult} />
                    </InfiniteScroll>
                )} */}
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

const SearchResultWrapper = styled.div``;
