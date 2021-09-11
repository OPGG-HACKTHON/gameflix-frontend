import React, { FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import Icon from 'components//atoms/Icon/Icon';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal: FunctionComponent<ModalProps> = (props) => {
    const { children, isOpen, onClose } = props;
    return (
        <StyledModalOverlay>
            <ModalWrapper isOpen={isOpen} onRequestClose={onClose} closeTimeoutMS={2000}>
                <Icon
                    name="Close"
                    style={{ position: 'fixed', margin: '20px 0px 0px 962px', cursor: 'pointer' }}
                    onClick={onClose}
                />
                <Content>{children}</Content>
            </ModalWrapper>
        </StyledModalOverlay>
    );
};

ReactModal.setAppElement('#modal-root');

const StyledModalOverlay = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
`;

const ModalWrapper = styled(ReactModal)`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgColors.modal};
    color: ${({ theme }) => theme.iconColors};
    margin: 80px 460px;
    width: 1000px;
    min-height: 80px;
    max-height: 878px;
    outline: none;
    overflow: auto;
    transition: all 0.3s ease-in-out;
    &[class*='after-open'] {
        opacity: 1;
    }
    &[class*='before-close'] {
        opacity: 0;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    justify-contents: center;
    margin-bottom: 1rem;
    padding: 80px 56px 0 56px;
`;

export default Modal;
