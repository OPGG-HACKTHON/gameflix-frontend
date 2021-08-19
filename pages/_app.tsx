import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import ThemeProvider from 'provider/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
