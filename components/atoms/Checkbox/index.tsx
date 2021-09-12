import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';

import Icon from 'components/atoms/Icon/Icon';

type CheckBoxProps = {
    children: React.ReactNode;
    onClick: (check: boolean) => void;
};

const CheckBox: FunctionComponent<CheckBoxProps> = (props) => {
    const { children, onClick } = props;
    const [checked, setChecked] = useState<boolean>(false);

    const handleClick = () => {
        setChecked(!checked);
        onClick(checked);
    };

    return (
        <Wrapper>
            {children}
            <Input onClick={handleClick} type="checkbox" checked={checked} />
            <CheckMark checked={checked}>
                <Icon name="Check" />
            </CheckMark>
        </Wrapper>
    );
};

export default CheckBox;

const Wrapper = styled.label`
    display: block;
    position: relative;
    font-size: 14px;
    padding-left: 34px;
    padding-top: 4px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: auto;
    color: ${(props) => props.theme.components.checkboxContent};
`;

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    :checked + span {
        background-color: #4030fa;
    }
`;

const CheckMark = styled.span<{ checked: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #cccccc;
    border-radius: 6px;
    text-align: center;
    transition: all 300ms;
    > svg {
        margin-top: 5px;
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`;
