import React, { useState } from 'react';
// import TransportationTab from './tabs/TransportationTab';
// import EducationTab from './tabs/EducationTab';
// import GreenAreas from './tabs/GreenAreas';
// import Stores from './tabs/Stores';
import ReactMap from '../../../Map/ReactMap';

/* Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styles from '../../../../styles/Section/properties/details/InformationOnTheArea.module.css';

const InformationOnTheArea = ({ propertyData }) => {
  const [key, setKey] = useState('transportationTab');
  const { LngLat } = propertyData;
  const lng = Number(LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

  return (
    <div className={styles.informationOnTheAreaContainer}>
      <Row>
        {/* <Col xs={12} lg={6}>
          <div>
            <h2 className={styles.headTitle}>Información de la zona</h2>
            <p>Son los puntos más cercanos al inmueble en un rango de 2km.</p>
          </div>

          <Tabs
            className={styles.tabs}
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab
              eventKey="transportationTab"
              title="Transporte"
              className={styles.tab}
            >
              <TransportationTab />
            </Tab>
            <Tab
              eventKey="educationTab"
              title="Educación"
              className={styles.tab}
            >
              <EducationTab />
            </Tab>
            <Tab
              eventKey="greenAreas"
              title="Areas verdes"
              className={styles.tab}
            >
              <GreenAreas />
            </Tab>
            <Tab eventKey="stores" title="Comercios" className={styles.tab}>
              <Stores />
            </Tab>
          </Tabs>
        </Col> */}

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
