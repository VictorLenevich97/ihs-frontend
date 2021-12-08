import { ReactComponent as SearchIcon } from 'static/icons/search.svg';
import * as S from './searchInput.styled';

interface SearchInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
}
export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  return (
    <S.Container>
      <S.Icon>
        <SearchIcon />
      </S.Icon>
      <S.Input
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        placeholder={placeholder}
      />
    </S.Container>
  );
};
