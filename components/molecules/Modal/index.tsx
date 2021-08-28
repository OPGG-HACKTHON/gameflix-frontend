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
        <StyledModalOverlay>
            <ModalWrapper isOpen={isOpen} onRequestClose={onClose} closeTimeoutMS={2000}>
                <Button category="secondary" onClick={onClose}>
                    닫기
                </Button>
                <Content className={contentType}>{children}</Content>
            </ModalWrapper>
        </StyledModalOverlay>
    );
};

ReactModal.setAppElement('#modal-root');

const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
`;

const ModalWrapper = styled(ReactModal)`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.buttonColors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
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
