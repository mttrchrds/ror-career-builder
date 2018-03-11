import axios from 'axios';
import { staticPath } from '../../../config';

export const FETCH_ABILITIES = "fetch_abilities";
export const RESET_ABILITIES = "reset_abilities";

export function fetchAbilities(slug) {

  const request = axios.get(`${staticPath}json/abilities/${slug}.json`);

  return {
    type: FETCH_ABILITIES,
    payload: request
  };
}

export function resetAbilities() {
  
  return {
    type: RESET_ABILITIES,
    payload: []
  };
}