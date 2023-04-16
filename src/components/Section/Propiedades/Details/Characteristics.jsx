import React, { useState } from 'react';
import TableDetails from './TableDetails';
import styles from '../../../../styles/Section/properties/details/Characteristics.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Characteristics = ({ propertyData }) => {
  const { description } = propertyData;

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características del inmueble</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <div className={styles.containerDescription}>
            <p className={styles.description}>
              {isOpen ? description : `${description?.slice(0, 450)}...`}
            </p>
            <Button onClick={toggleCollapse} className={styles.buttonCollapse}>
              {isOpen ? 'Cerrar' : 'Leer más'}
            </Button>
          </div>
        </Col>
        <Col lg={5} className={styles.tableDetailsContainer}>
          <TableDetails propertyData={propertyData} />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
