import { Theme } from '@emotion/react';

const dark: Theme = {
    colors: {
        default: '#ccc',
        primary: '#fff',
        primaryHover: '#fff',
        primaryActive: '#fff',
        primaryDisabled: 'rgba(204,204,204,0.5)',
        secondary: '#fff',
        secondaryHover: '#867BFB',
        secondaryActive: '#4030FA',
        secondaryDisabled: 'rgba(255,255,255,0.3)',
    },
    buttonColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        primaryDisabled: '#888888',
        secondary: 'rgba(0,0,0,0.8)',
        secondaryHover: 'rgba(0,0,0,0.8)',
        secondaryActive: 'rgba(119,119,119,0.8)',
        secondaryDisabled: 'rgba(0,0,0,0.8)',
    },
    bgColors: {
        primary: '#000',
    },
    borderColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        primaryDisabled: '#888888',
        secondary: '#ccc',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
        secondaryDisabled: 'rgba(204,204,204,0.7)',
    },
};

export default dark;
