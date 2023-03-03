import React, { useState } from 'react';
import PropertiesContext from './PropertiesContext';

/** API Services */
import PropertiesServices from '../../services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [newProperties, setNewProperties] = useState([]);
  const [property, setProperty] = useState({});
  const [metaData, setMetaData] = useState({});
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  const [limitInMap, setLimitInMap] = useState(20);

  const [totalItems, setTotalItems] = useState(null);
  const [statusCodeMsg, setStatusCodeMsg] = useState('');

  /** Get Properties */
  const getProperties = async (realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperties(
        realtorId,
        statusId
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Property */
  const getProperty = async (id, realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperty(
        id,
        realtorId,
        statusId
      );
      setProperty(response);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Pagination */
  const getPagination = async (limit, page, realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getPagination(
        limit,
        page,
        realtorId,
        statusId
      );
      setMetaData(response?.meta);
      setNewProperties(response.data);
      setProperties(response.data);
    } catch (error) {}
  };

  /** Get Total Items from metadata*/
  const getTotalItems = async (realtorId, statusId) => {
    try {
      const response = await PropertiesServices.getProperties(
        realtorId,
        statusId
      );
      setTotalItems(response.meta.totalItems);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Advanced filters for properties */
  // Type of property
  const getPropertiesByTypeOfProperty = async (
    realtorId,
    statusId,
    typeOfProperty
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByTypeOfProperty(
        realtorId,
        statusId,
        typeOfProperty
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Min & Max Price
  const getPropertiesByMinAndMaxPrice = async (
    realtorId,
    statusId,
    minValue,
    maxValue
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByMinAndMaxPrice(
        realtorId,
        statusId,
        minValue,
        maxValue
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Surface M2
  const getPropertiesBySurfaceM2 = async (realtorId, statusId, surfaceM2) => {
    try {
      const response = await PropertiesServices.getPropertiesBySurfaceM2(
        realtorId,
        statusId,
        surfaceM2
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Bedrooms
  const getPropertiesByBedrooms = async (realtorId, statusId, bedrooms) => {
    try {
      const response = await PropertiesServices.getPropertiesByBedrooms(
        realtorId,
        statusId,
        bedrooms
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Bathrooms
  const getPropertiesByBathrooms = async (realtorId, statusId, bathrooms) => {
    try {
      const response = await PropertiesServices.getPropertiesByBathrooms(
        realtorId,
        statusId,
        bathrooms
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // ParkingLotsCovered
  const getPropertiesByParkingLotsCovered = async (
    realtorId,
    statusId,
    parkingLotsCovered
  ) => {
    try {
      const response =
        await PropertiesServices.getPropertiesByParkingLotsCovered(
          realtorId,
          statusId,
          parkingLotsCovered
        );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Operation Type
  const getPropertiesByOperationType = async (
    realtorId,
    statusId,
    operationType
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByOperationType(
        realtorId,
        statusId,
        operationType
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Regions & Communes
  const getPropertiesByRegionAndCommune = async (
    realtorId,
    statusId,
    region,
    commune
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByRegionAndCommune(
        realtorId,
        statusId,
        region,
        commune
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  const getPropertiesByInstallmentType = async (
    realtorId,
    statusId,
    installmentType
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByInstallmentType(
        realtorId,
        statusId,
        installmentType
      );

      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // on form submit
  const getPropertiesOnFormSubmit = async (
    realtorId,
    statusId,
    operationType,
    typeOfProperty,
    regionId,
    communeId,
    minPrice,
    maxPrice,
    coveredParkingLots,
    bathrooms,
    surfaceM2,
    bedrooms,
    installmentType
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesOnFormSubmit(
        realtorId,
        statusId,
        operationType,
        typeOfProperty,
        regionId,
        communeId,
        minPrice,
        maxPrice,
        coveredParkingLots,
        bathrooms,
        surfaceM2,
        bedrooms,
        installmentType
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        setProperties,
        property,
        getProperties,
        getProperty,
        newProperties,
        setNewProperties,
        getPagination,
        metaData,
        getTotalItems,
        totalItems,
        page,
        limit,
        limitInMap,
        getPropertiesByTypeOfProperty,
        getPropertiesByMinAndMaxPrice,
        getPropertiesBySurfaceM2,
        getPropertiesByBedrooms,
        getPropertiesByBathrooms,
        getPropertiesByParkingLotsCovered,
        getPropertiesByOperationType,
        getPropertiesByRegionAndCommune,
        getPropertiesByInstallmentType,
        getPropertiesOnFormSubmit,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
