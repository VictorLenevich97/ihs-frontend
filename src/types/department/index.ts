import { ICategory } from '../categories';

export enum EDepartmentConstant {
  DEPARTMENT_ROOT_ID = '0',
  DEPARTMENT_ID = 'departmentId',
  DEPARTMENT_TITLE = 'departmentTitle',
  DOCUMENT = 'document',
}

export interface IDepartment {
  category?: ICategory | number;
  createdBy?: null | number;
  createdDate?: null | number;
  currentFilesVolume?: null | number;
  departmentPages?: IDepartment[];
  disciplineCount?: null | number;
  documents?: null | number;
  enabled?: boolean;
  filesVolumeThreshold?: null | number;
  id?: number;
  isExtLink?: boolean;
  isTopMenuItem?: boolean;
  link: string;
  modifiedBy?: null | number;
  modifiedDate?: null | number;
  newsPages?: null;
  nextYmkdRegNumber?: number;
  position?: null | number;
  title: string;
  users?: null | number;
  content?: any;
  department?: IDepartment;
}

export interface IRouteDepartmentsParams {
  categoryLink: string;
  departmentLink: string;
  pageLink?: string;
  departmentId?: number;
  departmentTitle?: string;
}
