import { appApi } from '../api';
import {
  IReqPublicationFilter,
  IResPublicationsObject,
  IPublicationCategories,
  IPublication,
} from 'types';
import { PUBLICATIONS, PUBLICATION_CATEGORIES } from 'constant/endpoints';
import { toQuery } from '../../lib/toQuery';
import { modifyEntities } from '../../lib/entitiesModification';

export const publicationsApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getPublications: builder.query<IResPublicationsObject, IReqPublicationFilter>({
      query: values =>
        `${PUBLICATIONS}?${toQuery({
          subcategories: true,
          visibleOnly: false,
          ...values,
        })}`,
      transformResponse: (response: IResPublicationsObject) => ({
        ...response,
        documents: modifyEntities<IPublication>(response.documents, [
          { fieldName: 'documentCategory' },
        ]),
      }),
    }),
    getPublicationCategories: builder.query<IPublicationCategories[], void>({
      query: () => PUBLICATION_CATEGORIES,
    }),
  }),
  overrideExisting: false,
});
export const { useGetPublicationsQuery, useGetPublicationCategoriesQuery } = publicationsApi;
