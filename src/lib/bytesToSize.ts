const units = ['Байтов', 'Кб', 'Мб', 'Гб', 'Тб'];

export const bytesToSize = (value: number | undefined | null) => {
  let l = 0;
  let n = parseInt(String(value), 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};
