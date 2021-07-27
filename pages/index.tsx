import React from 'react';
import styled from '@emotion/styled';

function Home(): React.ReactNode {
    return (
        <div>
            <Paragraph>Home page</Paragraph>
        </div>
    );
}
export default Home;

const Paragraph = styled.p`
    background: aqua;
`;
