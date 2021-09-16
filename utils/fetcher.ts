import { END_POINT } from '../constant';

const fetcher = (url: string) => {
    const token = window.localStorage.getItem('token');
    const config: { headers?: { Authorization: string } } = {};
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
        };
    }
    return fetch(`${END_POINT}${url}`, config).then((r) => r.json());
};

export default fetcher;
