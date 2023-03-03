import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RSelect from '@/components/RSelect/RSelect';
import AdvancedSearchForm from '@/components/Forms/AdvancedSearchForm';
import OutstandingProjects from './OutstandingProjects';
import PropertyItem from './PropertyItem';
import IconFilter from '../../IconFilter/IconFilter';
import PaginationComponent from '@/components/Pagination/Pagination';
import SpinnerComponent from '@/components/Spinner/SpinnerComponent';
import styles from '../../../styles/Section/properties/Properties.module.css';
import { icons } from '../../Icons';
import { orderDepartmentBy } from '../../../api/data/orderBy';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const Properties = ({
  data,
  router,
  setProperties,
  realtorId,
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
}) => {
  const [isGrid, setIsGrid] = useState(false);
  const [isList, setIsList] = useState(false);
  const { BiMap } = icons;

  const paginate = (currentPage) => getPagination(limit, currentPage, 5, 5);

  useEffect(() => {
    getTotalItems(5, 5);
  }, [metaData]);

  useEffect(() => {
    getPagination(limit, page, 5, 5);
  }, [limit, page]);

  return (
    <Row className={styles.rowContainer}>
      <div className={styles.headerProperties}>
        <div>
          <h1 className={styles.title}>Propiedades</h1>
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

        {/* EN DESARROLLO ❌ */}
        {/* <div className={styles.containerForm}>
          <form>
            <RSelect
              options={orderDepartmentBy}
              defaultValue={orderDepartmentBy[0]}
              onChange={onOrderDepartmentByChange}
            />
          </form>
        </div> */}

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
          {newProperties.length > 0 ? (
            newProperties.map((property) => (
              <PropertyItem
                key={property?.id}
                property={property}
                isGrid={isGrid}
                isList={isList}
                realtorId={realtorId}
                statusId={statusId}
              />
            ))
          ) : (
            <Container>
              {<SpinnerComponent variant="warning" /> ?? (
                <Alert variant="warning">
                  No se encontraron propiedades con los filtros seleccionados.{' '}
                  <a href="/propiedades">cargar propiedades</a>
                </Alert>
              )}
            </Container>
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
        />

        {/* PROYECTOS DESTACADOS */}
        <OutstandingProjects />
      </Col>
    </Row>
  );
};

export default Properties;
