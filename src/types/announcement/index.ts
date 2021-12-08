export interface IAnnouncement {
  id: number;
  abbreviation: string;
  content?: string;
  createdBy?: number | null;
  createdDate: number | null;
  enabled?: boolean;
  fullcontentAnnouncement?: boolean;
  imageLink: string;
  modifiedBy?: number | null;
  modifiedDate?: number | null;
  position?: number | null;
  relevancePeriodEndDate?: number | null;
  relevancePeriodStartDate?: any;
  title: string;
  showTime?: number;
}
