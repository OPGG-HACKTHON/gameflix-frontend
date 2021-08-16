import React, { FunctionComponent, useCallback, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import ThemeContext from 'context/theme';
import { dark, light } from 'themes';

const ThemeProvider: FunctionComponent = (props) => {
    const { children } = props;
    const [isDark, setIsDark] = useState<boolean>(false);
    const toggleTheme = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <EmotionThemeProvider theme={isDark ? dark : light}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
