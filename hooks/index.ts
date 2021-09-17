import { useContext, useEffect } from 'react';
import UserContext from 'context/user';
import axios from 'axios';
import { END_POINT } from '../constant';

export const useSteamLogin = (callback?: () => void) => {
    const { user } = useContext(UserContext);
    const handleLogin = () => {
        window.open('/api/auth/steam', '_blank', 'width=800, height=600');
    };
    useEffect(() => {
        if (!user) {
            return;
        }
        const listener = async (event: MessageEvent) => {
            const { userId, store } = event.data;
            const token = window.localStorage.getItem('token');
            if (!userId || store !== 'steam') {
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
            callback?.();
        };
        window.addEventListener('message', listener);
        return () => {
            window.removeEventListener('message', listener);
        };
    }, [user]);
    return handleLogin;
};

export const useBlizzardLogin = (callback?: () => void) => {
    const { user } = useContext(UserContext);
    const handleLogin = () => {
        window.open(
            `https://kr.battle.net/login/en/?ref=https://kr.battle.net/oauth/authorize?client_id%3D9826e228ca7a45dea91f7f04652bbea3%26response_type%3Dcode%26redirect_uri%3Dhttps://www.gameflix.link/auth/blizzard/%26scope%3Dwow.profile%2520sc2.profile%2520d3.profile&app=oauth`,
            '_blank',
            'width=800, height=600'
        );
    };

    useEffect(() => {
        if (!user) {
            return;
        }
        const listener = async (event: MessageEvent) => {
            const { accessToken, store } = event.data;
            const token = window.localStorage.getItem('token');
            if (!accessToken || store !== 'blizzard') {
                return;
            }

            await axios.post(
                `${END_POINT}/users/${user.id}/stores`,
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
            callback?.();
        };

        window.addEventListener('message', listener);

        return () => {
            window.removeEventListener('message', listener);
        };
    }, [user, callback]);

    return handleLogin;
};
