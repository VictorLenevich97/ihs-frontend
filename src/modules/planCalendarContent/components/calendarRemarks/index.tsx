import { useState } from 'react';
import { SearchInput } from 'components/searchInput';

import * as S from './calendarRemarks.styled';

interface CalendarRemarksProps {
  remarks: string;
}

export const CalendarRemarks = ({ remarks }: CalendarRemarksProps) => {
  const [searchString, setSearchString] = useState('');
  return (
    <S.RemarksContainer>
      <S.RemarksTitle size={20} lineHeight={24}>
        Примечания
      </S.RemarksTitle>
      <S.SearchContainer>
        <SearchInput value={searchString} onChange={setSearchString} placeholder={'Поиск'} />
      </S.SearchContainer>
      <S.RemarksText>
        {remarks
          .split('&bsp')
          .map(
            (p, index) =>
              p.toUpperCase().includes(searchString.toUpperCase().trim()) && <p key={index}>{p}</p>,
          )}
      </S.RemarksText>
    </S.RemarksContainer>
  );
};
