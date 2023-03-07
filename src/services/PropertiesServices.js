import api from '../../src/api';

const PropertiesServices = {
  getProperties: async (realtorId, statusId) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}`
    );
    return response.data;
  },

  getAllProperties: async (limit, realtorId, statusId) => {
    const response = await api.get(
      `properties?limit=${limit}&realtorId=${realtorId}&statusId=${statusId}`
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

  // Surface M2
  getPropertiesBySurfaceM2: async (realtorId, statusId, surfaceM2) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&surface_m2=${surfaceM2}`
    );
    return response.data;
  },

  // Bedrooms
  getPropertiesByBedrooms: async (realtorId, statusId, bedrooms) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&bedrooms=${bedrooms}`
    );
    return response.data;
  },

  // Bathrooms
  getPropertiesByBathrooms: async (realtorId, statusId, bathrooms) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&bathrooms=${bathrooms}`
    );
    return response.data;
  },

  // Parking Lots (covered)
  getPropertiesByParkingLotsCovered: async (
    realtorId,
    statusId,
    parkingLotsCovered
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&covered_parking_lots=${parkingLotsCovered}`
    );
    return response.data;
  },

  // Parking Lots (uncovered)
  // getPropertiesByParkingLotsUncovered: async (
  //   realtorId,
  //   statusId,
  //   parkingLotsUncovered
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&uncovered_parking_lots=${parkingLotsUncovered}`
  //   );
  //   return response.data;
  // },

  // Operation Type
  getPropertiesByOperationType: async (realtorId, statusId, operationType) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&operationType=${operationType}`
    );
    return response.data;
  },

  // Regions & Communes
  getPropertiesByRegionAndCommune: async (
    realtorId,
    statusId,
    region,
    commune
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&region=${region}&commune=${commune}`
    );
    return response.data;
  },

  // Installment Type
  getPropertiesByInstallmentType: async (
    realtorId,
    statusId,
    installmentType
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&installment_type=${installmentType}`
    );
    return response.data;
  },

  // // ON SUBMIT FORM
  // getPropertiesOnFormSubmit: async (
  //   realtorId,
  //   statusId,
  //   operationType,
  //   typeOfProperty,
  //   regionId,
  //   communeId,
  //   minPrice,
  //   maxPrice,
  //   coveredParkingLots,
  //   bathrooms,
  //   surfaceM2,
  //   bedrooms,
  //   installmentType
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&operationType=${operationType}&typeOfProperty=${typeOfProperty}&region=${regionId}&commune=${communeId}&min_price=${minPrice}&max_price=${maxPrice}&covered_parking_lots=${coveredParkingLots}&bathrooms=${bathrooms}&surface_m2=${surfaceM2}&bedrooms=${bedrooms}&installment_type=${installmentType}`
  //   );
  //   return response.data;
  // },

  getPropertiesOnFormSubmit: async (
    realtorId,
    statusId,
    operationType,
    typeOfProperty,
    region,
    commune,
    minPrice,
    maxPrice,
    coveredParkingLots,
    bathrooms
    // surfaceM2
    // bedrooms
  ) => {
    const response = await api.get(
      `properties?realtorId=${realtorId}&statusId=${statusId}&operationType=${
        operationType || ''
      }&typeOfProperty=${typeOfProperty || ''}&region=${region || ''}&commune=${
        commune || ''
      }&min_price=${minPrice || ''}&max_price=${
        maxPrice || ''
      }&covered_parking_lots=${coveredParkingLots || ''}&bathrooms=${
        bathrooms || ''
      }`
    );
    return response.data;
  },
};

export default PropertiesServices;
