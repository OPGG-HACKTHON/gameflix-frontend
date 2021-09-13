import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { css, Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import ThemeContext from 'context/theme';
import { dark, light } from 'themes';

const ThemeProvider: FunctionComponent = (props) => {
    const { children } = props;
    const [isDark, setIsDark] = useState<boolean>(false);
    useEffect(() => {
        const isPrevDarkMode = window.localStorage.getItem('theme') === 'dark';
        const isLocalDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(isPrevDarkMode || isLocalDarkMode);
    }, []);
    useEffect(() => {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    const toggleTheme = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <Global
                styles={css`
                    html {
                        background: ${isDark ? '#0c0c0c' : '#e2e2e2'};
                    }
                    body {
                        margin: 0;
                    }
                    #__next {
                        height: 100vh;
                        width: 1920px;
                    }
                `}
            />
            <EmotionThemeProvider theme={isDark ? dark : light}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
