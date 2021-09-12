import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Header from 'components/organisms/Header';
import Libraries from 'components/organisms/Libraries';

const Main: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Libraries />
            <Footer />
        </>
    );
};

export default Main;

const Footer = styled.div`
    height: 88px;
`;
