import { ReactComponent as SearchIcon } from 'static/icons/search.svg';

import * as S from './searchControl.styled';

export const SearchControl = ({ children, ...props }: any) => {
  return (
    <S.Container {...props}>
      <SearchIcon className="ml-3" />
      {children}
    </S.Container>
  );
};
