import api from '../../src/api';

const PropertiesServices = {
  getProperties: async (realtorId, statusId) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getProperty: async (id, realtorId, statusId) => {
    const response = await api.get(
      `properties/${id}?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getPagination: async (limit, page, realtorId, statusId) => {
    const response = await api.get(
      `properties?limit=${limit}&page=${page}&realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  /** Advanced filters for properties */
  // Type of property
  getPropertiesByTypeOfProperty: async (
    realtorId,
    statusId,
    typeOfProperty
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&typeOfProperty=${typeOfProperty}`
    );
    return response.data;
  },

  // Min & Max Price
  getPropertiesByMinAndMaxPrice: async (
    realtorId,
    statusId,
    minValue,
    maxValue
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&min_price=${minValue}&max_price=${maxValue}`
    );
    return response.data;
  },
};

export default PropertiesServices;
