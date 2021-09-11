import React, { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react';

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
    const theme = useTheme();
    const attribute: attributeType = {
        stroke: color ?? theme?.iconColors,
    };

    return React.createElement(svg[name], attribute);
};

export default Icon;
