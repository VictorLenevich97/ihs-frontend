import { useMemo } from 'react';
import { set as objectSet, values as objectValues } from 'lodash';
import * as S from './tableArrowsShowDetail.styled';

import { ReactComponent as ArrowsCollapse } from 'static/icons/arrows-collapse.svg';
import { ReactComponent as ArrowsExpand } from 'static/icons/arrows-expand.svg';

interface Props {
  showItemsDetail: { [id: string]: boolean };
  setShowItemsDetail: (value: { [id: string]: boolean }) => void;
  data: any; // Different table rows
}

export const TableArrowsShowDetail = ({ showItemsDetail, setShowItemsDetail, data }: Props) => {
  const onCollapse = () => {
    const DEFAULT_STATE = {};

    setShowItemsDetail(DEFAULT_STATE);
  };

  const onExpand = () => {
    const result = {};
    data.forEach(({ id }: { id: number }) => {
      objectSet(result, id, true);
    });

    setShowItemsDetail(result);
  };

  return (
    <S.Container>
      {objectValues(showItemsDetail).length === data.length ? (
        <ArrowsCollapse onClick={onCollapse} />
      ) : (
        <ArrowsExpand onClick={onExpand} />
      )}
    </S.Container>
  );
};
