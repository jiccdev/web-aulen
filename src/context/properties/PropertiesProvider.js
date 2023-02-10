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
  const [limit, setLimit] = useState(100);
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
    } catch (error) {
      console.log(error);
    }
  };

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

        // meta
        getPagination,
        metaData,
        getTotalItems,
        totalItems,
        page,
        limit,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
