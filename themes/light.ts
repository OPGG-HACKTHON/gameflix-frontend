import { Theme } from '@emotion/react';

const light: Theme = {
    colors: {
        default: '#000',
        primary: {
            default: '#fff',
            active: '#fff',
            hover: '#fff',
            disabled: 'rgba(204,204,204,0.5)',
        },
        secondary: {
            default: '#000',
            active: '#4030FA',
            hover: '#4030FA',
            disabled: 'rgba(0,0,0,0.3)',
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
            default: 'rgba(224,224,224,0.8)',
            active: 'rgba(119,119,119,0.8)',
            hover: 'rgba(224,224,224,0.8)',
            disabled: '#fff',
        },
        danger: {
            default: '#BE3B3B',
            active: '#BE3B3B',
            hover: '#BE3B3B',
            disabled: '#BE3B3B',
        },
    },
    bgColors: {
        primary: '#eee',
        inputField: '#ccc',
        default: '#e2e2e2',
    },
    borderColors: {
        primary: {
            default: '#4030FA',
            active: '#413C7A',
            hover: '#20177A',
            disabled: '#888888',
        },
        secondary: {
            default: '#aaa',
            active: '#4030FA',
            hover: '#4030FA',
            disabled: 'rgba(170,170,170,0.7)',
        },
        danger: {
            default: '#BE3B3B',
            active: '#BE3B3B',
            hover: '#BE3B3B',
            disabled: '#BE3B3B',
        },
    },
    components: {
        searchInput: '#000',
        checkboxContent: '#000',
    },
    iconColors: '#000',
};

export default light;
