import { appApi } from '../api';
import { IReqYmkdDocumentsFilter, IResYmkdDocumentsObject, IYmkdLink } from 'types';
import {
  YMKD_DOCUMENTS,
  YMKD_DISCIPLINE_DEPARTMENT,
  YMKD_DISCIPLINE,
  YMKD_LINKS,
} from 'constant/endpoints';
import { toQuery } from '../../lib/toQuery';
import { modifyEntities } from '../../lib/entitiesModification';

const DEFAULT_DEPARTMENT_ID = 0; // Using as default id

export const ymkdDocumentsApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getYmkdDocuments: builder.query<IResYmkdDocumentsObject, IReqYmkdDocumentsFilter>({
      query: (values: any) =>
        `${YMKD_DOCUMENTS}?${toQuery({
          enabled: true,
          directionAsc: true,
          sortBy: '',
          ...values,
        })}`,
      transformResponse: (response: any) => ({
        ...response,
        documents: modifyEntities<any>(response.documents, [{ fieldName: 'discipline' }]),
      }),
    }),
    getYmkdDiscipline: builder.query<any, number>({
      query: (value?: number) =>
        value === DEFAULT_DEPARTMENT_ID
          ? `${YMKD_DISCIPLINE}`
          : `${YMKD_DISCIPLINE_DEPARTMENT}/${value}`,
    }),
    getYmkdLinks: builder.query<IYmkdLink[], void>({
      query: () => YMKD_LINKS,
    }),
  }),
  overrideExisting: false,
});
export const { useGetYmkdDocumentsQuery, useGetYmkdDisciplineQuery, useGetYmkdLinksQuery } =
  ymkdDocumentsApi;
