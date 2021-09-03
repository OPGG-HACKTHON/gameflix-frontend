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
    },
    borderColors: {
        primary: '#4030FA',
        primaryHover: '#20177A',
        primaryActive: '#413C7A',
        secondary: '#aaa',
        secondaryHover: '#4030FA',
        secondaryActive: '#4030FA',
    },
};

export default light;
