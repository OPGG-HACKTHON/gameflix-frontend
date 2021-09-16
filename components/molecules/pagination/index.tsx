import React, { FunctionComponent, useState } from 'react';

import styled from '@emotion/styled';

type PaginationProps = {
    isFirst: boolean;
    isLast: boolean;
    totalPages: number;
};

const Pagination: FunctionComponent<PaginationProps> = (props) => {
    const { totalPages } = props;

    const [selectedPage, setSelectedPage] = useState<number>(1);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            {pageNumbers.map((pageNum) => {
                return (
                    <PageLi key={pageNum}>
                        {pageNum === selectedPage ? (
                            <PageSpan onClick={() => setSelectedPage(pageNum)}>{pageNum}</PageSpan>
                        ) : (
                            <span onClick={() => setSelectedPage(pageNum)}>{pageNum}</span>
                        )}
                    </PageLi>
                );
            })}
        </PaginationWrapper>
    );
};

export default Pagination;

const PaginationWrapper = styled.ul`
    list-style: none;
    text-align: center;
    color: ${(props) => props.theme.colors.default};
    padding: 9px 0px 11px 0px;
`;

const PageLi = styled.li`
    display: inline-block;
    font-size: 17px;
    font-height: 28px;
    font-weight: 600;
    padding: 5px;
    border-radius: 5px;
    width: 25px;
    &:hover {
        cursor: pointer;
    }
`;

const PageSpan = styled.p`
    margin: 0;
    padding-top: 3px;
    width: 28px;
    height: 28px;
    border-radius: 10px;
    background-color: #4030fa;
    color: white;
`;
