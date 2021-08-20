import React, { FunctionComponent } from 'react';
import Logo from 'components/atoms/Logo';
import styled from '@emotion/styled';
import { GoogleLogin } from 'react-google-login';

const clientId = '5985250658-onoklf8u51h2vnv1t9fvfm12ta2k81l6.apps.googleusercontent.com';

const LoginForm: FunctionComponent = () => {
    return (
        <StyledContainer>
            <Logo size={'big'} />
            <StyledParagraph>당신의 게임이 한 자리에</StyledParagraph>
            <StyledGoogleLogin clientId={clientId} />
        </StyledContainer>
    );
};

export default LoginForm;

const StyledContainer = styled.div`
    width: 960px;
    height: 800px;
    background: ${({ theme }) => theme.bgColors.primary};
    border-radius: 30px;
    text-align: center;
    padding-top: 118px;
    box-sizing: border-box;
`;

const StyledParagraph = styled.p`
    margin: 24px 0 0 0;
    font-size: 24px;
    line-height: 35px;
    color: ${({ theme }) => theme.colors.default};
`;

const StyledGoogleLogin = styled(GoogleLogin)`
    margin-top: 255px;
`;
