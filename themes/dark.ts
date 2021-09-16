import { Theme } from '@emotion/react';

const dark: Theme = {
    colors: {
        default: '#ccc',
        primary: {
            default: '#fff',
            active: '#fff',
            hover: '#fff',
            disabled: 'rgba(204,204,204,0.5)',
        },
        secondary: {
            default: '#fff',
            active: '#4030FA',
            hover: '#867BFB',
            disabled: 'rgba(255,255,255,0.3)',
        },
        danger: {
            default: '#fff',
            active: '#fff',
            hover: '#fff',
            disabled: '#fff',
        },
    },
    buttonColors: {
        primary: {
            default: '#4030FA',
            active: '#413C7A',
            hover: '#20177A',
            disabled: '#888888',
        },
        secondary: {
            default: 'rgba(0,0,0,0.8)',
            active: 'rgba(119,119,119,0.8)',
            hover: 'rgba(0,0,0,0.8)',
            disabled: 'rgba(0,0,0,0.8)',
        },
        danger: {
            default: '#BE3B3B',
            active: '#BE3B3B',
            hover: '#BE3B3B',
            disabled: '#BE3B3B',
        },
    },
    bgColors: {
        primary: '#000',
        inputField: '#666666',
        default: '#131313',
    },
    borderColors: {
        primary: {
            default: '#4030FA',
            active: '#413C7A',
            hover: '#20177A',
            disabled: '#888888',
        },
        secondary: {
            default: '#ccc',
            active: '#4030FA',
            hover: '#4030FA',
            disabled: 'rgba(204,204,204,0.7)',
        },
        danger: {
            default: '#BE3B3B',
            active: '#BE3B3B',
            hover: '#BE3B3B',
            disabled: '#BE3B3B',
        },
    },
    components: {
        searchInput: '#fff',
        checkboxContent: '#fff',
    },
    iconColors: '#fff',
};

export default dark;
