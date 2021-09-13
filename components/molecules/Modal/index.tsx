import React, { FunctionComponent, useCallback, useContext } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import Icon from 'components/atoms/Icon/Icon';

import ThemeContext from 'context/theme';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: React.MouseEventHandler<SVGSVGElement>;
};

const Modal: FunctionComponent<ModalProps> = (props) => {
    const { children, isOpen, onClose } = props;
    const theme = useContext(ThemeContext);

    return (
        <ModalWrapper
            style={{
                overlay: {
                    backgroundColor: `${
                        theme.isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)'
                    }`,
                },
            }}
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
        >
            <Icon
                name="Close"
                style={{ position: 'fixed', margin: '20px 0px 0px 962px', cursor: 'pointer' }}
                onClick={onClose}
            />
            <Content>{children}</Content>
        </ModalWrapper>
    );
};

ReactModal.setAppElement('#modal-root');

const ModalWrapper = styled(ReactModal)`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgColors.default};
    color: ${({ theme }) => theme.colors.secondary};
    margin: 80px 460px;
    width: 1000px;
    min-height: 264px;
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
    > Button {
        position: fixed;
        margin: 16px 0px 0px 886px;
        z-index: 99;
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
    color: ${(props) => props.theme.components.searchInput};
`;

export default Modal;
