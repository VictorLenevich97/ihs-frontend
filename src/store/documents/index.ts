import { appApi } from '../api';
import { IReqDocumentsFilter, IResObject, IDocumentCategories, IDocument } from 'types';
import { DOCUMENTS, DOCUMENTS_CATEGORIES } from 'constant/endpoints';
import { toQuery } from '../../lib/toQuery';
import { modifyEntities } from '../../lib/entitiesModification';

export const documentsApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getDocuments: builder.query<IResObject, IReqDocumentsFilter>({
      query: (values: any) =>
        `${DOCUMENTS}?${toQuery({
          subcategories: true,
          visibleOnly: false,
          ...values,
        })}`,
      transformResponse: (response: IResObject) => ({
        ...response,
        documents: modifyEntities<IDocument>(response.documents, [
          { fieldName: 'documentCategory' },
          { fieldName: 'department' },
        ]),
      }),
    }),
    getDocumentCategories: builder.query<IDocumentCategories[], number>({
      query: value =>
        value !== 0
          ? `${DOCUMENTS_CATEGORIES}/${value}?children=true`
          : `${DOCUMENTS_CATEGORIES}?children=true`,
    }),
  }),
  overrideExisting: false,
});
export const { useGetDocumentsQuery, useGetDocumentCategoriesQuery } = documentsApi;
