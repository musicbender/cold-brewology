import axios from 'axios';

const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || '3001'}/api`) :
  '/api';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": 'application/json',
  },
});

const articleConfig = {
  previewMax: 200
}

export {
  API,
  API_URL,
  articleConfig,
};
