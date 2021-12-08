import { Table as RBTable } from 'react-bootstrap';
import { ITableHeadTitle, ITableRowData } from 'types';
import { AlertDismissible, Loader } from 'components';

import * as S from './table.styled';
import { NoData } from './table.styled';
import TableRow from './components/tableRow';

interface Props {
  headTitles: ITableHeadTitle[];
  data: ITableRowData[];
  isLoading?: boolean;
  error?: boolean;
  errorMessage?: string;
  setActiveDirectionAsc?: any;
  activeDirectionAsc?: boolean;
  sortBy?: string;
}

export const Table = ({
  headTitles,
  data,
  isLoading,
  error,
  errorMessage = 'Не удалось загрузить таблицу...',
  setActiveDirectionAsc,
  activeDirectionAsc,
  sortBy,
}: Props) => {
  if (error) {
    return <AlertDismissible content={errorMessage} />;
  }
  const isExistData = !!data.length;

  return (
    <S.TableWrapper className="table-responsive">
      <RBTable id="table" bordered>
        <thead>
          <tr>
            {headTitles.map(({ id, value, isSort, onSortClick }) => (
              <th key={id}>
                <S.TableHeaderRow justifyContent={id === 'action' ? 'center' : 'space-between'}>
                  <span>{value}</span>
                  {isSort && (
                    <S.ArrowGroup onClick={onSortClick}>
                      <S.UpSortArrow
                        active={activeDirectionAsc && sortBy === id}
                        onClick={() => setActiveDirectionAsc(true)}
                      />
                      <S.DownSortArrow
                        active={!activeDirectionAsc && sortBy === id}
                        onClick={() => setActiveDirectionAsc(false)}
                      />
                    </S.ArrowGroup>
                  )}
                </S.TableHeaderRow>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={headTitles.length}>
                <Loader minHeight={0} />
              </td>
            </tr>
          ) : isExistData ? (
            data.map((item, index) => <TableRow data={item} key={item.id} index={index} />)
          ) : (
            <tr>
              <td colSpan={headTitles.length}>
                <NoData>Нет данных</NoData>
              </td>
            </tr>
          )}
        </tbody>
      </RBTable>
    </S.TableWrapper>
  );
};
