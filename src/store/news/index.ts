import { INews } from 'types';
import { sortBy } from 'lodash';
import { NEWS } from 'constant/endpoints';
import { appApi } from 'store/api';

export const newsApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<INews[], void>({
      query: () => NEWS,
      transformResponse: (response: INews[]) =>
        sortBy(
          response.filter(({ enabled }) => enabled),
          [({ position }) => position],
        ),
    }),
    getNewsDetail: builder.query<INews, number>({
      query: newsId => `${NEWS}/${newsId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewsQuery, useGetNewsDetailQuery } = newsApi;
