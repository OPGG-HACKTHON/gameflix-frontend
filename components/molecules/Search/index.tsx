import React, { FunctionComponent } from 'react';
import Button from 'components/atoms/Button';
import styled from '@emotion/styled';

type SearchProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Search: FunctionComponent<SearchProps> = (props) => {
    const { onClick } = props;
    return (
        <SearchInputWrapper>
            <StyledSearchInput placeholder="검색어를 입력하세요" />
            <Button onClick={onClick} category="primary">
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
    border-radius: 10px;
    padding: 0px 10px;
    background-color: ${({ theme }) => theme.bgColors.inputField};
`;

const StyledSearchInput = styled.input`
    margin-left: 10px;
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
