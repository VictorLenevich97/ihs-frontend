import { useState } from 'react';
import { useGetStudentsNamesQuery, useGetStudentsNamesSearchQuery } from 'store/rating';
import { Container } from 'effects/container';
import { RatingContent } from 'modules';

const LOADING_NAMES_SIZE = 10;

const RatingStudents = () => {
  const [selectPageIndex, setSelectPageIndex] = useState(0);
  const [inputString, setInputString] = useState('');

  const {
    data: dataNames = {
      currentPage: 0,
      names: [],
      totalPages: 0,
      totalResults: 0,
    },
    isFetching: isFetchingNames,
    isError: isErrorNames,
  } = useGetStudentsNamesQuery({
    pageIndex: selectPageIndex,
    showBy: LOADING_NAMES_SIZE,
  });

  const {
    data: dataSearch = [],
    isFetching: isFetchingSearch,
    isError: isErrorSearch,
  } = useGetStudentsNamesSearchQuery(inputString, { skip: !inputString });

  return (
    <Container fullwidth>
      <RatingContent
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
    </Container>
  );
};

export default RatingStudents;
