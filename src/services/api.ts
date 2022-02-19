import axios from 'axios';

const server = process.env.REACT_APP_API_BASE_PATH;
export const api = axios.create({
  baseURL: server,
});
