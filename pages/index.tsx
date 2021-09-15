import React, { FunctionComponent } from 'react';

import HomeTemplate from 'components/templates/Home';
import Header from 'components/organisms/Header';
import Libraries from 'components/organisms/Libraries';

const home: FunctionComponent = () => {
    return (
        <>
            <HomeTemplate header={<Header />}>
                <Libraries />
            </HomeTemplate>
        </>
    );
};

export default home;
