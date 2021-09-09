import ThemeContext from 'context/theme';
import React, { FunctionComponent, useContext } from 'react';

import styled from '@emotion/styled';

import * as lightSvg from './lightsvg';
import * as darkSvg from './darksvg';

const CloseIcon: FunctionComponent = () => {
    const theme = useContext(ThemeContext);

    return theme.isDark
        ? React.createElement(darkSvg['logo'])
        : React.createElement(lightSvg['logo']);
};

export default CloseIcon;
