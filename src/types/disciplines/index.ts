import { IDepartment } from '../department';

export interface IDiscipline {
  createdBy: string;
  createdDate: number;
  department: IDepartment;
  enabled: boolean;
  id: number;
  modifiedBy: number | null;
  modifiedDate: number | null;
  position: number;
  title: string;
  regNumber: number;
  ymkd: any[]; // Will create interface
}

export interface IResYmkdDisciplineObject {
  disciplines: IDiscipline[];
  nextDisciplineRegNumber: number;
}
