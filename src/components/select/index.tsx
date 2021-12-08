import ReactSelect, { components } from 'react-select';
import { themeVariables } from 'effects/variables';
import { ReactComponent as Arrow } from 'static/icons/arrow.svg';

import * as S from './select.styled';
import { debounce } from 'lodash';

interface Option<T> {
  options?: Option<T>[];
  label: string;
  value?: T;
}

interface Props<T> {
  value?: Option<T>;
  options: Option<T>[];
  onChange: (value: any) => void;
  onInputChange?: (value: string) => void;
  placeholder?: string;
  width?: number;
  minHeight?: number;
  isLoading?: boolean;
  onMenuScrollToBottom?: () => void;
  isGroup?: boolean;
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Arrow className="ml-1 mr-1" />
    </components.DropdownIndicator>
  );
};

export const Select = function <T>({
  value,
  options,
  onChange,
  onInputChange,
  placeholder,
  width,
  minHeight,
  isLoading,
  onMenuScrollToBottom,
}: Props<T>) {
  const handleInputChange = debounce((newValue: string) => {
    onInputChange && onInputChange(newValue);
  }, 500);

  const Control = ({ children, ...rest }: any) => (
    <S.CustomControl {...rest}>{children}</S.CustomControl>
  );

  return (
    <S.SelectContainer width={width}>
      <ReactSelect
        id="select"
        value={value}
        onChange={e => e && onChange(e)}
        options={options}
        placeholder={placeholder}
        components={{
          DropdownIndicator,
          Control,
        }}
        noOptionsMessage={() => 'Нет данных...'}
        loadingMessage={() => 'Поиск...'}
        onInputChange={handleInputChange}
        styles={{
          control: (base: any) => ({
            ...base,
            minHeight: minHeight,
          }),
        }}
        isLoading={isLoading}
        onMenuScrollToBottom={onMenuScrollToBottom}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: themeVariables.primaryColor,
            primary50: themeVariables.secondColor,
            primary25: themeVariables.secondColor_hover,
          },
        })}
      />
    </S.SelectContainer>
  );
};
