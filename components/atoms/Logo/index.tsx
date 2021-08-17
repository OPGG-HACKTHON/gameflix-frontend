import React, { FunctionComponent } from 'react';
import * as svg from './svg';

type LogoProps = {
    size?: keyof typeof sizes;
};

const Logo: FunctionComponent<LogoProps> = (props) => {
    const { size = 'default' } = props;
    const attribute = sizes[size];
    return React.createElement(svg['logo'], { ...attribute });
};

export default Logo;

const sizes = {
    default: { width: 267, height: 93 },
    big: { width: 490, height: 171 },
};
