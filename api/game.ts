import useSWR from 'swr';

import fetcher from 'utils/fetcher';

const useSearchGame = (btnclicked: boolean, input: string, page?: number, size?: number) => {
    const { data, error } = useSWR(
        btnclicked ? `/games?page=${page}&size=${size}&search=${input}` : null,
        fetcher
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useSearchGame;
