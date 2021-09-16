import React, { FunctionComponent, useContext } from 'react';

import styled from '@emotion/styled';
import { usePagination } from 'utils/usePagination';
import Icon from 'components/atoms/Icon/Icon';
import { DOTS } from 'constant';

import ThemeContext from 'context/theme';

type PaginationProps = {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
};

const Paginations: FunctionComponent<PaginationProps> = (props) => {
    const { onPageChange, totalCount, siblingCount, currentPage, pageSize } = props;
    const theme = useContext(ThemeContext);
    const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize }) as (
        | string
        | number
    )[];

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <PaginationWrapper>
            {currentPage === 1 ? (
                <Icon
                    name="LeftArrow"
                    style={{
                        marginTop: '4px',
                        stroke: `${theme.isDark ? 'rgba(204,204,204,0.3)' : 'rgba(0,0,0,0.3)'}`,
                        fill: `${theme.isDark ? 'rgba(204,204,204,0.3)' : 'rgba(0,0,0,0.3)'}`,
                        cursor: 'pointer',
                    }}
                />
            ) : (
                <Icon
                    name="LeftArrow"
                    style={{
                        marginTop: '4px',
                        stroke: `${theme.isDark ? 'rgba(204,204,204, 1.0)' : 'rgba(0,0,0,1.0)'}`,
                        fill: `${theme.isDark ? 'rgba(204,204,204, 1.0)' : 'rgba(0,0,0,1.0)'}`,
                        cursor: 'pointer',
                    }}
                    onClick={onPrevious}
                />
            )}
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return <PageDots>&#8230;</PageDots>;
                }
                return pageNumber === currentPage ? (
                    <PageLiSelected>{pageNumber}</PageLiSelected>
                ) : (
                    <PageLi onClick={() => onPageChange(pageNumber as number)}>{pageNumber}</PageLi>
                );
            })}

            {currentPage === lastPage ? (
                <Icon
                    name="RightArrow"
                    style={{
                        marginTop: '4px',
                        stroke: `${theme.isDark ? 'rgba(204,204,204,0.3)' : 'rgba(0,0,0,0.3)'}`,
                        fill: `${theme.isDark ? 'rgba(204,204,204,0.3)' : 'rgba(0,0,0,0.3)'}`,
                        cursor: 'pointer',
                    }}
                />
            ) : (
                <Icon
                    name="RightArrow"
                    style={{
                        marginTop: '4px',
                        stroke: `${theme.isDark ? 'rgba(204,204,204, 1.0)' : 'rgba(0,0,0,1.0)'}`,
                        fill: `${theme.isDark ? 'rgba(204,204,204, 1.0)' : 'rgba(0,0,0,1.0)'}`,
                        cursor: 'pointer',
                    }}
                    onClick={onNext}
                />
            )}
        </PaginationWrapper>
    );
};

export default Paginations;

const PaginationWrapper = styled.ul`
    list-style: none;
    text-align: center;
    color: ${(props) => props.theme.colors.default};
    padding: 9px 0px 11px 0px;
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 80px 0px;
`;

const PageDots = styled.span`
    margin: 0px 16px 0px 8px;
`;

const PageLi = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    font-size: 17px;
    padding: 0px;
    font-height: 28px;
    font-weight: 600;
    border-radius: 5px;
    width: 28px;
    height: 28px;
    &:hover {
        cursor: pointer;
    }
`;

const PageLiSelected = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    padding: 0px;
    font-size: 17px;
    font-height: 28px;
    font-weight: 600;
    border-radius: 10px;
    width: 28px;
    height: 28px;
    background-color: #4030fa;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;
