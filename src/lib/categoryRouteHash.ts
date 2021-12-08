export const ROOT_ID = 0;
const STATIC_ROUTE_STRING = 'category-';

export const parseIdFromHash = (hash: string, routePrefix = STATIC_ROUTE_STRING) => {
  const regExp = new RegExp(`${routePrefix}(\\d+)`);
  const match = hash.match(regExp);
  if (!match) return ROOT_ID;
  return +match[1];
};
export const combineHashFromId = (id: number, routePrefix = STATIC_ROUTE_STRING) => {
  if (id === ROOT_ID) return '';
  return routePrefix + id;
};
