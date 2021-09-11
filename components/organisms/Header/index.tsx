import React, { FunctionComponent } from 'react';

import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import SearchButton from 'components/atoms/SearchButton';
import ThemeSwitch from 'components/atoms/ThemeSwitch';

import styled from '@emotion/styled';
import Link from 'next/link';

const Header: FunctionComponent = () => {
    return (
        <StyledWrapper>
            <StyledHeader>
                <Link href={'/'}>
                    <Logo />
                </Link>
            </StyledHeader>
            {/*Todo 로그아웃 기능 구현*/}
            <StyledPanels>
                <SearchButton />
                <ThemeSwitch />
                <Button category="secondary">로그아웃</Button>
            </StyledPanels>
        </StyledWrapper>
    );
};

export default Header;

const StyledWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px 0 80px;
    height: 164px;
`;

const StyledHeader = styled.h1`
    margin: 0;
`;

const StyledPanels = styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    Button:first-child {
        margin-right: 32px;
    }
    Button {
        margin-left: 32px;
    }
`;
