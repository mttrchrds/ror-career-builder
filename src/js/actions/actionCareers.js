
import axios from 'axios';

export const FETCH_CAREERS = "fetch_careers";

export function fetchCareers() {

  const request = axios.get(`${process.env.STATIC_PATH}careers.json`);

  return {
    type: FETCH_CAREERS,
    payload: request
  };
}