export interface IReqSafetyFilter {
  documentCategoryId?: number;
  searchString?: string;
  startDate?: string | null;
  endDate?: string | null;
  page: number;
  showBy: number;
  subcategories?: boolean;
  sortBy: string;
  directionAsc: boolean;
}

export interface ISafety {
  attachments: number | null;
  createdBy: string;
  createdDate: number;
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

export interface IResSafetyObject {
  documents: ISafety[];
  totalFiltered: number;
  totalPages: number;
  currentPages: number;
}

export interface ISafetyCategories {
  id: number;
  createdBy: string;
  createdDate: number;
  modifiedBy: string | null;
  modifiedDate: string | null;
  enabled: boolean;
  position: number;
  title: string;
  childCategories: ISafetyCategories[];
  parentCategory: null;
  documents: null;
}
