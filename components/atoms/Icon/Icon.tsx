import React, { FunctionComponent, CSSProperties } from 'react';
import { useTheme } from '@emotion/react';

import * as svg from './svg';

export type IconTypes = keyof typeof svg;

type IconProps = {
    name: IconTypes;
    color?: string;
    style?: CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type attributeType = {
    stroke?: string;
};

const Icon: FunctionComponent<IconProps> = (props) => {
    const { name, color, style } = props;
    const theme = useTheme();
    const attribute: attributeType = {
        stroke: color ?? theme?.iconColors,
    };

    return React.createElement(svg[name], { ...attribute, style });
};

export default Icon;
