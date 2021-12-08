import { useGetTimetableQuery } from 'store/timetable';
import { useMemo, useState } from 'react';
import { parseDate } from '../../lib/parseDate';
import { AlertDismissible, DatePicker, Loader } from '../../components';
import { Col, Row } from 'react-bootstrap';
import { CalendarEvents } from './components/calendarEvents';
import { DownloadButtonGroup } from './components/downloadButtonGroup';
import { CalendarRemarks } from './components/calendarRemarks';
import { SubContainer } from 'effects/container';

import * as S from './planCalendarContent.styled';

export const PlanCalendarContent = () => {
  const { data: data = [], isError, isLoading } = useGetTimetableQuery();
  const [calendarDate, setCalendarDate] = useState(new Date());

  const currentMonthData = useMemo(() => {
    const selectedMonth = parseDate(calendarDate, 'yyyy-MM');
    return data.find(d => d.month === selectedMonth);
  }, [data, calendarDate]);

  if (isError) {
    return <AlertDismissible content="Ошибка загрузки календаря..." />;
  }

  if (isLoading) {
    return (
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    );
  }

  return (
    <Row>
      <Col xs={12} lg={'auto'} xl={4} className={'mb-4 mb-lg-0'}>
        <DatePicker
          selected={calendarDate}
          onChange={setCalendarDate}
          onMonthChange={setCalendarDate}
          inline
        />
        <DownloadButtonGroup
          calendarDate={calendarDate}
          timesheetDocFileLink={currentMonthData?.timesheetDocFileLink}
          timesheetFileLink={currentMonthData?.timesheetFileLink}
        />
      </Col>
      <Col lg>
        <SubContainer>
          <CalendarEvents calendarDate={calendarDate} />
        </SubContainer>
      </Col>
      {currentMonthData?.remarks && (
        <Col xs={12} className={'mt-4'}>
          <SubContainer p={'30px'}>
            <CalendarRemarks remarks={currentMonthData.remarks} />
          </SubContainer>
        </Col>
      )}
    </Row>
  );
};
