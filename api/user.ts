import { END_POINT } from '../constant';
import axios, { AxiosResponse } from 'axios';
import { UserInfo } from 'types/responseInterface';

export const postUser = async (): Promise<AxiosResponse<UserInfo> | undefined> => {
    const token = window.localStorage.getItem('token');
    if (!token) {
        return;
    }
    const res = await axios.post(
        `${END_POINT}/users`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data;
};
