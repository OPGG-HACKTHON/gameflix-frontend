import { Theme } from '@emotion/react';

const light: Theme = {
    colors: {
        default: '#000',
        primary: '#fff',
        primaryHover: '#fff',
        primaryActive: '#fff',
        secondary: '#000',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
    },
    buttonColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        secondary: 'rgba(224,224,224,0.8)',
        secondaryHover: 'rgba(224,224,224,0.8)',
        secondaryActive: 'rgba(119,119,119,0.8)',
    },
    bgColors: {
        primary: '#eee',
        switchToggle: 'rgba(128, 128, 128, 0.3)',
        inputField: '#ccc',
    },
    borderColors: {
        primary: '#000',
        primaryHover: '#000',
        primaryActive: '#000',
        secondary: '#aaa',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
    },
    components: {
        searchInput: '#000',
    },
};

export default light;
