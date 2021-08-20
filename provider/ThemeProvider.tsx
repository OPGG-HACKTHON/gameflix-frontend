import React, { FunctionComponent, useCallback, useState } from 'react';
import { css, Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import ThemeContext from 'context/theme';
import { dark, light } from 'themes';

const ThemeProvider: FunctionComponent = (props) => {
    const { children } = props;
    const [isDark, setIsDark] = useState<boolean>(true);
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
                        width: 100vw;
                    }
                `}
            />
            <EmotionThemeProvider theme={isDark ? dark : light}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
