import { appApi } from '../api';
import { DateYMDString, ITimetable, ITimetableEvent } from 'types';
import { TIMETABLE, TIMETABLE_EVENTS } from 'constant/endpoints';

export const timetableApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getTimetable: builder.query<ITimetable[], void>({
      query: () => TIMETABLE,
    }),
    getTimetableEventsByDate: builder.query<ITimetableEvent[], DateYMDString>({
      query: arg => `${TIMETABLE_EVENTS}/${arg}`,
    }),
  }),
  overrideExisting: false,
});
export const { useGetTimetableQuery, useGetTimetableEventsByDateQuery } = timetableApi;
