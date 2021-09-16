import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import { postUser } from 'api/user';
import { UserInfo } from 'types/responseInterface';

const BlizzardClientId = '916b6064383441388fa56d2b3af3779a';
const BlizzardClientPwd = 'RrKJsOMXTn7AVxhFyscX8ABQiF9Ja9nw';
const REDIRECT_URI = 'http://localhost:3000/auth/';

const Auth: FunctionComponent = () => {
    const [accessToken, setAccessToken] = useState<string>('');
    const [userId, setUserId] = useState<string>();

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

    const getCurrentUser = async () => {
        try {
            const res = await postUser();
            if (!res) {
                return;
            }
            setUserId(() => res.id);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!accessToken || !window.opener) {
            return;
        }

        window.opener.postMessage(
            {
                accessToken,
                userId,
            },
            'http://localhost:3000/'
        );
        window.close();
    }, [code, accessToken]);

    useEffect(() => {
        if (!code) {
            return;
        }
        getAccessToken(code as string);
        getCurrentUser();
    }, [code]);

    return <div>{code}</div>;
};

export default Auth;
