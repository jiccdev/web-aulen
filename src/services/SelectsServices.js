import api from '../api';

const SelectsServices = {
  getSelects: async () => {
    const response = await api.get(`properties/select-filters`);
    return response.data;
  },
};

export default SelectsServices;
