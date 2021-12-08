import { useCallback, useEffect, useState } from 'react';
import { parseDate } from '../../lib/parseDate';

export default (format: string = 'd MMMM, HH:mm') => {
  const getNowDate = useCallback(() => parseDate(new Date(), format), [format]);

  const [curDate, setCurDate] = useState(getNowDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurDate(getNowDate());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return { formattedDate: curDate, numberDate: +new Date() };
};
