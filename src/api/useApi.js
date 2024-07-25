import api from './api'; // Import the configured axios instance
import endpoint from './endpoint'; // Import the API endpoints

const useApi = {
  login: async (payload) => {
    return await api.post(endpoint.login, payload);
  }
};

export default useApi;
