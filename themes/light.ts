import { Theme } from '@emotion/react';

const light: Theme = {
    colors: {
        default: '#000',
        primary: '#fff',
        primaryHover: '#fff',
        primaryActive: '#fff',
        primaryDisabled: 'rgba(204,204,204,0.5)',
        secondary: '#000',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
        secondaryDisabled: 'rgba(0,0,0,0.3)',
    },
    buttonColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        primaryDisabled: '#888888',
        secondary: 'rgba(224,224,224,0.8)',
        secondaryHover: 'rgba(224,224,224,0.8)',
        secondaryActive: 'rgba(119,119,119,0.8)',
        secondaryDisabled: '#fff',
    },
    bgColors: {
        primary: '#eee',
        inputField: '#ccc',
    },
    borderColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        primaryDisabled: '#888888',
        secondary: '#aaa',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
        secondaryDisabled: 'rgba(170,170,170,0.7)',
    },
    components: {
        searchInput: '#000',
    },
};

export default light;
