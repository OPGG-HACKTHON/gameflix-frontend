import React, { FunctionComponent, useState } from 'react';

import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import SearchButton from 'components/atoms/SearchButton';
import ThemeSwitch from 'components/atoms/ThemeSwitch';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';

import styled from '@emotion/styled';
import Link from 'next/link';

const Header: FunctionComponent = () => {
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);

    const onClick = (input: string) => {
        console.log(input);
    };

    return (
        <>
            <StyledWrapper>
                <StyledHeader>
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                </StyledHeader>
                {/*Todo 로그아웃 기능 구현*/}
                <StyledPanels>
                    <SearchButton onClick={() => setIsOpenSearchModal(true)} />
                    <ThemeSwitch />
                    <Button category="secondary">로그아웃</Button>
                </StyledPanels>
            </StyledWrapper>
            <Modal isOpen={isOpenSearchModal} onClose={() => setIsOpenSearchModal(false)}>
                <Search onClick={onClick} />
            </Modal>
        </>
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
    gap: 32px;
`;
