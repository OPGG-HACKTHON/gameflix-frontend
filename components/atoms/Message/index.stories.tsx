import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Message from './';

export default {
    title: 'atoms/Message',
    component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: '더 이상 검색 결과가 없습니다.',
};
