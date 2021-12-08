import { IDepartment } from '../../types';

export interface IReqDocumentsFilter {
  documentCategoryId?: number;
  searchString?: string;
  startDate?: string | null;
  endDate?: string | null;
  page: number;
  showBy: number;
  subcategories: boolean;
  departmentId: number | null | undefined;
  sortBy: string;
  directionAsc: boolean;
}

export interface IDocument {
  attachments: number | null;
  createdBy: string;
  createdDate: number;
  department: IDepartment;
  description: string;
  documentCategory: { id: number; title: string };
  documentFileSize: number;
  documentLink: string;
  documentViewLink: string;
  enabled: boolean;
  fileLink: string;
  fileSize: number;
  fileType: string;
  id: number;
  modifiedBy: number | null;
  modifiedDate: number | null;
  position: number;
  title: string;
}

export interface IResObject {
  documents: IDocument[];
  totalFiltered: number;
  totalPages: number;
}

export interface IDocumentCategories {
  id: number;
  createdBy: string;
  createdDate: number;
  modifiedBy: string | null;
  modifiedDate: string | null;
  enabled: boolean;
  position: number;
  title: string;
  childCategories: IDocumentCategories[];
  parentCategory: null;
  documents: null;
}
