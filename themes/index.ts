export { default as dark } from './dark';
export { default as light } from './light';

export type Theme = {
    colors: {
        primary: string;
    };
    bgColors: {
        primary: string;
    };
    borderColors: {
        primary: string;
    };
};
