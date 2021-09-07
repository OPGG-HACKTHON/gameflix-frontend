import { Theme } from '@emotion/react';

const dark: Theme = {
    colors: {
        default: '#ccc',
        primary: '#fff',
        primaryHover: '#fff',
        primaryActive: '#fff',
        secondary: '#fff',
        secondaryHover: '#867BFB',
        secondaryActive: '#4030FA',
    },
    buttonColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        secondary: 'rgba(0,0,0,0.8)',
        secondaryHover: 'rgba(0,0,0,0.8)',
        secondaryActive: 'rgba(119,119,119,0.8)',
    },
    bgColors: {
        primary: '#000',
        switchToggle: 'rgba(128, 128, 128, 0.8)',
        inputField: '#666666',
    },
    borderColors: {
        primary: '#000',
        primaryHover: '#000',
        primaryActive: '#000',
        secondary: '#ccc',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
    },
    components: {
        searchInput: '#fff',
    },
};

export default dark;
