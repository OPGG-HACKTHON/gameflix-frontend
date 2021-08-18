import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type LoginProps = {
    children?: React.ReactNode;
    footer?: React.ReactNode;
};

const Login: FunctionComponent<LoginProps> = (props) => {
    const { children, footer } = props;
    return (
        <StyledWrapper>
            <StyledContent>{children}</StyledContent>
            {footer && <StyledFooter>{footer}</StyledFooter>}
        </StyledWrapper>
    );
};

export default Login;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const StyledContent = styled.div``;

const StyledFooter = styled.div`
    position: absolute;
    bottom: 50px;
    color: ${({ theme }) => theme.colors.default};
`;
