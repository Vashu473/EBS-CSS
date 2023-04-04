import axios from 'axios';
import {baseUrl} from "../Constants/Constants"

const client = axios.create({
  baseURL: baseUrl,
});

export const request = ({ ...options }) => {
  // Setting Caching logic for Cloudfront CDN
  client.defaults.headers['Cache-Control'] =
    'no-cache,no-store,must-revalidate,max-age=-1,private';
  client.defaults.headers.Pragma = 'no-cache';
  client.defaults.baseURL = baseUrl;

  // Getting access token for Authorizing requests
  client.interceptors.request.use(
    (interceptRequest) => {
      interceptRequest.headers.Accept = 'application/json';
      interceptRequest.headers['Content-Type'] = 'application/json';
      return interceptRequest;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Handling wrong token or expiry cases
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        window.location.reload();
      } else {
        return Promise.reject(error);
      }
    },
  );

  const onSucess = (response) => response;

  return client(options).then(onSucess);
};

export const api = {
  get: (url, params) => request({ url, ...params }),
  post: (url, data, params) =>
 request({ url, method: 'post', data, ...params }),
  patch: (url, data, params) => request({ url, method: 'patch', data, params }),
  delete: (url) => request({ url, method: 'delete' }),
  put: (url, data) => request({ url, method: 'put', data }),
};
