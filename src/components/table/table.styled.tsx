import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';
import { Text } from 'effects/typography';
import { themeVariables } from '../../effects/variables';

import { ReactComponent as SortArrowUp } from 'static/icons/sort-arrow-up.svg';
import { ReactComponent as SortArrowDown } from 'static/icons/sort-arrow-down.svg';

export const TableWrapper = styled.div`
  #table {
    border-radius: 10px;
    border-style: hidden;
    box-shadow: inset 0 0 0 1px #c4c4c4;

    &.table-bordered {
      th,
      td {
        vertical-align: middle;
        border: 1px solid #e8e8e8;
        min-width: 80px;
      }
    }

    th {
      border-bottom: 4px solid ${themeVariables.primaryColor} !important;
    }
  }

  td {
    height: 50px;
    vertical-align: middle;

    &.detail {
      height: 0;
      padding: 0;
    }
  }
`;

export const PaginationWrapper = Object.assign(
  styled(Pagination)`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  {
    Item: styled(Pagination.Item)`
      margin: 0 5px;

      a {
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    `,

    Link: styled(Text)`
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0 10px;
      color: #000;

      &:hover {
        color: #4f7752;
        transition: 0.5s;
      }
    `,
  },
);

export const NoData = styled.div`
  text-align: center;
  font-weight: 500;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }: { justifyContent: string }) => justifyContent};
`;

export const ArrowGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
`;

interface ArrowProps {
  active: any;
}

export const UpSortArrow = styled(SortArrowUp)<ArrowProps>`
  &:hover {
    cursor: pointer;
  }

  path {
    fill: ${({ active }) => !active && themeVariables.secondColor};
  }
`;

export const DownSortArrow = styled(SortArrowDown)<ArrowProps>`
  &:hover {
    cursor: pointer;
  }

  path {
    fill: ${({ active }) => !active && themeVariables.secondColor};
  }
`;
