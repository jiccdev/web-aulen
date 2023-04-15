import React, { useState } from 'react';
import TableDetails from './TableDetails';
import styles from '../../../../styles/Section/properties/details/Characteristics.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Characteristics = ({ propertyData }) => {
  const [open, setOpen] = useState(false);
  const text = propertyData?.description || 'Sin descripción';
  const shortText = text.slice(400);

  return (
    <div className={styles.characteristicsContainer}>
      <h2>Características del inmueble</h2>
      <Row>
        <Col lg={7}>
          <h6>Descripción</h6>
          <Card className={styles.cardDescription}>
            <Card.Body className={styles.cardBody}>
              <Card.Text>{text}</Card.Text>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Card.Text>{shortText}</Card.Text>
                </div>
              </Collapse>
              {text.length > 300 && (
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className={styles.buttonCollapse}
                >
                  {open ? 'Ver menos' : 'Ver más'}
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} className={styles.tableDetailsContainer}>
          <TableDetails propertyData={propertyData} />
        </Col>
      </Row>
    </div>
  );
};

export default Characteristics;
