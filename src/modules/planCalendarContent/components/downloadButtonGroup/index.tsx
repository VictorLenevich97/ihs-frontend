import { Button } from 'react-bootstrap';
import { parseDate } from 'lib/parseDate';

import * as S from './downloadButtonGroup.styled';

interface DownloadButtonGroupProps {
  calendarDate: Date;
  timesheetDocFileLink?: string;
  timesheetFileLink?: string;
}
export const DownloadButtonGroup = ({
  calendarDate,
  timesheetDocFileLink,
  timesheetFileLink,
}: DownloadButtonGroupProps) => {
  const downloadFileFromLink = (link?: string) => {
    if (!link) return;
    window.open(link);
  };

  return (
    <S.PlanCalendarDownloadButtonGroup>
      <Button disabled variant={'outline-primary'} block>
        План-календарь на {parseDate(calendarDate, 'LLLL')}
      </Button>
      <Button
        disabled={!timesheetDocFileLink}
        onClick={() => downloadFileFromLink(timesheetDocFileLink)}
      >
        .doc(x)
      </Button>
      <Button disabled={!timesheetFileLink} onClick={() => downloadFileFromLink(timesheetFileLink)}>
        .xls(x)
      </Button>
    </S.PlanCalendarDownloadButtonGroup>
  );
};
