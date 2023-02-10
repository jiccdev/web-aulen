import React, { useState, Fragment, useContext, useEffect } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import LayoutSection from '@/components/Section/LayoutSection';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import Properties from '@/components/Section/Propiedades/Propiedades';

const Propiedades = () => {
  const {
    properties,
    setProperties,
    property,
    getProperties,
    newProperties,
    setNewProperties,
  } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [
    getSelects,
    selects,
    regions,
    operationType,
    typeOfProperty,
    installmentType,
  ] = contextData;
  const [realtorId, setRealtorId] = useState(1);
  const [statusId, setStatusId] = useState(1);

  useEffect(() => {
    getProperties(5, 5);
  }, []);

  return (
    <Fragment>
      <HeaderPage title="Propiedades" />

      <LayoutSection>
        <Properties
          // Properties
          data={properties}
          setProperties={setProperties}
          dataProperty={property}
          realtorId={realtorId}
          statusId={statusId}
          getProperties={getProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
          // Selects
          getSelects={getSelects}
          selectsList={{
            selects,
            regions,
            operationType,
            typeOfProperty,
            installmentType,
          }}
        />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
