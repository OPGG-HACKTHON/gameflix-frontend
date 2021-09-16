import React, { FunctionComponent, useCallback, useContext, useState } from 'react';
import Library from 'components/organisms/Library';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import UserContext from 'context/user';
import { GameResponse } from 'types/responseInterface';
import { useSteamLogin } from '../../../hooks';
import Modal from 'components/molecules/Modal';
import Search from 'components/molecules/Search';

import { useBlizzardLogin } from 'hooks';

const Libraries: FunctionComponent = () => {
    const { user } = useContext(UserContext);
    const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);

    const { data: steamData, mutate: steamMutate } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/steam/games?size=6` : null),
        fetcher
    );
    const steamCallback = useCallback(() => {
        steamMutate(fetcher(`/users/${user?.id}/stores/steam/games?size=6`));
    }, [user]);
    const handleSteamLoad = useSteamLogin(steamCallback);

    const { data: battleNetData, mutate: battleNetMutate } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/blizzard/games?size=6` : null),
        fetcher
    );
    const battlenetCallback = useCallback(() => {
        battleNetMutate(fetcher(`/users/${user?.id}/stores/blizzard/games?size=6`));
    }, [user]);
    const handleBlizzardLogin = useBlizzardLogin(battlenetCallback);

    const { data: etcData, mutate: etcMutate } = useSWR<GameResponse>(
        () => (user ? `/users/${user.id}/stores/etc/games?size=6` : null),
        fetcher
    );
    const handleClose = useCallback(() => {
        setIsOpenSearchModal(false);
        etcMutate(fetcher(`/users/${user?.id}/stores/etc/games?size=6`));
    }, [user, etcMutate]);
    const { data: allData } = useSWR<GameResponse>(`/games?size=6`, fetcher);

    return (
        <>
            <Library
                store={'steam'}
                list={steamData?.games}
                onLoad={handleSteamLoad}
                numberOfElements={steamData?.totalElements}
                loading={!steamData}
            />
            <Library
                store={'blizzard'}
                list={battleNetData?.games}
                onLoad={handleBlizzardLogin}
                numberOfElements={battleNetData?.totalElements}
                loading={!battleNetData}
            />
            <Library
                store={'etc'}
                list={etcData?.games}
                onLoad={() => setIsOpenSearchModal(true)}
                numberOfElements={etcData?.totalElements}
                loading={!etcData}
            />
            <Library
                store={'all'}
                list={allData?.games}
                numberOfElements={allData?.totalElements}
                loading={!allData}
            />
            <Modal isOpen={isOpenSearchModal} onClose={handleClose}>
                <Search />
            </Modal>
        </>
    );
};

export default Libraries;
