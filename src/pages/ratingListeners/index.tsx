import { useState } from 'react';
import { Container } from 'effects/container';
import { RatingContent } from 'modules';
import { useGetListenersNamesQuery, useGetListenersNamesSearchQuery } from 'store/rating';
import { RATING_LISTENERS } from 'constant/routes';

const LOADING_NAMES_SIZE = 10;

const RatingListeners = () => {
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
  } = useGetListenersNamesQuery({
    pageIndex: selectPageIndex,
    showBy: LOADING_NAMES_SIZE,
  });

  const {
    data: dataSearch = [],
    isFetching: isFetchingSearch,
    isError: isErrorSearch,
  } = useGetListenersNamesSearchQuery(inputString, { skip: !inputString });

  return (
    <Container fullwidth>
      <RatingContent
        urlPath={RATING_LISTENERS}
        titlePage="Рейтинг слушателей:"
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

export default RatingListeners;
