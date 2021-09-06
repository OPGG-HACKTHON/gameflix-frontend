import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

type ButtonTypes = keyof Theme['buttonColors'];

type ButtonProps = {
    category: ButtonTypes;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { category, children, onClick, disabled = false } = props;
    return (
        <StyledButton disabled={disabled} category={category} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button<{ category: string; disabled: boolean }>`
    text-align: center;
    background: ${({ theme, category, disabled }) =>
        disabled
            ? theme.buttonColors[category as ButtonTypes].disabled
            : theme.buttonColors[category as ButtonTypes].default};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, category, disabled }) =>
        disabled
            ? theme.borderColors[category as ButtonTypes].disabled
            : theme.borderColors[category as ButtonTypes].default};
    border-radius: 10px;
    color: ${({ theme, category, disabled }) =>
        disabled
            ? theme.colors[category as ButtonTypes].disabled
            : theme.colors[category as ButtonTypes].default};
    padding: 11px 36px;
    size: 14px;
    line-height: 20px;
    cursor: pointer;
    &:hover:enabled {
        background: ${({ theme, category }) => theme.buttonColors[category as ButtonTypes].hover};
        border-color: ${({ theme, category }) => theme.borderColors[category as ButtonTypes].hover};
        color: ${({ theme, category }) => theme.colors[category as ButtonTypes].hover};
    }
    &:active:enabled {
        background: ${({ theme, category }) => theme.buttonColors[category as ButtonTypes].active};
        border-color: ${({ theme, category }) => theme.borderColors[category as ButtonTypes].hover};
        color: ${({ theme, category }) => theme.colors[category as ButtonTypes].hover};
    }
`;
