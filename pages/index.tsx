import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import Header from 'components/organisms/Header';
import axios from 'axios';

import Link from 'next/link';
import { useRouter } from 'next/router';
const BlizzardClientId = '916b6064383441388fa56d2b3af3779a';
const BlizzardClientPwd = 'RrKJsOMXTn7AVxhFyscX8ABQiF9Ja9nw';
const REDIRECT_URI = 'http://localhost/';

function Home(): React.ReactNode {
    const router = useRouter();

    const onRegisterBlizzard = () => {
        // const response = await axios.post(
        //     `https://kr.battle.net/oauth/token?client_id=${BlizzardClientId}&client_secret=${BlizzardClientPwd}&grant_type=client_credentials&code=KRMkJgEGlv8OBbkEtT267vCNmKZbfdj0mN&redirect_uri=${REDIRECT_URI}`
        // );
        // console.log(response.data);
        const authorizationCode = router.query.code;
        console.log(router.query.code);
        router.push('/');
        console.log(authorizationCode);
    };
    const onHandleClick = () => {
        const authorizationCode = router.query.code;
        console.log(router.query.code);
        router.push('/');
    };
    return (
        <div>
            <Header />
            <Paragraph>Home page</Paragraph>
            <Link href="https://kr.battle.net/login/en/?ref=https://kr.battle.net/oauth/authorize?client_id%3Dbdd7aad97d4e4e768f45a2af2830dfd5%26response_type%3Dcode%26redirect_uri%3Dhttp://localhost:3000/%26scope%3Dwow.profile%2520sc2.profile%2520d3.profile&app=oauth">
                <a onClick={onRegisterBlizzard}>
                    <Button category="secondary">test</Button>
                </a>
            </Link>
            <Button onClick={onHandleClick} category="primary">
                Temp
            </Button>
        </div>
    );
}
export default Home;

const Paragraph = styled.p`
    background: aqua;
`;
