import React, { FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import Button from 'components/atoms/Button/index';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    contentType: string;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal: FunctionComponent<ModalProps> = (props) => {
    const { children, isOpen, contentType, onClose } = props;
    return (
        <ModalWrapper isOpen={isOpen} onRequestClose={onClose} closeTimeoutMS={2000}>
            <Button onClick={onClose}>닫기</Button>
            <Content className={contentType}>{children}</Content>
        </ModalWrapper>
    );
};

const ModalWrapper = styled(ReactModal)`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.buttonColors.primary};
    color: ${({ theme }) => theme.colors.primary};
    margin: 80px 460px;
    width: 1000px;
    min-height: 80px;
    max-height: 878px;
    outline: none;
    transition: all 0.3s ease-in-out;
    &[class*='after-open'] {
        opacity: 1;
    }
    &[class*='before-close'] {
        opacity: 0;
    }
    > Button {
        margin: 16px 20px 22px auto;
    }
`;

const Content = styled.div`
    display: flex;
    justify-contents: center;
    overflow: auto;
    margin-bottom: 1rem;
    padding: ${(props) => (props.className === 'search' ? '0 40px' : '0 56px')};
`;

export default Modal;
