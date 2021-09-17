import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import { postUser } from 'api/user';
import { UserInfo } from 'types/responseInterface';

const BlizzardClientId = '9826e228ca7a45dea91f7f04652bbea3';
const BlizzardClientPwd = '4l1Yol28Dbwdxx0tpPIELGxJKSI92XN1';
const CLIENT = `https://www.gameflix.link/`;

const Auth: FunctionComponent = () => {
    const [accessToken, setAccessToken] = useState<string>('');

    const router = useRouter();
    const { code } = router.query;

    const getAccessToken = useCallback(
        async (code: string) => {
            // Debug H
            console.log('===AccessToken post requesting...===');
            const res = await axios.post(
                `https://kr.battle.net/oauth/token?client_id=${BlizzardClientId}&client_secret=${BlizzardClientPwd}&grant_type=client_credentials&code=${code}&redirect_uri=${CLIENT}`
            );
            setAccessToken(() => res.data.access_token);
        },
        [code]
    );

    useEffect(() => {
        if (!accessToken || !window.opener) {
            return;
        }

        // Debug H
        console.log('AccessToken is, ', accessToken);

        window.opener.postMessage(
            {
                accessToken,
                store: 'blizzard',
            },
            window.location.origin
        );
        // window.close();
    }, [code, accessToken]);

    useEffect(() => {
        if (!code) {
            return;
        }
        getAccessToken(code as string);
    }, [code]);

    return <div>{code}</div>;
};

export default Auth;
