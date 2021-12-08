import { useState, useEffect } from 'react';
import { EnumSelectBy } from 'types';

import * as S from './ymkdChartDatePicker.styled';

export const ChartDatePicker = (props: any) => {
  const d = new Date();
  d.setDate(d.getDate() - 365);
  const [dateRange, setDateRange] = useState([d, new Date()]);
  const [startDate, endDate] = dateRange;

  const updProps = (startDate: any, endDate: any, selectBy = EnumSelectBy.REGISTRATION) => {
    props.onChangeDateHandler({
      startDate,
      endDate,
      //boilerplate parameter for request working
      selectBy
    });
  }

  useEffect(() => {
    updProps(startDate, endDate)
  }, []);

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    const newStartDate = new Date(endDate);

    if(value === "week") {
      newStartDate.setDate(endDate.getDate() - 7);
    }

    if(value === "month") {
      newStartDate.setDate(endDate.getDate() - 30);
    }

    if(value === "year") {
      newStartDate.setDate(endDate.getDate() - 365);
    }

    setDateRange([newStartDate, endDate]);

    updProps(newStartDate, endDate)
  }

  const handleUpdateRange = (updateRange: any) => {
    setDateRange(updateRange);

    updProps(updateRange[0], updateRange[1])
  }

  return (
    <S.DateRange>
      <S.RadioToolbar>
        <S.Radio id="radioWeek" value="week" onChange={handleRadioChange}/>
        <S.Label htmlFor="radioWeek">Неделя</S.Label>

        <S.Radio id="radioMonth" value="month" onChange={handleRadioChange}/>
        <S.Label htmlFor="radioMonth">Месяц</S.Label>

        <S.Radio id="radioYear" value="year" onChange={handleRadioChange} defaultChecked/>
        <S.Label htmlFor="radioYear">Год</S.Label>
      </S.RadioToolbar>

      <S.DatePickerGroup>
        <S.DatePickerText>Выбор даты</S.DatePickerText>
        <S.CustomDatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={updateRange => handleUpdateRange(updateRange)}
        />
      </S.DatePickerGroup>
    </S.DateRange>
  );
};
