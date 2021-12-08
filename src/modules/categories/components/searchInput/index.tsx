import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import * as route from 'constant/routes';
import { AlertDismissible } from 'components';
import { SearchControl } from '../searchControl';
import { EmptyContainer } from 'effects/emptyContainer';
import { useGetDepartmentsQuery } from 'store/department';

import * as S from './searchInput.styled';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data = [], isError } = useGetDepartmentsQuery(searchValue);

  const filterData = () =>
    data.map(({ id, title, link, category }) => ({
      value: { id, link, category },
      label: title,
    }));

  const Option = ({ innerProps, label, value }: any) => {
    return (
      <Link
        to={`${route.PAGE}/${value.category.link}/${value.link}?departmentId=${value.id}&departmentTitle=${label}`}
      >
        <S.SearchItem {...innerProps}>{label}</S.SearchItem>
      </Link>
    );
  };

  const NoOptionsMessage = ({ ...props }: any) => {
    return <EmptyContainer {...props}>Нет данных...</EmptyContainer>;
  };

  return (
    <>
      {isError ? (
        <AlertDismissible content="Не удалось найти отдел..." />
      ) : (
        <>
          <S.Container className="mt-2 mb-3">
            <AsyncSelect
              id="search"
              name="search"
              defaultOptions={filterData()}
              components={{
                Option,
                NoOptionsMessage,
                Control: SearchControl,
                DropdownIndicator: null,
              }}
              loadOptions={async () => await filterData()}
              placeholder="Поиск..."
              onInputChange={newValue => setSearchValue(newValue)}
              cacheOptions
              isSearchable
            />
          </S.Container>
        </>
      )}
    </>
  );
};
