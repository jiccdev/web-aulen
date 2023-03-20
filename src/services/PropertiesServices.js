import api from '../../src/api';

const PropertiesServices = {
  // getProperties: async (realtorId, statusId) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}`
  //   );
  //   return response.data;
  // },

  // ✅
  getProperties: async (statusId, companyId) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  // getAllProperties: async (limit, realtorId, statusId) => {
  //   const response = await api.get(
  //     `properties?limit=${limit}&realtorId=${realtorId}&statusId=${statusId}`
  //   );
  //   return response.data;
  // },

  // ✅
  getAllProperties: async (limit, statusId, companyId) => {
    const response = await api.get(
      `properties?limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  // getProperty: async (id, realtorId, statusId) => {
  //   const response = await api.get(
  //     `properties/${id}?realtorId=${realtorId}&statusId=${statusId}`
  //   );
  //   return response.data;
  // },

  // ✅
  getProperty: async (id, statusId, companyId) => {
    const response = await api.get(
      `properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  // getPagination: async (limit, page, realtorId, statusId) => {
  //   const response = await api.get(
  //     `properties?limit=${limit}&page=${page}&realtorId=${realtorId}&statusId=${statusId}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPagination: async (limit, page, statusId, companyId) => {
    const response = await api.get(
      `properties?limit=${limit}&page=${page}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  /** Advanced filters for properties */
  // Type of property
  // getPropertiesByTypeOfProperty: async (
  //   realtorId,
  //   statusId,
  //   typeOfProperty
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&typeOfProperty=${typeOfProperty}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByTypeOfProperty: async (
    statusId,
    companyId,
    typeOfProperty
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&typeOfProperty=${typeOfProperty}`
    );
    return response.data;
  },

  // Min & Max Price
  // getPropertiesByMinAndMaxPrice: async (
  //   realtorId,
  //   statusId,
  //   minValue,
  //   maxValue
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&min_price=${minValue}&max_price=${maxValue}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByMinAndMaxPrice: async (
    statusId,
    companyId,
    minValue,
    maxValue
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&min_price=${minValue}&max_price=${maxValue}`
    );
    return response.data;
  },

  // Surface M2
  // getPropertiesBySurfaceM2: async (realtorId, statusId, surfaceM2) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&surface_m2=${surfaceM2}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesBySurfaceM2: async (statusId, companyId, surfaceM2) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&surface_m2=${surfaceM2}`
    );
    return response.data;
  },

  // Bedrooms
  // getPropertiesByBedrooms: async (realtorId, statusId, bedrooms) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&bedrooms=${bedrooms}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByBedrooms: async (statusId, companyId, bedrooms) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&bedrooms=${bedrooms}`
    );
    return response.data;
  },

  // Bathrooms
  // getPropertiesByBathrooms: async (realtorId, statusId, bathrooms) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&bathrooms=${bathrooms}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByBathrooms: async (statusId, companyId, bathrooms) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&bathrooms=${bathrooms}`
    );
    return response.data;
  },

  // Parking Lots (covered)
  // getPropertiesByParkingLotsCovered: async (
  //   realtorId,
  //   statusId,
  //   parkingLotsCovered
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&covered_parking_lots=${parkingLotsCovered}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByParkingLotsCovered: async (
    statusId,
    companyId,
    parkingLotsCovered
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&covered_parking_lots=${parkingLotsCovered}`
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
  // getPropertiesByOperationType: async (realtorId, statusId, operationType) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&operationType=${operationType}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByOperationType: async (statusId, companyId, operationType) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&operationType=${operationType}`
    );
    return response.data;
  },

  // Regions & Communes
  // getPropertiesByRegionAndCommune: async (
  //   realtorId,
  //   statusId,
  //   region,
  //   commune
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&region=${region}&commune=${commune}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByRegionAndCommune: async (
    statusId,
    companyId,
    region,
    commune
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&region=${region}&commune=${commune}`
    );
    return response.data;
  },

  // Installment Type
  // getPropertiesByInstallmentType: async (
  //   realtorId,
  //   statusId,
  //   installmentType
  // ) => {
  //   const response = await api.get(
  //     `properties?realtorId=${realtorId}&statusId=${statusId}&installment_type=${installmentType}`
  //   );
  //   return response.data;
  // },

  // ✅
  getPropertiesByInstallmentType: async (
    statusId,
    companyId,
    installmentType
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&installment_type=${installmentType}`
    );
    return response.data;
  },

  getPropertiesOnFormSubmit: async (
    statusId,
    companyId,
    operationType,
    typeOfProperty,
    region,
    commune,
    minPrice,
    maxPrice,
    coveredParkingLots,
    bedrooms,
    surfaceM2,
    bathrooms,
    installmentType
  ) => {
    const _statusId = `${statusId}`;
    const _companyId = `${companyId}`;
    const _operationType = operationType.length > 0 ? operationType : false;
    const _typeOfProperty = typeOfProperty.length > 0 ? typeOfProperty : false;
    const _region = region > 0 ? region : false;
    const _commune = commune.length > 0 ? commune : false;
    const _minPrice = minPrice > 0 ? minPrice : false;
    const _maxPrice = maxPrice > 0 ? maxPrice : false;
    const _coveredParkingLots =
      coveredParkingLots > 0 ? coveredParkingLots : false;
    const _bedrooms = bedrooms > 0 || bedrooms > '0' ? bedrooms : false;
    const _surfaceM2 = surfaceM2 > 0 || surfaceM2 > '0' ? surfaceM2 : false;
    const _bathrooms = bathrooms > 0 || bathrooms > '0' ? bathrooms : false;
    const _installmentType =
      installmentType.length > 0 ? installmentType : false;

    const response = await api.get(
      `properties?statusId=${_statusId}&companyId=${_companyId}${
        _operationType ? `&operationType=${_operationType}` : ''
      }${_typeOfProperty ? `&typeOfProperty=${_typeOfProperty}` : ''}${
        _region ? `&region=${_region}` : ''
      }${_commune ? `&commune=${_commune}` : ''}${
        _minPrice ? `&min_price=${_minPrice}` : ''
      }${_maxPrice ? `&max_price=${_maxPrice}` : ''}${
        _coveredParkingLots
          ? `&covered_parking_lots=${_coveredParkingLots}`
          : ''
      }${_bedrooms ? `&bedrooms=${_bedrooms}` : ''}${
        _surfaceM2 ? `&surface_m2=${_surfaceM2}` : ''
      }${_bathrooms ? `&bathrooms=${_bathrooms}` : ''}${
        _installmentType ? `&installment_type=${_installmentType}` : ''
      }`
    );
    return response.data;
  },
};

export default PropertiesServices;
