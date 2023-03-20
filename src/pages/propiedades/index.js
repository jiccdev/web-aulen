import React, { useState, Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
import LayoutSection from '@/components/Section/LayoutSection';
import HeadPage from '@/components/HeadPage/HeadPage';
import Properties from '@/components/Section/Propiedades/Propiedades';

const Propiedades = () => {
  const {
    properties,
    setProperties,
    property,
    getProperties,
    getAllProperties,
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
    getPropertiesByBedrooms,
    getPropertiesByBathrooms,
    getPropertiesByParkingLotsCovered,
    getPropertiesByOperationType,
    getPropertiesByRegionAndCommune,
    getPropertiesByInstallmentType,
    getPropertiesOnFormSubmit,
  } = useContext(PropertiesContext);
  const { contextData } = useContext(SelectsContext);
  const [
    getSelects,
    getCommunesByRegion,
    selects,
    regions,
    communes,
    operationType,
    typeOfProperty,
    installmentType,
  ] = contextData;
  const [companyId, setCompanyId] = useState(1); //1
  const [statusId, setStatusId] = useState(5); //1
  const router = useRouter();

  // useEffect(() => {
  //   getProperties(5, 5);
  // }, []);

  return (
    <Fragment>
      <HeadPage title="Propiedades" />

      <LayoutSection>
        <Properties
          data={properties}
          router={router}
          setProperties={setProperties}
          dataProperty={property}
          companyId={companyId}
          statusId={statusId}
          getProperties={getProperties}
          getAllProperties={getAllProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
          getPagination={getPagination}
          metaData={metaData}
          getTotalItems={getTotalItems}
          totalItems={totalItems}
          page={page}
          limit={limit}
          getSelects={getSelects}
          getCommunesByRegion={getCommunesByRegion}
          selectsList={{
            selects,
            regions,
            communes,
            operationType,
            typeOfProperty,
            installmentType,
          }}
          getPropertiesByTypeOfProperty={getPropertiesByTypeOfProperty}
          getPropertiesByMinAndMaxPrice={getPropertiesByMinAndMaxPrice}
          getPropertiesBySurfaceM2={getPropertiesBySurfaceM2}
          getPropertiesByBedrooms={getPropertiesByBedrooms}
          getPropertiesByBathrooms={getPropertiesByBathrooms}
          getPropertiesByParkingLotsCovered={getPropertiesByParkingLotsCovered}
          getPropertiesByOperationType={getPropertiesByOperationType}
          getPropertiesByRegionAndCommune={getPropertiesByRegionAndCommune}
          getPropertiesByInstallmentType={getPropertiesByInstallmentType}
          getPropertiesOnFormSubmit={getPropertiesOnFormSubmit}
        />
      </LayoutSection>
    </Fragment>
  );
};

export default Propiedades;
