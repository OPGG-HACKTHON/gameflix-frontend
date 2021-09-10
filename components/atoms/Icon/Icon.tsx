import React, { FunctionComponent } from 'react';

import * as svg from './svg';

export type IconTypes = keyof typeof svg;

type IconProps = {
    name: IconTypes;
    color?: string;
};

type attributeType = {
    stroke?: string;
};

const Icon: FunctionComponent<IconProps> = (props) => {
    const { name, color } = props;
    const attribute: attributeType = {};
    if (color) {
        attribute.stroke = color;
    }

    return React.createElement(svg[name], { ...attribute });
};

export default Icon;
