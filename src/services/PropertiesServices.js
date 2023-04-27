import api from '../../src/api';

const PropertiesServices = {
  getProperties: async (statusId = 1, companyId = 15) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getAllProperties: async (limit, statusId = 1, companyId = 15) => {
    const response = await api.get(
      `properties?limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getProperty: async (id, statusId = 1, companyId = 15) => {
    const response = await api.get(
      `properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getPagination: async (limit, page, statusId = 1, companyId = 15) => {
    const response = await api.get(
      `properties?limit=${limit}&page=${page}&statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getPropertiesByTypeOfProperty: async (
    statusId = 1,
    companyId = 15,
    typeOfProperty
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&typeOfProperty=${typeOfProperty}`
    );
    return response.data;
  },

  getPropertiesByMinAndMaxPrice: async (
    statusId = 1,
    companyId = 15,
    minValue,
    maxValue
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&min_price=${minValue}&max_price=${maxValue}`
    );
    return response.data;
  },

  getPropertiesBySurfaceM2: async (statusId = 1, companyId = 15, surfaceM2) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&surface_m2=${surfaceM2}`
    );
    return response.data;
  },

  getPropertiesByBedrooms: async (statusId = 1, companyId = 15, bedrooms) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&bedrooms=${bedrooms}`
    );
    return response.data;
  },

  getPropertiesByBathrooms: async (statusId = 1, companyId = 15, bathrooms) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&bathrooms=${bathrooms}`
    );
    return response.data;
  },

  getPropertiesByParkingLotsCovered: async (
    statusId = 1,
    companyId = 15,
    parkingLotsCovered
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&covered_parking_lots=${parkingLotsCovered}`
    );
    return response.data;
  },

  getPropertiesByOperationType: async (
    statusId = 1,
    companyId = 15,
    operationType
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&operationType=${operationType}`
    );
    return response.data;
  },

  getPropertiesByRegionAndCommune: async (
    statusId = 1,
    companyId = 15,
    region,
    commune
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&region=${region}&commune=${commune}`
    );
    return response.data;
  },

  getPropertiesByInstallmentType: async (
    statusId = 1,
    companyId = 15,
    installmentType
  ) => {
    const response = await api.get(
      `properties?statusId=${statusId}&companyId=${companyId}&installment_type=${installmentType}`
    );
    return response.data;
  },

  getPropertiesOnFormSubmit: async (
    statusId = 1,
    companyId = 15,
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
