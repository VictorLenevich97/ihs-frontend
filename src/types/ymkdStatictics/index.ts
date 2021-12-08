export enum EnumReportType {
  SIMPLE = 'simple',
  DETAILS = 'details',
}

export enum EnumShowReport {
  ACADEMY = 'academy',
  DEPARTMENT = 'department',
}

export enum EnumSelectBy {
  REGISTRATION = 'registration',
  UPDATION = 'updation',
}

export interface IReqStatisticsFilter {
  startDate: string;
  endDate: string;
  departmentId: number | null;
  selectBy: 'string';
  reportType?: string;
}

export interface IResSimpleStatistics {
  departmentNumber: string;
  disciplineCount: number;
  disciplineWithYmkdCount: number;
  security?: number;
}

export interface IResDetailStatistics {
  departmentName: string;
  disciplineName: string;
  ymkdName: string;
  registrationDate: Date;
  lastUpdateDate: Date;
}

export type IResStatistics = IResSimpleStatistics | IResDetailStatistics;
