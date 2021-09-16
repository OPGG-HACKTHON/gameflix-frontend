import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Icon from 'components/atoms/Icon/Icon';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GameDetailSkeleton: FunctionComponent = () => {
    return (
        <SkeletonTheme color="rgba(196,196,196,0.5)">
            <SkeletonWrapper>
                <ScreenShotSkeleton />
                <Overlay />
            </SkeletonWrapper>
            <DetailContainer>
                <CoverWrapper>
                    <LoadingCover>
                        <Icon name="InitialLogo" />
                    </LoadingCover>
                </CoverWrapper>
                <InformationContainer>
                    <GameTitleSkeleton />
                    <CompaniesInformationSkeleton />
                    <GameInfoSkeleton />
                    <GameDescriptionSkeleton />
                </InformationContainer>
            </DetailContainer>
        </SkeletonTheme>
    );
};

export default GameDetailSkeleton;

const SkeletonWrapper = styled.article`
    width: 1920px;
`;

const ScreenShotSkeleton = styled(Skeleton)`
    position: absolute;
    text-align: center;
    height: 799px;
`;

const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.19%, #000000 100%);
    width: 1920px;
    height: 799px;
    position: relative;
    z-index: 10;
`;

const DetailContainer = styled.div`
    display: flex;
    position: relative;
    width: 1280px;
    margin: auto;
    z-index: 99;
`;

const CoverWrapper = styled.div`
    margin-top: -176px;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const LoadingCover = styled.div`
    width: 264px;
    height: 352px;
    background-color: #3a3a3a;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InformationContainer = styled.div`
    margin-top: -78px;
    display: flex;
    flex-direction: column;
`;

const GameTitleSkeleton = styled(Skeleton)`
    max-width: 478px;
    min-height: 46px;
`;

const CompaniesInformationSkeleton = styled(Skeleton)`
    margin: 42px 0 20px 0;
    max-width: 195px;
    min-height: 29px;
`;

const GameInfoSkeleton = styled(Skeleton)`
    margin: 0;
    max-width: 273px;
    min-height: 59px;
`;

const GameDescriptionSkeleton = styled(Skeleton)`
    margin: 57px 0 20px 0;
    min-width: 727px;
    min-height: 32px;
`;
