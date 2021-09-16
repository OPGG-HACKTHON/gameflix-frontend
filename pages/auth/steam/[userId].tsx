import React, { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';

const Auth: FunctionComponent = () => {
    const router = useRouter();
    const { userId } = router.query;
    useEffect(() => {
        if (!userId || !window.opener) {
            return;
        }
        window.opener.postMessage(
            {
                userId,
            },
            'http://localhost:3000'
        );
        window.close();
    }, [userId]);
    return <div>{userId}</div>;
};

export default Auth;
