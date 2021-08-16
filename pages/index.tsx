import React from 'react';
import styled from '@emotion/styled';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Button from 'components/atoms/Button';

function Home(): React.ReactNode {
    const clientId = '5985250658-onoklf8u51h2vnv1t9fvfm12ta2k81l6.apps.googleusercontent.com';
    const onSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(response);
    };
    const onFailure = (error: any) => {
        console.log(error);
    };
    return (
        <div>
            <Paragraph>Home page</Paragraph>
            <GoogleLogin clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} />
            <Button>test</Button>
        </div>
    );
}
export default Home;

const Paragraph = styled.p`
    background: aqua;
`;
