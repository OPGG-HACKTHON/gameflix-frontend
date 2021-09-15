import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type HomeProps = {
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
};

const Home: FunctionComponent<HomeProps> = (props) => {
    const { header, children, footer } = props;
    return (
        <StyledWrapper>
            {header && <>{header}</>}
            <StyledContent>{children}</StyledContent>
            {footer && <>{footer}</>}
        </StyledWrapper>
    );
};

export default Home;

const StyledWrapper = styled.div``;

const StyledContent = styled.main``;
