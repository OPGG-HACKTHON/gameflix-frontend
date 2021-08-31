import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Switch: FunctionComponent = () => {
    return (
        <SwitchWrapper>
            <Input type="checkbox" />
            <Slider />
        </SwitchWrapper>
    );
};

export default Switch;

const SwitchWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 100px;
    height: 42px;
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    :checked + ${Slider}:before {
        transform: translateX(56px);
    }
    :checked + Slider {
        background-color: rgba(128, 128, 128, 0.8);
        border: 2px solid blue;
        color: red;
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 21px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    :before {
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        top: 5px;
        bottom: 5px;
        left: 6px;
        border-radius: 50%;
        background-color: white;
        transition: 0.4s;
    }
`;
