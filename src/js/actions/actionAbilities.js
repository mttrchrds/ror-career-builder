
import axios from 'axios';

export const FETCH_ABILITIES = "fetch_abilities";

const JSON_ROOT = '/json/';

export function fetchAbilities(slug) {

  const request = axios.get(`${JSON_ROOT}/abilities/${slug}.json`);

  return {
    type: FETCH_ABILITIES,
    payload: request
  };
}