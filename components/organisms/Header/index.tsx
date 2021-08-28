import React, { FunctionComponent } from 'react';
import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
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
            <Button category="secondary">로그아웃</Button>
        </StyledWrapper>
    );
};

export default Header;

const StyledWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px 0 80px;
    height: 164px;
`;

const StyledHeader = styled.h1`
    margin: 0;
`;
