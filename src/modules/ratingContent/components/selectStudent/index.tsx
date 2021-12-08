import React, { useMemo } from 'react';
import { AlertDismissible, Select } from 'components';
import { IStudentName } from 'types';
import { useHistory, useParams } from 'react-router-dom';
import { RATING_STUDENTS } from '../../../../constant/routes';
import { IModuleRatingProps } from 'types';

let dataCollection: { [page: number]: IStudentName[] | undefined } = {};

export const SelectStudent = ({
  urlPath = RATING_STUDENTS,
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

  const history = useHistory();

  dataCollection = useMemo(() => {
    return { ...dataCollection, [selectPageIndex]: dataNames?.names };
  }, [dataNames]);

  const selectOption = useMemo(() => {
    if (inputString && dataSearch) {
      return dataSearch.map(e => ({ value: e.code, label: e.name }));
    }
    return Object.values(dataCollection)
      .map(data => {
        if (!data) return [];
        return data.map(e => ({ value: e.code, label: e.name }));
      })
      .flat();
  }, [dataCollection, dataSearch, inputString]);

  const currentValue = selectOption.find(option => option.value === studentCode);

  const handleChangeValue = (value: string) => {
    if (value) {
      history.push(`${urlPath}/${value}`);
    }
  };

  if (isErrorNames || isErrorSearch) {
    return <AlertDismissible content="Ошибка загрузки студентов..." />;
  }

  return (
    <Select
      value={currentValue}
      options={selectOption || []}
      onChange={(val: any) => handleChangeValue(val.value)}
      placeholder="Выберите курсанта"
      isLoading={isFetchingNames || isFetchingSearch}
      onMenuScrollToBottom={() => setSelectPageIndex((prevPage: any) => prevPage + 1)}
      onInputChange={setInputString}
    />
  );
};
