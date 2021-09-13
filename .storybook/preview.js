import {useDarkMode} from 'storybook-dark-mode';
import { ThemeProvider } from '@emotion/react';
import {dark, light} from '../themes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const theme = useDarkMode()?dark: light;
    return <ThemeProvider theme={theme}><Story /></ThemeProvider>
  }
]