import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            default: string;
        };
        buttonColors: {
            primary: string;
        };
        bgColors: {
            primary: string;
        };
        borderColors: {
            primary: string;
        };
    }
}
