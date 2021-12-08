export interface IStudentName {
  name: string;
  code: string;
}

export interface IStudentNameResponse {
  currentPage: number;
  names: IStudentName[];
  totalPages: number;
  totalResults: number;
}
export interface IStudentInfo {
  groupNumber: string;
  person: string;
  rank: string;
}
export interface IRatingResponse {
  studentInfo: IStudentInfo | null;
  ratingTerms: {
    rates: number[];
  };
  ratingParts: {
    academyPlace: number;
    departmentPlace: number;
    frs: number;
    groupPlace: number;
    growingRate: number;
    note: null | string;
    pvk: number;
    study: number;
    vnr: number;
    yearPlace: number;
  };
  events: {
    date: string | null;
    name: string;
    workTitle: string;
    place: null | string;
    score: number;
  }[];
  totalRating: number;
}

export interface IModuleRatingProps {
  urlPath?: string;
  titlePage?: string;
  dataNames: IStudentNameResponse;
  isFetchingNames: boolean;
  isErrorNames: boolean;
  dataSearch: IStudentName[];
  isFetchingSearch: boolean;
  isErrorSearch: boolean;
  selectPageIndex: number;
  setSelectPageIndex: (value: any) => void;
  inputString: string;
  setInputString: (value: string) => void;
}
