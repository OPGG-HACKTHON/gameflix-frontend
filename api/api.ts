import axios from 'axios';
import { GameSlug, UserInfo, UserGames } from 'types/responseInterface';

const END_POINT = 'http://localhost:8080';

const getRequest = async <T>(url: string): Promise<T | void> => {
    try {
        const response = (await axios.get(url)) as T;
        console.log(response);
        return response;
    } catch (e) {
        console.error(e.response);
        // return e.response;
    }
};

const deleteRequest = async (url: string): Promise<void> => {
    try {
        const response = await axios.delete(url);
        console.log(response);
        // return response;
    } catch (e) {
        console.error(e);
    }
};

const postRequest = async <T>(url: string, body: any): Promise<T> => {
    try {
        const response = (await axios.post(url, body)) as T;
        console.log(response);
        return response;
    } catch (e) {
        console.error(e);
        return e;
    }
};

export const userAPI = {
    getUserInfo: async (userId: string): Promise<UserInfo> => {
        const userInfo = (await getRequest<UserInfo>(`${END_POINT}/users/${userId}`)) as UserInfo;
        return userInfo;
    },

    getUserGamesList: async (userId: string): Promise<UserGames> => {
        const userGamesList = (await getRequest<UserGames>(
            `${END_POINT}/users/${userId}/games`
        )) as UserGames;
        return userGamesList;
    },

    getUserGameSlug: async (userId: string, slug: string): Promise<GameSlug> => {
        const userGameSlug = (await getRequest<GameSlug>(
            `${END_POINT}/users/${userId}/games/${slug}`
        )) as GameSlug;
        return userGameSlug;
    },

    postUserGame: async (userId: string, gameObj: { name: string }): Promise<GameSlug> => {
        const postResponse = await postRequest<GameSlug>(`${END_POINT}/users/${userId}`, gameObj);
        return postResponse;
    },

    deleteUser: async (userId: string): Promise<void> => {
        await deleteRequest(`${END_POINT}/users/${userId}`);
    },

    deleteUserGame: async (userId: string, slug: string): Promise<void> => {
        await deleteRequest(`${END_POINT}/users/${userId}/games/${slug}`);
    },
};
