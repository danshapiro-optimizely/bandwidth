import axios from 'axios';

// List of all opps
export const FETCH_OPPS = 'fetch_opps';

const ROOT_URL = 'localhost:8080/api';

export function fetchData() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_OPPS,
    payload: request
  }
}
