import * as S from './checkbox.styled';

interface Props {
  label: string;
  checked: boolean;
  onChange: (value: any) => void;
  value: any;
}

export const Checkbox = ({ label, checked, onChange, value }: Props) => {
  return (
    <S.Label>
      <S.Input value={value} type="checkbox" checked={checked} onChange={onChange} />
      <S.Checkmark>{label}</S.Checkmark>
    </S.Label>
  );
};
