import { ReactComponent as TableArrow } from 'static/icons/arrow.svg';
import * as S from './arrowCell.styled';

export const ArrowCell = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
  <S.ArrowContainer activeRow={active} onClick={onClick}>
    <TableArrow id="table-arrow" width={22} height={13} />
  </S.ArrowContainer>
);
