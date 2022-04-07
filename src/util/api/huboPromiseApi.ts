import axios from 'axios';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const huboPromiseRequest = () => {
  return axios.get(`${REACT_APP_API_URL}`);
};
