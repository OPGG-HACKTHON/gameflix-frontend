import React, { FunctionComponent } from 'react';

import styled from '@emotion/styled';

import { Icon } from './svg';

const CloseIcon: FunctionComponent = () => {
    return <StyledCloseIcon />;
};

export default CloseIcon;

const StyledCloseIcon = styled(Icon)`
    > path {
        stroke: ${(props) => props.theme.components.closeIcon};
    }
`;
