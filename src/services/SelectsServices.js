import api from '../api';
import axios from 'axios';

const SelectsServices = {
  getSelects: async () => {
    const response = await axios.get(
      `http://190.114.255.247:5050/properties/select-filters`
    );
    return response.data;
  },
};

// const SelectsServices = {
//   getSelects: async () => {
//     const response = await api.get(`properties/select-filters`);
//     return response.data;
//   },
// };

export default SelectsServices;
