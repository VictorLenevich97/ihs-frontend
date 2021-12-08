export enum LinkTypeEnum {
  EXTERNAL = 'EXTERNAL',
  INTERNAL = 'INTERNAL',
  RESOURCE = 'RESOURCE',
}

export type LinkType = 'EXTERNAL' | 'INTERNAL' | 'RESOURCE';

export interface INavigation {
  id: number;
  createdBy: number | null;
  createdDate: number | null;
  modifiedBy: number | null;
  modifiedDate: number | null;
  enabled: boolean;
  position: number;
  title: string;
  link: string;
  parent: number | null;
  children: INavigation[];
  linkType: LinkType;
  fixed: boolean;
}
