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
            callback?.();
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
