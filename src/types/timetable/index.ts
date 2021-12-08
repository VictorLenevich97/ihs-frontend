export interface ITimetable {
  id: number;
  remarks: string;
  month: string;
  timesheetFileLink: string;
  timesheetDocFileLink: string;
  enabled: boolean;
  listTimetableEvents: null;
}
export interface ITimetableEvent {
  id: number;
  date: [number, number, number];
  startTime: [number, number] | null;
  endTime: [number, number] | null;
  eventName: string;
  monthTimetable: number;
}
export type DateYMDString = string;
