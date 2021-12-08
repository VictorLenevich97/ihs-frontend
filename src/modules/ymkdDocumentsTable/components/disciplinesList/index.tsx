import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetYmkdDisciplineQuery } from 'store/ymkdDocuments';
import { isEmpty } from 'lodash';
import { toQuery } from 'lib/toQuery';
import { YMKD_DOCUMENTS } from 'constant/routes';
import { EYmkdDocumentConstant } from 'types';
import { NoDataIndication } from 'components';

import * as S from './disciplinesList.styled';

interface Props {
  departmentId: number;
  disciplineId: number;
}

export const DisciplinewList = ({ departmentId, disciplineId }: Props) => {
  const { data } = useGetYmkdDisciplineQuery(departmentId);
  const history = useHistory();

  const transfromData = useMemo(() => {
    const defaultDiscipline = {
      createdBy: '',
      createdDate: 0,
      department: null,
      enabled: true,
      id: EYmkdDocumentConstant.ROOT_ID,
      modifiedBy: null,
      modifiedDate: null,
      position: 0,
      title: 'Все дисциплины УМКД',
      regNumber: 0,
      ymkd: null,
    };

    let result = [defaultDiscipline];
    if (data) {
      result = [...result, ...(data && data?.disciplines ? data?.disciplines : data)];
    }
    return result;
  }, [data]);

  const handleSelectDiscipline = (id: number) => {
    history.push(`${YMKD_DOCUMENTS}?${toQuery({ discipline: id, department: departmentId })}`);
  };

  if (isEmpty(transfromData)) {
    return <NoDataIndication content="Дисциплин не найдено..." />;
  }

  return (
    <S.Container>
      {transfromData?.map(({ id, title }: { id: number; title: string }) => (
        <S.Item active={disciplineId === id} key={id} onClick={() => handleSelectDiscipline(id)}>
          <S.Item.Content active={disciplineId === id}>{title}</S.Item.Content>
        </S.Item>
      ))}
    </S.Container>
  );
};
