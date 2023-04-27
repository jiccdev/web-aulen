import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdvancedSearchForm from '@/components/Forms/AdvancedSearchForm';
import OutstandingProjects from './OutstandingProjects';
import PropertyItem from './PropertyItem';
import IconFilter from '../../IconFilter/IconFilter';
import PaginationComponent from '@/components/Pagination/Pagination';
import SpinnerComponent from '@/components/Spinner/SpinnerComponent';
import Loader from '@/components/Loader/Loader';
import styles from '../../../styles/Section/properties/Properties.module.css';
import { icons } from '../../Icons';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const Properties = ({
  data,
  router,
  setProperties,
  statusId,
  getProperties,
  getAllProperties,
  newProperties,
  setNewProperties,
  getSelects,
  getCommunesByRegion,
  selectsList,
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
  cargando,
  setCargando,
}) => {
  const [isGrid, setIsGrid] = useState(false);
  const [isList, setIsList] = useState(false);
  const { BiMap } = icons;
  const propertiesFound = newProperties?.length;
  const paginate = (currentPage) => getPagination(limit, currentPage, 1, 15);

  useEffect(() => {
    getTotalItems(1, 15);
  }, [metaData]);

  useEffect(() => {
    getPagination(limit, page, 1, 15);
  }, [limit, page]);

  return (
    <Row className={styles.rowContainer}>
      <div className={styles.headerProperties}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>Propiedades</h1>
          <p>
            Propiedades por página <span>{propertiesFound ?? '0'}</span>
          </p>
        </div>
        <div>
          <Link
            href="/propiedades/maps-propiedades"
            className={styles.urlViewMap}
          >
            <span className={styles.spanMapIcon}>
              <BiMap />
            </span>
            Ver mapa
          </Link>
        </div>

        {/* FILTAR PROPIEDADES */}
        <div className={styles.iconFilterContainer}>
          <IconFilter
            isGrid={isGrid}
            setIsGrid={setIsGrid}
            isList={isList}
            setIsList={setIsList}
          />
        </div>
      </div>

      <Col xl={9} className={styles.col}>
        <Row className={styles.rowItems}>
          {newProperties.length > 0
            ? newProperties.map((property) => (
                <PropertyItem
                  key={property?.id}
                  property={property}
                  isGrid={isGrid}
                  isList={isList}
                  companyId={1}
                  statusId={1}
                />
              ))
            : (cargando && <Loader />) || (
                <Alert
                  variant=""
                  style={{
                    textAlign: 'center',
                  }}
                >
                  No se encontraron resultados para esta búsqueda.{' '}
                  <Link
                    className={styles.btnSubmitClean}
                    href={router.pathname}
                    as={router.pathname}
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Volver a cargar propiedades
                  </Link>
                </Alert>
              )}
        </Row>

        {/* PAGINATION */}
        <PaginationComponent
          itemPerPage={limit}
          paginate={paginate}
          totalItems={totalItems}
          metaData={metaData}
        />
      </Col>

      {/* BUSQUEDA AVANZADA */}
      <Col xl={3} className={styles.colForm}>
        <AdvancedSearchForm
          data={newProperties}
          totalItems={totalItems}
          router={router}
          setProperties={setProperties}
          getProperties={getProperties}
          getAllProperties={getAllProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
          getSelects={getSelects}
          getCommunesByRegion={getCommunesByRegion}
          selectsList={selectsList}
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
          cargando={cargando}
          setCargando={setCargando}
        />

        {/* PROYECTOS DESTACADOS */}
        <OutstandingProjects />
      </Col>
    </Row>
  );
};

export default Properties;
