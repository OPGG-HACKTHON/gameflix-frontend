import React, { FunctionComponent, useState, useCallback } from 'react';
import Button from 'components/atoms/Button';
import styled from '@emotion/styled';

type SearchProps = {
    onClick: (input: string) => React.MouseEventHandler<HTMLButtonElement>;
};

const Search: FunctionComponent<SearchProps> = (props) => {
    const { onClick } = props;
    const [input, setInput] = useState<string>('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.preventDefault();
            onClick(input);
        },
        [input]
    );

    return (
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
    );
};

export default Search;

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 920px;
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