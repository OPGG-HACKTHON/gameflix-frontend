import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

const BlizzardClientId = '916b6064383441388fa56d2b3af3779a';
const BlizzardClientPwd = 'RrKJsOMXTn7AVxhFyscX8ABQiF9Ja9nw';
const REDIRECT_URI = 'http://localhost:3000/auth/';

const Auth: FunctionComponent = () => {
    const [accessToken, setAccessToken] = useState<string>('');
    const router = useRouter();
    const { code } = router.query;

    const getAccessToken = useCallback(
        async (code: string) => {
            const res = await axios.post(
                `https://kr.battle.net/oauth/token?client_id=${BlizzardClientId}&client_secret=${BlizzardClientPwd}&grant_type=client_credentials&code=${code}&redirect_uri=${REDIRECT_URI}`
            );
            setAccessToken(() => res.data.access_token);
        },
        [code]
    );

    useEffect(() => {
        if (!accessToken || !window.opener) {
            console.log(`accessToken이 없다. 빠져나간다.`);
            return;
        }
        console.log(code);

        console.log(`===accessToken 값: ${accessToken}===`);

        window.opener.postMessage(
            {
                accessToken,
            },
            'http://localhost:3000/'
        );
        window.close();
    }, [code, accessToken]);

    useEffect(() => {
        if (!code) {
            console.log('code가 없다. 처음이라 빠져나간다.');
            return;
        }
        getAccessToken(code as string);
    }, [code]);

    return <div>{code}</div>;
};

export default Auth;
