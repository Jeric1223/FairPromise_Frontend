import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);

export const Request = (url: string) => {
  return axios
    .get(`${BASE_URL}${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response;
    });
};
