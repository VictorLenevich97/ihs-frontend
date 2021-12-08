import { appApi } from '../api';
import { IReqStatisticsFilter, IResStatistics } from 'types';
import { YMKD_STATISTIC, YMKD_STATISTIC_DETAIL } from 'constant/endpoints';
import { HttpMethods } from 'constant/httpMethods';
import { EnumReportType } from 'types';

export const ymkdStatisticsApi = appApi.injectEndpoints({
  endpoints: builder => ({
    addYmkdStatistics: builder.mutation<IResStatistics[], IReqStatisticsFilter>({
      query: values => ({
        url:
          values.reportType === EnumReportType.DETAILS
            ? `${YMKD_STATISTIC_DETAIL}`
            : `${YMKD_STATISTIC}`,
        method: HttpMethods.POST,
        body: values,
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useAddYmkdStatisticsMutation } = ymkdStatisticsApi;
