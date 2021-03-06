import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { STORE_NAME } from '../constant';
import GameList from 'components/organisms/GameList';
import HomeTemplate from 'components/templates/Home';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

const Store: FunctionComponent = () => {
    const router = useRouter();
    const store = String(router.query?.store) as keyof typeof STORE_NAME;
    return (
        <HomeTemplate header={<Header />} footer={<Footer />}>
            <GameList store={store} />
        </HomeTemplate>
    );
};

export default Store;

export async function getStaticPaths() {
    return {
        paths: Object.keys(STORE_NAME).map((name) => ({
            params: { store: name },
        })),
        fallback: false,
    };
}

export async function getStaticProps() {
    return { props: {} };
}
