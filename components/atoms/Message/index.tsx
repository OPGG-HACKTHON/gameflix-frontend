import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

type MessageProps = {
    message: string;
};

const Message: FunctionComponent<MessageProps> = (props) => {
    const { message } = props;
    return <MessageWrapper>{message}</MessageWrapper>;
};

export default Message;

const MessageWrapper = styled.h3`
    line-height: 26px;
    font-size: 18px;
    text-align: center;
    color: ${(props) => props.theme.components.searchInput};
`;
