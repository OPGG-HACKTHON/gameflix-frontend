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
    },
    bgColors: {
        primary: '#000',
        inputField: '#666666',
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
    },
    components: {
        searchInput: '#fff',
        checkboxContent: '#fff',
    },
};

export default dark;
