import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const client = axios.create({ baseURL: BASE_URL });

const setAuthToken = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
};

const setContentType = (config) => {
  config.headers['Content-Type'] = 'application/json';
};

const isSuccessfulStatus = (status) =>
  (status >= 200 && status < 300) || status === 304;

const isJsonResponse = (headers) =>
  headers['content-type'] &&
  headers['content-type'].includes('application/json');

client.interceptors.request.use(
  (config) => {
    setAuthToken(config);
    setContentType(config);
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => {
    if (isSuccessfulStatus(response.status)) {
      return isJsonResponse(response.headers) ? response.data : null;
    } else {
      const { error, message, statusCode } = response.data;
      return Promise.reject(
        new Error(
          `statusCode: ${statusCode}, message: ${message}, error: ${error}`
        )
      );
    }
  },
  (error) => Promise.reject(error)
);
