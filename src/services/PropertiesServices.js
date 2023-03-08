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
    bedrooms
  ) => {
    const _realtorId = `${realtorId}`;
    const _statusId = `${statusId}`;
    const _operationType = operationType.length > 0 ? operationType : false;
    const _typeOfProperty = typeOfProperty.length > 0 ? typeOfProperty : false;
    const _region = region > 0 ? region : false;
    const _commune = commune.length > 0 ? commune : false;
    const _minPrice = minPrice > 0 ? minPrice : false;
    const _maxPrice = maxPrice > 0 ? maxPrice : false;
    const _coveredParkingLots =
      coveredParkingLots > 0 ? coveredParkingLots : false;
    const _bedrooms = bedrooms > 0 ? bedrooms : false;

    const response = await api.get(
      `properties?realtorId=${_realtorId}&statusId=${_statusId}${
        _operationType ? `&operationType=${_operationType}` : ''
      }${_typeOfProperty ? `&typeOfProperty=${_typeOfProperty}` : ''}${
        _region ? `&region=${_region}` : ''
      }${_commune ? `&commune=${_commune}` : ''}${
        _minPrice ? `&min_price=${_minPrice}` : ''
      }${_maxPrice ? `&max_price=${_maxPrice}` : ''}${
        _coveredParkingLots
          ? `&covered_parking_lots=${_coveredParkingLots}`
          : ''
      }${_bedrooms ? `&bedrooms=${_bedrooms}` : ''}`
    );

    // .get
    // // `properties?realtorId=${realtorId}&statusId=${statusId}&operationType=${
    // //   operationType || ''
    // // }&typeOfProperty=${typeOfProperty || ''}&region=${region || ''}&commune=${
    // //   commune || ''
    // // }&min_price=${minPrice || ''}&max_price=${
    // //   maxPrice || ''
    // // }&covered_parking_lots=${coveredParkingLots || null}&bedrooms=${
    // //   bedrooms || null
    // // }`
    // ();
    return response.data;
  },
};

export default PropertiesServices;
