import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import Error from 'next/error';
import HomeTemplate from 'components/templates/Home';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import GameDetail from 'components/organisms/GameDetail';
import GameDetailSkeleton from 'components/organisms/GameDetailSkeleton';
import { GameInfo } from 'types/responseInterface';

const Game: FunctionComponent = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR<GameInfo>(`/games/${slug}`, fetcher);
    if (error) {
        return <Error statusCode={404} />;
    }
    if (!data) {
        return (
            <HomeTemplate header={<Header />} footer={<Footer />}>
                <GameDetailSkeleton />
            </HomeTemplate>
        );
    }
    return (
        <HomeTemplate header={<Header />} footer={<Footer />}>
            <GameDetail {...data} />
        </HomeTemplate>
    );
};

export default Game;
