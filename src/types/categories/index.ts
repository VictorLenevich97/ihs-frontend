import { IDepartment } from 'types';

export interface ICategory {
  id: number;
  canHaveYMKD: null | number;
  countDepartnemt: null | number;
  createdBy: string;
  createdDate: null | number;
  departments: IDepartment[];
  enabled: boolean;
  link: string;
  modifiedBy: string;
  modifiedDate: null | number;
  position: number;
  title: string;
  users: any;
}
