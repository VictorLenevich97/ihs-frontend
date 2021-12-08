export interface IReqPublicationFilter {
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

export interface IPublication {
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

export interface IResPublicationsObject {
  documents: IPublication[];
  totalFiltered: number;
  totalPages: number;
}

export interface IPublicationCategories {
  id: number;
  createdBy: string;
  createdDate: number;
  modifiedBy: string | null;
  modifiedDate: string | null;
  enabled: boolean;
  position: number;
  title: string;
  childCategories: IPublicationCategories[];
  parentCategory: null;
  documents: null;
}
