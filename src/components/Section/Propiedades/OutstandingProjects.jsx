import React, { useContext, useEffect } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import OutstandingProject from './OutstandingProject';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import styles from '../../../styles/Section/properties/OutstandingProjects.module.css';

const OutstandingProjects = () => {
  const { properties, getProperties } = useContext(PropertiesContext);

  useEffect(() => {
    getProperties(1, 1);
  }, []);

  return (
    <Row className={styles.row}>
      <h2 className={styles.titleSection}>Proyectos destacados</h2>
      {properties?.length > 0 ? (
        properties
          .filter((property) => property?.highlighted === true)
          // .slice(0, 2)
          .map((property) => (
            <OutstandingProject
              key={property.id}
              property={property}
              companyId={1}
              statusId={1}
            />
          ))
      ) : (
        <Alert variant="">No se registran propiedades destacadas</Alert>
      )}
    </Row>
  );
};

export default OutstandingProjects;
