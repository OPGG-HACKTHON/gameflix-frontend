import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeProvider from 'provider/ThemeProvider';
import UserProvider from 'provider/UserProvider';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <UserProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </UserProvider>
    );
}

export default MyApp;
