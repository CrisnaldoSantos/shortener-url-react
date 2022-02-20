import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, isAuthenticated } from 'utils/dataStorage';

const server = process.env.REACT_APP_API_BASE_PATH;
const api = axios.create({
  baseURL: server,
});

api.interceptors.request.use(async (initialConfig: AxiosRequestConfig) => {
  const config = initialConfig;
  if (isAuthenticated() && config.headers) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  return config;
});

export { api };
