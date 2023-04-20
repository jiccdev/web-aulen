import React, { useContext, useEffect } from 'react';
import PropertiesContext from '@/context/properties/PropertiesContext';
import OutstandingProject from './OutstandingProject';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import styles from '../../../styles/Section/properties/OutstandingProjects.module.css';

const OutstandingProjects = () => {
  const { properties, getProperties } = useContext(PropertiesContext);

  useEffect(() => {
    getProperties(1, 1);
  }, []);

  return (
    <Row className={styles.row}>
      <h2 className={styles.titleSection}>Proyectos destacados</h2>

      {properties
        ?.filter((property) => property?.highlighted === true)
        ?.slice(2, 8)
        .map((property) => (
          <OutstandingProject
            key={property.id}
            property={property}
            companyId={1}
            statusId={1}
          />
        ))}
    </Row>
  );
};

export default OutstandingProjects;
