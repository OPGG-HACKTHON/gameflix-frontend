import useSWR from 'swr';

import { END_POINT } from 'constant';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const useSearchGame = (btnclicked: boolean, input: string, page?: number, size?: number) => {
    const { data, error } = useSWR(
        btnclicked ? `${END_POINT}/games?page=${page}&size=${size}&search=${input}` : null,
        fetcher
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useSearchGame;
