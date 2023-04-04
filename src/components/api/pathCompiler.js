import { compile } from 'path-to-regexp';

export const pathToUrl = (path, params = {}) => {
  return compile(path)(params);
};
