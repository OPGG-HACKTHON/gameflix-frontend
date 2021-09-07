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
            switchToggle: string;
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
        components: {
            searchInput: string;
        };
    }
}
