import { IDepartment, IRouteDepartmentsParams } from 'types';
import { DEPARTMENTS, DEPARTMENTS_ALL_FACULTY, PAGE } from 'constant/endpoints';
import { appApi } from 'store/api';
import { modifyEntities } from 'lib/entitiesModification';

export const departmentApi = appApi.injectEndpoints({
  endpoints: builder => ({
    getDepartments: builder.query<IDepartment[], string>({
      query: value => (value !== null ? `${DEPARTMENTS}?search=${value}` : DEPARTMENTS),
      transformResponse: (response: IDepartment[]) =>
        modifyEntities<IDepartment>(response, [{ fieldName: 'category' }]),
    }),
    getDepartmentDetail: builder.query<IDepartment[], IRouteDepartmentsParams>({
      query: values => `${PAGE}/${values.categoryLink}/${values.departmentLink}`,
      transformResponse: (response: IDepartment[]) =>
        modifyEntities<IDepartment>(
          [...response.filter(({ enabled }) => enabled)],
          [{ fieldName: 'department' }],
        ),
    }),
    getDepartmentsAllFaculty: builder.query<IDepartment[], void>({
      query: () => DEPARTMENTS_ALL_FACULTY,
      transformResponse: (response: IDepartment[]) =>
        modifyEntities<IDepartment>(response, [{ fieldName: 'category' }]),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentDetailQuery,
  useGetDepartmentsAllFacultyQuery,
} = departmentApi;
