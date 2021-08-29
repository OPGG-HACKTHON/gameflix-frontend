import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            default: string;
            primary: string;
            primaryHover: string;
            primaryActive: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
            searchInput: string;
        };
        buttonColors: {
            primary: string;
            primaryHover: string;
            primaryActive: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
        };
        bgColors: {
            primary: string;
            inputField: string;
        };
        borderColors: {
            primary: string;
            primaryHover: string;
            primaryActive: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
        };
    }
}
