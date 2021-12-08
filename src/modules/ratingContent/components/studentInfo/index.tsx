import { IStudentInfo } from 'types';

import * as S from '../../ratingContent.styled';

interface Props {
  info: IStudentInfo;
}

export const StudentInfo = ({ info }: Props) => {
  return (
    <S.StudentInfoBlock>
      {info.groupNumber} учебный взвод - {info.rank} {info.person}
    </S.StudentInfoBlock>
  );
};
