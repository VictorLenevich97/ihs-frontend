import { ICategory } from 'types';
import { CATEGORIES } from 'constant/endpoints';
import { appApi } from 'store/api';

export const categoriesApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => CATEGORIES,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoriesApi;
