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
    getPagination,
    metaData,
    getTotalItems,
    totalItems,
    page,
    limit,
    getPropertiesByTypeOfProperty,
    getPropertiesByMinAndMaxPrice,
    getPropertiesBySurfaceM2,
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

  console.log('properties', properties);

  return (
    <Fragment>
      <HeaderPage title="Propiedades" />

      <LayoutSection>
        <Properties
          data={properties}
          setProperties={setProperties}
          dataProperty={property}
          realtorId={realtorId}
          statusId={statusId}
          getProperties={getProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
          getPagination={getPagination}
          metaData={metaData}
          getTotalItems={getTotalItems}
          totalItems={totalItems}
          page={page}
          limit={limit}
          getSelects={getSelects}
          selectsList={{
            selects,
            regions,
            operationType,
            typeOfProperty,
            installmentType,
          }}
          // filters
          getPropertiesByTypeOfProperty={getPropertiesByTypeOfProperty}
          getPropertiesByMinAndMaxPrice={getPropertiesByMinAndMaxPrice}
          getPropertiesBySurfaceM2={getPropertiesBySurfaceM2}
        />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
