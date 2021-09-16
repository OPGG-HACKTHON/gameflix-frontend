import React, { FunctionComponent, useCallback, useContext, useState } from 'react';
import Library from 'components/organisms/Library';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import UserContext from 'context/user';
import { GameResponse } from 'types/responseInterface';
import { useSteamLogin } from '../../../hooks';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';
import axios from 'axios';

const Libraries: FunctionComponent = () => {
    const { user } = useContext(UserContext);
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
    const { data: steamData, mutate: steamMutate } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/steam/games?size=6` : null),
        fetcher
    );
    const steamCallback = useCallback(() => {
        steamMutate(fetcher(`/users/${user?.id}/stores/steam/games?size=6`));
    }, []);
    const handleSteamLoad = useSteamLogin(steamCallback);
    const { data: battleNetData } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/battlenet/games?size=6` : null),
        fetcher
    );
    const { data: etcData, mutate: etcMutate } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/etc/games?size=6` : null),
        fetcher
    );
    const handleClose = useCallback(() => {
        setIsOpenSearchModal(false);
        etcMutate(fetcher(`/users/${user?.id}/stores/etc/games?size=6`));
    }, [user, etcMutate]);

    return (
        <>
            <Library
                store={'steam'}
                list={steamData?.games}
                onLoad={handleSteamLoad}
                numberOfElements={steamData?.numberOfElements}
                loading={!steamData}
            />
            <Library
                store={'battlenet'}
                list={battleNetData?.games}
                onLoad={() => console.log('battle.net')}
                numberOfElements={battleNetData?.numberOfElements}
                loading={!battleNetData}
            />
            <Library
                store={'etc'}
                list={etcData?.games}
                onLoad={() => setIsOpenSearchModal(true)}
                numberOfElements={etcData?.numberOfElements}
                loading={!etcData}
            />
            <Modal isOpen={isOpenSearchModal} onClose={handleClose}>
                <Search />
            </Modal>
        </>
    );
};

export default Libraries;
