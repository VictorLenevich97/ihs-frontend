import { INavigation } from 'types';
import { NAVIGATION_TOP_LEVEL } from 'constant/endpoints';
import { appApi } from 'store/api';

export const navigationApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getNavigation: builder.query<INavigation[], void>({
      query: () => NAVIGATION_TOP_LEVEL,
    }),
  }),
  overrideExisting: false,
});

export const { useGetNavigationQuery } = navigationApi;
