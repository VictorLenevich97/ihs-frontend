import { Paragraph } from 'effects/typography';
import { Collapse } from 'react-bootstrap';
import { ITableRowData } from 'types';

import * as S from './tableRow.styled';

interface RowProps {
  data: ITableRowData;
  index: number;
}

const TableRow = ({ data, index }: RowProps) => {
  return (
    <>
      <S.CellContainer active={index % 2 === 0}>
        {data.cells.map(cell => (
          <td key={cell.id}>{cell.component}</td>
        ))}
      </S.CellContainer>

      {data.detail && (
        <tr>
          <td colSpan={data.cells.length} className={'detail'}>
            <Collapse in={data.showDetail} mountOnEnter>
              <S.DetailContainer>
                <Paragraph lineHeight={40}>{data.detail}</Paragraph>
              </S.DetailContainer>
            </Collapse>
          </td>
        </tr>
      )}
    </>
  );
};
export default TableRow;
