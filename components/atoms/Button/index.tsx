import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type ButtonTypes = 'primary' | 'secondary';

type ButtonProps = {
    category: ButtonTypes;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { category, children, onClick } = props;
    return (
        <StyledButton category={category} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button<{ category: string }>`
    text-align: center;
    background: ${(props) =>
        props.category === 'primary'
            ? props.theme.buttonColors.primary
            : props.theme.buttonColors.secondary};
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
        props.category === 'primary'
            ? props.theme.borderColors.primary
            : props.theme.borderColors.secondary};
    border-radius: 10px;
    color: ${(props) =>
        props.category === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary};
    padding: 11px 36px;
    size: 14px;
    line-height: 20px;
    cursor: pointer;
    :hover {
        background: ${(props) =>
            props.category === 'primary'
                ? props.theme.buttonColors.primaryHover
                : props.theme.buttonColors.secondaryHover};
        border-color: ${(props) =>
            props.category === 'primary'
                ? props.theme.borderColors.primaryHover
                : props.theme.borderColors.secondaryHover};
        color: ${(props) =>
            props.category === 'primary'
                ? props.theme.colors.primaryHover
                : props.theme.colors.secondaryHover};
    }
    :active {
        background: ${(props) =>
            props.category === 'primary'
                ? props.theme.buttonColors.primaryActive
                : props.theme.buttonColors.secondaryActive};
        border-color: ${(props) =>
            props.category === 'primary'
                ? props.theme.borderColors.primaryActive
                : props.theme.borderColors.secondaryActive};
        color: ${(props) =>
            props.category === 'primary'
                ? props.theme.colors.primaryActive
                : props.theme.colors.secondaryActive};
    }
`;
