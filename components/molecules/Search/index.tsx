import React, { FunctionComponent, useState, useCallback } from 'react';
import styled from '@emotion/styled';

import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/Checkbox';
import Skeletons from 'components/molecules/Skeleton';
import GameSearchResult from 'components/molecules/GameSearchResult';

import { gameAPI } from 'api/api';
import { SimpleGameInfo } from 'types/responseInterface';

const Search: FunctionComponent = () => {
    const [input, setInput] = useState<string>('');
    const [filtered, setFiltered] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchResult, setSearchResult] = useState([] as SimpleGameInfo[]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                setIsLoading(true);

                const response = await gameAPI.getGames(input);
                const responseData = await response.data;

                console.log(responseData.games);
                setSearchResult(responseData.games);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
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
                <SearchResultWrapper>
                    {isLoading && <Skeletons />}
                    {searchResult.length > 0 && <GameSearchResult games={searchResult} />}
                </SearchResultWrapper>
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
