import { appApi } from '../api';
import { IStudentName, IRatingResponse, IStudentNameResponse } from 'types';
import * as endpoint from 'constant/endpoints';
import { toQuery } from 'lib/toQuery';

export const ratingApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getStudentRating: builder.query<IRatingResponse, string>({
      query: arg => `${endpoint.STUDENTS}/${arg}`,
    }),
    getStudentsNames: builder.query<IStudentNameResponse, { pageIndex?: number; showBy?: number }>({
      query: arg =>
        `${endpoint.STUDENTS_NAMES}?${toQuery({
          page: arg.pageIndex || 0,
          showBy: arg.showBy || 10,
        })}`,
    }),
    getStudentsNamesSearch: builder.query<IStudentName[], string>({
      query: arg => `${endpoint.STUDENTS_NAMES_SEARCH}?searchValue=${arg}`,
    }),
    getListenersNames: builder.query<IStudentNameResponse, { pageIndex?: number; showBy?: number }>(
      {
        query: arg =>
          `${endpoint.LISTENERS_NAMES}?${toQuery({
            page: arg.pageIndex || 0,
            showBy: arg.showBy || 10,
          })}`,
      },
    ),
    getListenersNamesSearch: builder.query<IStudentName[], string>({
      query: arg => `${endpoint.LISTENERS_NAMES_SEARCH}?searchValue=${arg}`,
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetStudentRatingQuery,
  useGetStudentsNamesQuery,
  useGetStudentsNamesSearchQuery,
  useGetListenersNamesQuery,
  useGetListenersNamesSearchQuery,
} = ratingApi;
