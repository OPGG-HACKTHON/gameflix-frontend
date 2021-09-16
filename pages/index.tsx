import React, { FunctionComponent } from 'react';

import HomeTemplate from 'components/templates/Home';
import Header from 'components/organisms/Header';
import Libraries from 'components/organisms/Libraries';
import Footer from 'components/organisms/Footer';

const home: FunctionComponent = () => {
    return (
        <>
            <HomeTemplate header={<Header />} footer={<Footer />}>
                <Libraries />
            </HomeTemplate>
        </>
    );
};

export default home;
