import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Skeleton from 'react-loading-skeleton';

const Skeletons: FunctionComponent = () => {
    return (
        <SkeletonWrapper>
            <GameImgSkeleton />
            <SkeletonContents>
                <GameTitleSkeleton />
                <GameDescriptionSkeleton />
            </SkeletonContents>
        </SkeletonWrapper>
    );
};

export default Skeletons;

const SkeletonWrapper = styled.div`
    display: flex;
`;

const GameImgSkeleton = styled(Skeleton)`
    width: 96px;
    height: 128px;
    border-radius: 0px;
`;

const SkeletonContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    justify-content: space-between;
`;

const GameTitleSkeleton = styled(Skeleton)`
    width: 478px;
    height: 46px;
    border-radius: 0px;
`;

const GameDescriptionSkeleton = styled(Skeleton)`
    width: 195px;
    height: 42px;
    border-radius: 0px;
`;
