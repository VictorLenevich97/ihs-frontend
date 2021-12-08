export interface INews {
  id: number;
  createdBy?: number | null;
  createdDate?: number | null;
  modifiedBy?: number | null;
  modifiedDate?: number | null;
  enabled?: boolean;
  position?: number | null;
  title: string;
  content?: string;
  abbreviation?: string;
  newsFileLinks: string[];
  file?: string | null;
  department?: any;
}
