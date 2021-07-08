import axios from 'axios';

import { store } from '../store';

export const setAxiosAuthHeader = (token) => {
  if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;
};

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
