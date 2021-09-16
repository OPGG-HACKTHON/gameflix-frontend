import React, { FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';

import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import SearchButton from 'components/atoms/SearchButton';
import ThemeSwitch from 'components/atoms/ThemeSwitch';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';

import styled from '@emotion/styled';
import Link from 'next/link';
import { postUser } from 'api/user';
import { useRouter } from 'next/router';
import UserContext from 'context/user';
import fetcher from 'utils/fetcher';
import { useSWRConfig } from 'swr';

const Header: FunctionComponent = () => {
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
    const { mutate } = useSWRConfig();
    const router = useRouter();
    console.log(router.pathname);
    const { user, setUser } = useContext(UserContext);
    const getCurrentUser = useCallback(async () => {
        try {
            const res = await postUser();
            if (!res) {
                router.push('/login');
                return;
            }
            setUser?.(res);
        } catch (e) {
            router.push('/login');
        }
    }, []);
    const handleClickLogout = useCallback(() => {
        window.localStorage.removeItem('token');
        router.push('/login');
    }, []);
    useEffect(() => {
        getCurrentUser();
    }, [getCurrentUser]);
    const handleClose = useCallback(async () => {
        setIsOpenSearchModal(false);
        if (router.pathname === '/') {
            await mutate(
                `/users/${user?.id}/stores/etc/games?size=6`,
                fetcher(`/users/${user?.id}/stores/etc/games?size=6`)
            );
        } else if (router.pathname === '/[store]' && router.query.store === 'etc') {
            const page = router.query.page;
            await mutate(
                `/users/${user?.id}/stores/etc/games?page=${page}`,
                fetcher(`/users/${user?.id}/stores/etc/games?page=${page}`)
            );
        }
    }, [user, router]);

    return (
        <>
            <StyledWrapper>
                <StyledHeader>
                    <Link href={'/'}>
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </StyledHeader>
                <StyledPanels>
                    <SearchButton onClick={() => setIsOpenSearchModal(true)} />
                    <ThemeSwitch />
                    <Button category="secondary" onClick={handleClickLogout}>
                        로그아웃
                    </Button>
                </StyledPanels>
            </StyledWrapper>
            <Modal isOpen={isOpenSearchModal} onClose={handleClose}>
                <Search />
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
    width: 1920px;
    box-sizing: border-box;
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
