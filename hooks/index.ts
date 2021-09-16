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
