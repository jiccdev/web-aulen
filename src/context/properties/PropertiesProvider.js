import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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

  const [totalItems, setTotalItems] = useState('');
  const [statusCodeMsg, setStatusCodeMsg] = useState('');
  const { pathname } = useRouter();

  /** Get Properties */
  const getProperties = async (statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperties(
        statusId,
        companyId
      );

      if (pathname === '/soy-inversionista/unidades-nuevas') {
        const filtredPropertiesBySale = response?.data?.filter((property) => {
          return property?.operation === 'Venta';
        });
        setNewProperties(filtredPropertiesBySale);
      } else {
        return setNewProperties(response.data) || setProperties(response.data);
      }
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  useEffect(() => {
    getProperties(1, 1);
  }, [pathname]);

  /** Get all Properties (Maps) */
  const getAllProperties = async (limit, statusId, companyId) => {
    try {
      const response = await PropertiesServices.getAllProperties(
        limit,
        statusId,
        companyId
      );
      setProperties(response?.data);
      setNewProperties(response?.data);
      setTotalItems(response?.meta?.totalItems);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Property */
  const getProperty = async (id, statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperty(
        id,
        statusId,
        companyId
      );
      setProperty(response);
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Pagination */
  const getPagination = async (limit, page, statusId, companyId) => {
    try {
      const response = await PropertiesServices.getPagination(
        limit,
        page,
        statusId,
        companyId
      );
      setMetaData(response?.meta);
      if (pathname === '/soy-inversionista/unidades-nuevas') {
        const filtredPropertiesBySale = response?.data?.filter((property) => {
          return property?.operation === 'Venta';
        });
        setNewProperties(filtredPropertiesBySale);
      } else {
        return setNewProperties(response.data) || setProperties(response.data);
      }
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  /** Get Total Items from metadata*/
  const getTotalItems = async (statusId, companyId) => {
    try {
      const response = await PropertiesServices.getProperties(
        statusId,
        companyId
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
    statusId,
    companyId,
    typeOfProperty
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByTypeOfProperty(
        statusId,
        companyId,
        typeOfProperty
      );

      if (pathname === '/soy-inversionista/unidades-nuevas') {
        const filtredPropertiesBySale = response?.data?.filter((property) => {
          return property?.operation === 'Venta';
        });
        setNewProperties(filtredPropertiesBySale);
      } else {
        return setNewProperties(response.data) || setProperties(response.data);
      }
    } catch (error) {
      const { statusCode } = error?.response?.data;
      setStatusCodeMsg(statusCode) && new Error(error?.response?.data);
    }
  };

  // Min & Max Price
  const getPropertiesByMinAndMaxPrice = async (
    statusId,
    companyId,
    minValue,
    maxValue
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByMinAndMaxPrice(
        statusId,
        companyId,
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
  const getPropertiesBySurfaceM2 = async (statusId, companyId, surfaceM2) => {
    try {
      const response = await PropertiesServices.getPropertiesBySurfaceM2(
        statusId,
        companyId,
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
  const getPropertiesByBedrooms = async (statusId, companyId, bedrooms) => {
    try {
      const response = await PropertiesServices.getPropertiesByBedrooms(
        statusId,
        companyId,
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
  const getPropertiesByBathrooms = async (statusId, companyId, bathrooms) => {
    try {
      const response = await PropertiesServices.getPropertiesByBathrooms(
        statusId,
        companyId,
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
    statusId,
    companyId,
    parkingLotsCovered
  ) => {
    try {
      const response =
        await PropertiesServices.getPropertiesByParkingLotsCovered(
          statusId,
          companyId,
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
    statusId,
    companyId,
    operationType
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByOperationType(
        statusId,
        companyId,
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
    statusId,
    companyId,
    region,
    commune
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByRegionAndCommune(
        statusId,
        companyId,
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
    statusId,
    companyId,
    installmentType
  ) => {
    try {
      const response = await PropertiesServices.getPropertiesByInstallmentType(
        statusId,
        companyId,
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
    statusId,
    companyId,
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
        statusId,
        companyId,
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
        getAllProperties,
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
