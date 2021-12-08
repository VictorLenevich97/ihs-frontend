import { format as dateFormat } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const NO_DATA_INDICATOR = 'noData';

export const parseDate = (
  value: number | Date | null | undefined,
  format: string = 'dd.MM.yyyy',
) => {
  if (!value) return undefined;
  return dateFormat(value, format, { locale: ru });
};
