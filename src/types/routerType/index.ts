export interface RouterType {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  exact?: boolean;
}
