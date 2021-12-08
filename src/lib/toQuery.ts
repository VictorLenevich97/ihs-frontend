export const toQuery = (params: { [key: string]: any }) => {
  return Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === undefined) return;
      return key + '=' + value;
    })
    .filter(e => e)
    .join('&');
};
