// useApi.js
import api from './api'; // Import the configured axios instance
import endpoint from './endPoint'; // Import the API endpoints

const useApi = {
  login: (payload) => api.post(endpoint.login, payload),
  // signup: (payload) => api.post(endpoint.signup, payload),
  // getProfile: () => api.get(endpoint.profile),
};

export default useApi;
