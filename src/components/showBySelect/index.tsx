import { Select } from 'components';

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const ShowBySelect = ({ min = 10, max = 100, step = 10, value, onChange }: Props) => {
  const options = [...new Array(Math.round((max - min) / step + 1))].map((e, i) => {
    const val = min + step * i;
    return {
      value: val,
      label: '' + val,
    };
  });
  const selectedOption = options.find(o => o.value === value);
  return (
    <div className="mb-3 ml-3">
      Показать{' '}
      <Select
        value={selectedOption}
        options={options}
        onChange={(e: any) => onChange(e.value)}
        width={90}
      />{' '}
      записей
    </div>
  );
};
