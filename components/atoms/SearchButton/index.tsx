import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Icon from 'components/atoms/Icon/Icon';

type SearchButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchButton: FunctionComponent<SearchButtonProps> = (props) => {
    const { onClick } = props;

    return (
        <StyledSearchBtn onClick={onClick}>
            <Icon name="Magnifier" />
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
