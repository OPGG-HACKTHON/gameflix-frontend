import React, { FunctionComponent } from 'react';
import Logo from 'components/atoms/Logo';
import styled from '@emotion/styled';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useRouter } from 'next/router';

const clientId = '790559581357-unedu44hsccmr8atn35m3hmktio2tqqp.apps.googleusercontent.com';

const LoginForm: FunctionComponent = () => {
    const router = useRouter();
    const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('tokenId' in response) {
            window.localStorage.setItem('token', response.tokenId);
        } else {
            window.localStorage.setItem('code', response.code);
        }
        router.push('/');
    };
    const onFailure = (error: any) => {
        console.log(error);
    };
    return (
        <StyledContainer>
            <Logo size={'big'} />
            <StyledParagraph>당신의 게임이 한 자리에</StyledParagraph>
            <StyledGoogleLogin clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} />
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
