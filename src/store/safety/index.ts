import { appApi } from '../api';
import { IReqSafetyFilter, IResSafetyObject, ISafety, ISafetyCategories } from 'types';
import { SAFETY, SAFETY_CATEGORIES } from 'constant/endpoints';
import { toQuery } from '../../lib/toQuery';
import { modifyEntities } from '../../lib/entitiesModification';

export const safetyApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getSafety: builder.query<IResSafetyObject, IReqSafetyFilter>({
      query: values =>
        `${SAFETY}?${toQuery({
          subcategories: true,
          visibleOnly: false,
          ...values,
        })}`,
      transformResponse: (response: IResSafetyObject) => ({
        ...response,
        documents: modifyEntities<ISafety>(response.documents, [{ fieldName: 'documentCategory' }]),
      }),
    }),
    getSafetyCategories: builder.query<ISafetyCategories[], void>({
      query: () => SAFETY_CATEGORIES,
    }),
  }),
  overrideExisting: false,
});
export const { useGetSafetyQuery, useGetSafetyCategoriesQuery } = safetyApi;
