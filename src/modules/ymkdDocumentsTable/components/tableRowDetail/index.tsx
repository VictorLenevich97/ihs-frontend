import { useMemo, memo } from 'react';
import { Col } from 'react-bootstrap';

import * as S from './tableRowDetail.styled';

interface Props {
  authors: string;
  certificateNumber: string;
  hoursAmount: number;
  protocolNumberAndDate: string;
  regNumber: number;
  sectionsAmount: number;
  themesAmount: number;
}

export const TableRowRetail = memo(
  ({
    authors,
    certificateNumber,
    hoursAmount,
    protocolNumberAndDate,
    regNumber,
    sectionsAmount,
    themesAmount,
  }: Props) => {
    const detailData = useMemo(() => {
      return [
        { id: 0, label: 'Авторы:', value: authors ? authors : 'Нет информации...' },
        { id: 0, label: 'Номер сертификата:', value: certificateNumber },
        { id: 0, label: 'Количество часов:', value: hoursAmount },
        { id: 0, label: 'Номер протокола:', value: protocolNumberAndDate },
        { id: 0, label: 'Регистрационный номер:', value: regNumber },
        { id: 0, label: 'Количество разделов:', value: sectionsAmount },
        { id: 0, label: 'Количество тем:', value: themesAmount },
      ];
    }, []);

    return (
      <div>
        {detailData.map(({ id, label, value }) => (
          <S.DetailRow key={id}>
            <Col sm={12} md={6}>
              <S.LabelText>{label}</S.LabelText>
            </Col>
            <Col sm={12} md={6}>
              {value}
            </Col>
          </S.DetailRow>
        ))}
      </div>
    );
  },
);
