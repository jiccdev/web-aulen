import React, { useEffect, useState } from 'react';
import ReactMap from '../../../Map/ReactMap';

/* Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../styles/Section/properties/details/InformationOnTheArea.module.css';

const InformationOnTheArea = ({ propertyData }) => {
  const { LngLat } = propertyData;
  const lng = Number(LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

  return (
    <div className={styles.informationOnTheAreaContainer}>
      <Row>
        <Col xs={12} lg={12}>
          <ReactMap
            longitudeProp={lng}
            latitudeProp={lat}
            propertyData={propertyData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default InformationOnTheArea;
