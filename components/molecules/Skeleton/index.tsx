import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type SkeletonsProps = {
    multiple?: boolean;
};

const Skeletons: FunctionComponent<SkeletonsProps> = (props) => {
    const { multiple } = props;
    return (
        <SkeletonTheme color="rgba(196,196,196,0.5)">
            {multiple ? (
                <>
                    <SkeletonWrapper>
                        <GameImgSkeleton />
                        <SkeletonContents>
                            <GameTitleSkeleton />
                            <GameDescriptionSkeleton />
                        </SkeletonContents>
                    </SkeletonWrapper>
                    <Contour />
                    <SkeletonWrapper>
                        <GameImgSkeleton />
                        <SkeletonContents>
                            <GameTitleSkeleton />
                            <GameDescriptionSkeleton />
                        </SkeletonContents>
                    </SkeletonWrapper>
                    <Contour />
                    <SkeletonWrapper>
                        <GameImgSkeleton />
                        <SkeletonContents>
                            <GameTitleSkeleton />
                            <GameDescriptionSkeleton />
                        </SkeletonContents>
                    </SkeletonWrapper>
                </>
            ) : (
                <SkeletonWrapper>
                    <GameImgSkeleton />
                    <SkeletonContents>
                        <GameTitleSkeleton />
                        <GameDescriptionSkeleton />
                    </SkeletonContents>
                </SkeletonWrapper>
            )}
        </SkeletonTheme>
    );
};

export default Skeletons;

const SkeletonWrapper = styled.div`
    display: flex;
    padding: 45px 0;
`;

const GameImgSkeleton = styled(Skeleton)`
    min-width: 96px;
    min-height: 128px;
    border-radius: 0px;
`;

const SkeletonContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    justify-content: space-between;
    white-space: nowrap;
`;

const GameTitleSkeleton = styled(Skeleton)`
    min-width: 478px;
    min-height: 46px;
    border-radius: 0px;
`;

const GameDescriptionSkeleton = styled(Skeleton)`
    max-width: 195px;
    min-height: 42px;
    border-radius: 0px;
`;

const Contour = styled.div`
    width: 914px;
    height: 1px;
    background: #333333;
`;
