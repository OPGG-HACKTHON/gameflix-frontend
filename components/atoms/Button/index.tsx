import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { children, onClick } = props;
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    text-align: center;
    background: ${({ theme }) => theme.bgColors.primary};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColors.primary};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 11px 36px;
    size: 14px;
    line-height: 20px;
`;
