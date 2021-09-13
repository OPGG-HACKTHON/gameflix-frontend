import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import Header from 'components/organisms/Header';

function Home(): React.ReactNode {
    return (
        <div>
            <Header />
            <Paragraph>Home page</Paragraph>
            <Button category="secondary">test</Button>
        </div>
    );
}
export default Home;

const Paragraph = styled.p`
    background: aqua;
`;
