
import axios from 'axios';
import { staticPath } from '../../../config';

export const FETCH_CAREERS = "fetch_careers";

export function fetchCareers() {

  const request = axios.get(`${staticPath}json/careers.json`);

  return {
    type: FETCH_CAREERS,
    payload: request
  };
}