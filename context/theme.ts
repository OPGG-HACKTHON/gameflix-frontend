import { createContext } from 'react';

type Theme = {
    isDark: boolean;
    toggleTheme?: () => void;
};
const ThemeContext = createContext<Theme>({ isDark: false });

export default ThemeContext;
