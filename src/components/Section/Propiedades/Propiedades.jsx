import React, { useState } from 'react';
import Link from 'next/link';
import RSelect from '@/components/RSelect/RSelect';
// import AdvancedSearchForm from '@/components/Forms/AdvancedSearchForm';
import OutstandingProjects from './OutstandingProjects';
import PropertyItem from './PropertyItem';
import IconFilter from '../../IconFilter/IconFilter';
// import PaginationComponent from '../../Pagination/Pagination';
import styles from '../../../styles/Section/properties/Properties.module.css';
import { icons } from '../../Icons';
import { orderDepartmentBy } from '../../../api/data/orderBy';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

/** API services */
import PropertiesServices from '../../../services/PropertiesServices';

const Propiedades = ({
  data,
  setProperties,
  realtorId,
  statusId,
  getProperties,
  newProperties,
  setNewProperties,
}) => {
  // const { getPagination } = useContext(PropertiesContext);
  const [totalItems, setTotalItems] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [metaData, setMetaData] = useState({});

  const [isGrid, setIsGrid] = useState(false);
  const [isList, setIsList] = useState(false);
  const { BiMap } = icons;

  const onOrderDepartmentByChange = (option) => {
    console.log(option);
    console.log(orderDepartmentBy[0]);
  };

  console.log('DATA', data);

  // const getPagination = async (limit, page) => {
  //   const response = await PropertiesServices.getPagination(limit, page);
  //   console.log('RESPONSE', response);
  //   // const { data } = response;
  //   // setTotalItems(data.total);
  //   // setItemPerPage(data.per_page);
  //   // setMetaData(data);
  // };

  // useEffect(() => {
  //   getPagination(10, 1);
  // });

  return (
    <Row className={styles.rowContainer}>
      <div className={styles.headerProperties}>
        <div>
          <h1 className={styles.title}>Departamentos</h1>
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
        <div className={styles.containerForm}>
          <form>
            <RSelect
              options={orderDepartmentBy}
              defaultValue={orderDepartmentBy[0]}
              onChange={onOrderDepartmentByChange}
            />
          </form>
        </div>

        <div>
          {/* FILTAR PROPIEDADES */}
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
          {newProperties &&
            newProperties.map((property) => (
              <PropertyItem
                key={property?.id}
                property={property}
                isGrid={isGrid}
                isList={isList}
                realtorId={realtorId}
                statusId={statusId}
              />
            ))}
        </Row>

        {/* PAGINATION */}
        {/* <Card>
          <PaginationComponent
            itemPerPage={10}
            totalItems={10}
            paginate={1}
            metaData={1}

            // itemPerPage={itemPerPage}
            // totalItems={totalItems}
            // paginate={paginate}
            // metaData={metaData}
          />
        </Card> */}
      </Col>

      <Col xl={3} className={styles.colForm}>
        {/* BÚSQUEDA AVANZADA */}
        {/* <AdvancedSearchForm
          data={data}
          setProperties={setProperties}
          getProperties={getProperties}
          newProperties={newProperties}
          setNewProperties={setNewProperties}
        /> */}

        {/* PROYECTOS DESTACADOS */}
        {/* <OutstandingProjects
          data={data}
          realtorId={realtorId}
          statusId={statusId}
        /> */}
      </Col>
    </Row>
  );
};

export default Propiedades;
