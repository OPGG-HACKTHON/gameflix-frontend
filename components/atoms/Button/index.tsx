import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
    children: React.ReactNode;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { children } = props;
    return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #fff;
    padding: 11px 36px;
    size: 14px;
    line-height: 20px;
`;
