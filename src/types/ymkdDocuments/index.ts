import { IDiscipline } from 'types';

export enum EYmkdDocumentConstant {
  ROOT_ID = 0,
}

export enum EYmkdDocumentQuery {
  DEPARTMENT = 'department',
  DISCIPLINE = 'discipline',
}

export interface IReqYmkdDocumentsFilter {
  searchString: string;
  enabled?: boolean;
  startDate?: string | null;
  endDate?: string | null;
  page: number;
  showBy: number;
  sortBy?: string;
  directionAsc?: boolean;
  disciplineId?: number;
}

export interface IYmkdDocument {
  authors: string;
  certificateNumber: string;
  createdBy: string;
  createdDate: number;
  discipline: IDiscipline;
  disciplineId: number;
  enabled: boolean;
  examenationGuidelinesPresent: boolean;
  fillingContentFileLink: string | null;
  fillingFileLink: string | null;
  forSpecialty: string;
  hoursAmount: number;
  documentViewLink: string;
  id: number;
  learningGuidelinesPresent: boolean;
  linkForContentView: string | null;
  linkForYMKD: string | null;
  modifiedBy: string;
  modifiedDate: number;
  position: number;
  protocolNumberAndDate: string;
  refreshDate: Date;
  regNumber: number;
  registrationDate: Date;
  sectionsAmount: number;
  themesAmount: number;
  title: string;
  trainingProgramPresent: boolean;
  ymkdNumber: number;
}

export interface IResYmkdDocumentsObject {
  totalFiltered: number;
  totalPages: number;
  currentPage: number;
  documents: IYmkdDocument[];
}

export interface IYmkdLink {
  label: string;
  url: string;
}
