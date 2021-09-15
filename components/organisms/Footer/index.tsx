import React, { FunctionComponent } from 'react';

import styled from '@emotion/styled';

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            <ProjectTitle>GAMEFLIX. 2021.</ProjectTitle>
            <Team>created by OP.GG hackathon Web D Team</Team>
            <TeamMember>홍석기, 김동하, 박래철, 이현호</TeamMember>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1920px;
    height: 175px;
    background-color: ${(props) => props.theme.bgColors.default};
`;

const ProjectTitle = styled.h3`
    text-align: center;
    color: #4030fa;
    font-size: 16px;
    font-weight: bold;
    padding: 0px;
    margin-top: 0;
    margin-bottom: 6px;
`;

const Team = styled.h3`
    text-align: center;
    color: ${(props) => props.theme.colors.default};
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 6px;
`;

const TeamMember = styled.h3`
    text-align: center;
    color: ${(props) => props.theme.colors.default};
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
`;
