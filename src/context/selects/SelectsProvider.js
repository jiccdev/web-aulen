import React, { useState, useEffect } from 'react';
import SelectsContext from './SelectsContext';

/** Api services */
import SelectsServices from '@/services/SelectsServices';

const SelectsProvider = ({ children }) => {
  const [selects, setSelects] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [installmentType, setInstallmentType] = useState([]);
  const [errorServerMsg, setErrorServerMsg] = useState({});

  const getSelects = async () => {
    try {
      const response = await SelectsServices.getSelects();
      const { regions, operationType, typeOfProperty, installment_type } =
        response;
      setSelects(response);
      setRegions(regions);
      setOperationType(operationType);
      setTypeOfProperty(typeOfProperty);
      setInstallmentType(installment_type);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  const getCommunesByRegion = async (stateId) => {
    try {
      const response = await SelectsServices.getCommunesByRegion(stateId);
      setCommunes(response);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  return (
    <SelectsContext.Provider
      value={{
        contextData: [
          getSelects,
          getCommunesByRegion,
          selects,
          regions,
          communes,
          operationType,
          typeOfProperty,
          installmentType,
        ],
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
