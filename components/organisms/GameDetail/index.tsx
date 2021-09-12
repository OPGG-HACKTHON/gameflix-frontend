import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GameInfo } from 'types/responseInterface';
import { format } from 'date-fns';
import Button from 'components/atoms/Button';

const GameDetail: FunctionComponent<GameInfo> = (props) => {
    const { cover, name, summary, release_at, involved_companies, genres, platforms } = props;
    return (
        <GameDetailContainer>
            <ScreenShotWrapper>
                <img
                    src="https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg"
                    alt="game image"
                    height="799px"
                />
                <Overlay />
            </ScreenShotWrapper>
            <DetailContainer>
                <CoverWrapper>
                    <img src={cover} alt="game cover" />
                </CoverWrapper>
                <InformationContainer>
                    <GameTitle>{name}</GameTitle>
                    <CompaniesInformation>{involved_companies.join(', ')}</CompaniesInformation>
                    <GameInformation>
                        <InfoLabel>출시: </InfoLabel>
                        {format(new Date(release_at), 'MMM d, yyyy')}
                        <br />
                        <InfoLabel>장르: </InfoLabel>
                        {genres}
                        <br />
                        <InfoLabel>플랫폼: </InfoLabel>
                        {platforms.join(', ')}
                    </GameInformation>
                    <p>{summary}</p>
                </InformationContainer>
            </DetailContainer>
        </GameDetailContainer>
    );
};

export default GameDetail;

const GameDetailContainer = styled.article`
    width: 1920px;
`;

const ScreenShotWrapper = styled.div`
    position: absolute;
    text-align: center;
`;

const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.19%, #000000 100%);
    margin-top: -799px;
    width: 1920px;
    height: 799px;
    position: relative;
`;

const DetailContainer = styled.div`
    display: flex;
    padding-top: 799px;
    position: relative;
    color: ${({ theme }) => theme.colors.default};
    font-size: 14px;
    line-height: 20px;
    width: 1280px;
    margin: auto;
`;

const CoverWrapper = styled.div`
    margin-top: -176px;
    margin-right: 24px;
`;

const InformationContainer = styled.div`
    margin-top: -78px;
`;

const GameTitle = styled.h2`
    line-height: 58px;
    margin-bottom: 36px;
    font-size: 40px;
    color: #fff;
`;

const CompaniesInformation = styled.p`
    margin: 0 0 20px 0;
    font-size: 20px;
    line-height: 29px;
    font-weight: bold;
`;

const GameInformation = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 56px 0;
`;

const InfoLabel = styled.span`
    color: #867bfb;
`;
