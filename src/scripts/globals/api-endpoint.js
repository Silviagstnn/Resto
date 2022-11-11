import CONFIG from './config';

// eslint-disable-next-line no-unused-vars
const API_ENDPOINT = {
  DAFTAR: `${CONFIG.BASE_URL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
