import React, { FunctionComponent } from 'react';
import { SearchIcon } from './svg';
import styled from '@emotion/styled';

type SearchButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchButton: FunctionComponent<SearchButtonProps> = (props) => {
    const { onClick } = props;

    return (
        <StyledSearchBtn onClick={onClick}>
            <SearchIcon />
        </StyledSearchBtn>
    );
};

export default SearchButton;

const StyledSearchBtn = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    border: none;
    outline: 0;
    background-color: #fff;
    cursor: pointer;
`;
