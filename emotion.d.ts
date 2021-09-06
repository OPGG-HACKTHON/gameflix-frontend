import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            default: string;
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
            secondaryDisabled: string;
        };
        buttonColors: {
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
            secondaryDisabled: string;
        };
        bgColors: {
            primary: string;
            inputField: string;
        };
        borderColors: {
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
            secondaryDisabled: string;
        };
        components: {
            searchInput: string;
        };
    }
}
