import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { STORE_NAME } from '../constant';
import GameList from 'components/organisms/GameList';
import HomeTemplate from 'components/templates/Home';
import Header from 'components/organisms/Header';

const Store: FunctionComponent = () => {
    const router = useRouter();
    const store = String(router.query?.store) as keyof typeof STORE_NAME;
    return (
        <HomeTemplate header={<Header />}>
            <GameList store={store} />
        </HomeTemplate>
    );
};

export default Store;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { store: 'steam' },
            },
            {
                params: { store: 'gog' },
            },
            {
                params: { store: 'battlenet' },
            },
            {
                params: { store: 'etc' },
            },
        ],
        fallback: false,
    };
}

export async function getStaticProps() {
    return { props: {} };
}
