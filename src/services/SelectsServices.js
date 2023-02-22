import api from '../api';

const SelectsServices = {
  getSelects: async () => {
    const response = await api.get(`properties/select-filters`);
    return response.data;
  },

  getCommunesByRegion: async (stateId) => {
    const response = await api.get(`properties/communes?stateId=${stateId}`);
    return response.data;
  },
};

export default SelectsServices;
