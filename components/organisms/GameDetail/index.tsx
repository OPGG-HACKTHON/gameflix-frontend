import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GameInfo } from 'types/responseInterface';
import { format } from 'date-fns';

const GameDetail: FunctionComponent<GameInfo> = (props) => {
    const { cover, name, summary, release_at, involved_companies, genres, platforms } = props;
    return (
        <GameDetailContainer>
            <ScreenShotWrapper>
                <img
                    src="https://images.igdb.com/igdb/image/upload/t_original/ocnossdjhjbn2hnyt94i.jpg"
                    alt="game image"
                    width="1000px"
                />
                <Overlay />
            </ScreenShotWrapper>
            <DetailContainer>
                <CoverWrapper>
                    <img src={cover} alt="game cover" />
                </CoverWrapper>
                <div>
                    <GameTitle>{name}</GameTitle>
                    <GameInformation>
                        {format(new Date(release_at), 'MMM d, yyyy')}
                        <br />
                        {involved_companies.join(', ')}
                    </GameInformation>
                    <p>
                        <InfoLabel>장르: </InfoLabel>
                        {genres}
                        <br />
                        <InfoLabel>플랫폼: </InfoLabel>
                        {platforms.join(', ')}
                    </p>
                    <p>{summary}</p>
                </div>
            </DetailContainer>
        </GameDetailContainer>
    );
};

export default GameDetail;

const GameDetailContainer = styled.article`
    width: 888px;
`;
const ScreenShotWrapper = styled.div`
    position: relative;
    width: 1000px;
    margin-left: -56px;
`;

const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.19%, #000000 100%);
    margin-top: -563px;
    width: 1000px;
    height: 563px;
    position: relative;
`;

const DetailContainer = styled.div`
    display: flex;
    margin-top: -63px;
    position: relative;
    color: ${({ theme }) => theme.colors.default};
    font-size: 14px;
    line-height: 20px;
`;

const CoverWrapper = styled.div`
    margin-top: -113px;
    margin-right: 24px;
`;

const GameTitle = styled.h2`
    line-height: 46px;
    margin-bottom: 32px;
    color: #fff;
`;

const GameInformation = styled.p`
    font-size: 18px;
    line-height: 26px;
`;

const InfoLabel = styled.span`
    color: #777;
`;
