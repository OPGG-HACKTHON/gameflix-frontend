import { useContext, useEffect } from 'react';
import UserContext from 'context/user';
import { useSWRConfig } from 'swr';
import axios from 'axios';
import { SimpleGameInfo } from 'types/responseInterface';
import { END_POINT } from '../constant';

export const useSteamLogin = () => {
    const { user } = useContext(UserContext);
    const { mutate } = useSWRConfig();
    const handleLogin = () => {
        window.open('http://localhost:3000/api/auth/steam', '_blank', 'width=800, height=600');
    };
    useEffect(() => {
        if (!user) {
            return;
        }
        const listener = async (event: MessageEvent) => {
            const { userId } = event.data;
            console.log(userId);
            const token = window.localStorage.getItem('token');
            if (!userId) {
                return;
            }
            await axios.post(
                `${END_POINT}/users/${user.id}/stores`,
                {
                    slug: 'steam',
                    authentication: userId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            mutate(`/users/${user.id}/stores/steam`);
        };
        window.addEventListener('message', listener);
        return () => {
            window.removeEventListener('message', listener);
        };
    }, [user]);
    return handleLogin;
};

export const useGOGLogin = () => {
    const { user } = useContext(UserContext);
    const { mutate } = useSWRConfig();
    const handleLogin = () => {
        window.open(
            'https://auth.gog.com/auth?client_id=46899977096215655&redirect_uri=https%3A%2F%2Fembed.gog.com%2Fon_login_success%3Forigin%3Dclient&response_type=code&layout=client2',
            '_blank',
            'width=800, height=600'
        );
    };
    useEffect(() => {
        if (!user) {
            return;
        }
        const listener = async (event: MessageEvent) => {
            const { userId } = event.data;
            const token = window.localStorage.getItem('token');
            if (!userId) {
                return;
            }
            const res = await axios.post(
                `${END_POINT}/users/${user.id}/stores`,
                {
                    slug: 'steam',
                    authentication: userId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            mutate(`/users/${user.id}/stores/steam`);
        };
        window.addEventListener('message', listener);
        return () => {
            window.removeEventListener('message', listener);
        };
    }, [user]);
    return handleLogin;
};

export const useBlizzardLogin = (
    onSetMyBlizzard: React.Dispatch<React.SetStateAction<SimpleGameInfo[]>>
) => {
    const { mutate } = useSWRConfig();

    const handleLogin = () => {
        window.open(
            'https://kr.battle.net/login/en/?ref=https://kr.battle.net/oauth/authorize?client_id%3Dbdd7aad97d4e4e768f45a2af2830dfd5%26response_type%3Dcode%26redirect_uri%3Dhttp://localhost:3000/auth/blizzard/%26scope%3Dwow.profile%2520sc2.profile%2520d3.profile&app=oauth',
            '_blank',
            'width=800, height=600'
        );
    };

    useEffect(() => {
        const listener = async (event: MessageEvent) => {
            const { accessToken, userId } = event.data;
            const token = window.localStorage.getItem('token');
            if (!accessToken || !userId) {
                return;
            }

            const res = await axios.post(
                `${END_POINT}/users/${userId}/stores`,
                {
                    slug: 'blizzard',
                    authentication: accessToken,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res.data);
            onSetMyBlizzard(res.data.games);
            mutate(`/users/${userId}/stores/blizzard/games`);
        };

        window.addEventListener('message', listener);

        return () => {
            window.removeEventListener('message', listener);
        };
    }, []);

    return handleLogin;
};
