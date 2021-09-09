import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            default: string;
            primary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
            secondary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
        };
        buttonColors: {
            primary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
            secondary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
        };
        bgColors: {
            primary: string;
            switchToggle: string;
            inputField: string;
        };
        borderColors: {
            primary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
            secondary: {
                default: string;
                active: string;
                hover: string;
                disabled: string;
            };
        };
        components: {
            searchInput: string;
        };
    }
}
