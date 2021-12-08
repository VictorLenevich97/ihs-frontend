import { Col } from 'react-bootstrap';
import { useGetStudentRatingQuery } from 'store/rating';
import { SelectStudent } from './components/selectStudent';
import { useParams } from 'react-router-dom';
import { ChartAndTables } from './components/chartAndTables';
import { Title } from 'effects/typography';
import { StudentInfo } from './components/studentInfo';
import { IModuleRatingProps } from 'types';

import * as S from './ratingContent.styled';

export const RatingContent = ({
  urlPath,
  titlePage = 'Рейтинг курсантов:',
  dataNames,
  isFetchingNames,
  isErrorNames,
  dataSearch,
  isFetchingSearch,
  isErrorSearch,
  selectPageIndex,
  setSelectPageIndex,
  inputString,
  setInputString,
}: IModuleRatingProps) => {
  const { studentCode } = useParams<{ studentCode?: string }>();
  const {
    data: studentData,
    isFetching,
    isError,
  } = useGetStudentRatingQuery(studentCode || '', {
    skip: !studentCode,
  });

  return (
    <S.Content>
      <S.SelectContainer>
        <Col sm={6} xl={8}>
          <Title size={26} lineHeight={50}>
            {titlePage}
          </Title>
        </Col>
        <Col sm={6} xl={4}>
          <SelectStudent
            urlPath={urlPath}
            dataNames={dataNames}
            isFetchingNames={isFetchingNames}
            isErrorNames={isErrorNames}
            dataSearch={dataSearch}
            isFetchingSearch={isFetchingSearch}
            isErrorSearch={isErrorSearch}
            selectPageIndex={selectPageIndex}
            setSelectPageIndex={setSelectPageIndex}
            inputString={inputString}
            setInputString={setInputString}
          />
        </Col>
      </S.SelectContainer>

      {studentData && (
        <>
          {studentData.studentInfo && <StudentInfo info={studentData.studentInfo} />}
          <ChartAndTables studentData={studentData} isLoading={isFetching} isError={isError} />
        </>
      )}
    </S.Content>
  );
};
