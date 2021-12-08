import React from 'react';

export interface ITableHeadTitle {
  id: number | string;
  value: string | React.ReactNode;
  isSort?: boolean;
  onSortClick?: () => void;
  directionAsc?: boolean;
}

export interface ITableRowData {
  id: number | string;
  cells: {
    id: number | string;
    component?: React.Component | string | JSX.Element | number | null;
  }[];
  detail?: React.Component | string | JSX.Element;
  showDetail?: boolean;
}
