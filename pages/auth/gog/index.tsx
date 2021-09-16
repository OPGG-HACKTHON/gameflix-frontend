import React, { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';

const GOGAuth: FunctionComponent = () => {
    const router = useRouter();
    const { code } = router.query;
    useEffect(() => {
        if (!code || !window.opener) {
            return;
        }
        window.opener.postMessage(
            {
                code,
            },
            'http://localhost:3000'
        );
        window.close();
    }, [code]);
    return <div>{code}</div>;
};

export default GOGAuth;
