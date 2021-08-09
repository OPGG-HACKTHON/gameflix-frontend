import axios, { AxiosResponse } from 'axios';
import { GameInfo, UserInfo, UserGames } from 'types/responseInterface';

const END_POINT = 'http://localhost:8080';

const getRequest = <T>(url: string) => {
    try {
        return axios.get<T>(`${END_POINT}/${url}`);
    } catch (e) {
        console.error(e);
        return e;
    }
};

const deleteRequest = (url: string) => {
    try {
        const response = axios.delete(`${END_POINT}/${url}`);
        console.log(response);
        return response;
    } catch (e) {
        console.error(e);
    }
};

const postRequest = <T>(url: string, body: any) => {
    try {
        const response = axios.post<T>(`${END_POINT}/${url}`, body);
        return response;
    } catch (e) {
        console.error(e);
        return e;
    }
};

export const userAPI = {
    getUserInfo: async (userId: string): Promise<UserInfo> => {
        const userInfo = await getRequest<UserInfo>(`/users/${userId}`);
        return userInfo;
    },

    getUserGamesList: async (userId: string): Promise<UserGames> => {
        const userGamesList = (await getRequest<UserGames>(`/users/${userId}/games`)) as UserGames;
        return userGamesList;
    },

    getUserGameSlug: async (userId: string, slug: string): Promise<GameInfo> => {
        const userGameSlug = (await getRequest<GameInfo>(
            `/users/${userId}/games/${slug}`
        )) as GameInfo;
        return userGameSlug;
    },

    postUserGame: async (userId: string, gameObj: { name: string }): Promise<GameInfo> => {
        const postResponse = await postRequest<GameInfo>(`/users/${userId}`, gameObj);
        return postResponse;
    },

    deleteUser: async (userId: string): Promise<AxiosResponse<any> | undefined> => {
        return await deleteRequest(`/users/${userId}`);
    },

    deleteUserGame: async (
        userId: string,
        slug: string
    ): Promise<AxiosResponse<any> | undefined> => {
        return await deleteRequest(`/users/${userId}/games/${slug}`);
    },
};
