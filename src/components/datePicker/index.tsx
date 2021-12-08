import * as S from './datePicker.styled';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);

interface DatePickerProps {
  selected?: Date;
  onChange: (date: any) => void;
  onMonthChange?: (date: Date) => void;
  inline?: boolean;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  selectsRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  isClearable?: boolean;
}

export const DatePicker = (props: DatePickerProps) => {
  return (
    <S.DatePickerContainer>
      <ReactDatePicker {...props} locale="ru" dateFormat={'dd.MM.yyyy'} />
    </S.DatePickerContainer>
  );
};
