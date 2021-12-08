import { IAnnouncement } from 'types';
import { ANNOUNCEMENTS } from 'constant/endpoints';
import { appApi } from 'store/api';

export const announcementApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getAnnouncements: builder.query<IAnnouncement[], void>({
      query: () => ANNOUNCEMENTS,
      transformResponse: (response: IAnnouncement[]) => [
        ...response.filter(({ enabled }) => enabled),
      ],
    }),
    getAnnouncementDetail: builder.query<IAnnouncement, number>({
      query: announcementId => `${ANNOUNCEMENTS}/${announcementId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAnnouncementsQuery, useGetAnnouncementDetailQuery } = announcementApi;
