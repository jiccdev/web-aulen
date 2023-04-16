import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import { parseToCLPCurrency } from '@/utils';
import { icons } from '../Icons';

/** Bootstrap components */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import styles from '../../styles/Section/properties/details/Maps.module.css';

const ReactMap = ({ longitudeProp, latitudeProp, propertyData }) => {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: latitudeProp,
    longitude: longitudeProp,
    zoom: 18,
    dragPan: true,
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: latitudeProp,
      longitude: longitudeProp,
      zoom: 18,
      dragPan: true,
    });
  }, [mapRef, longitudeProp, latitudeProp]);

  return (
    <div className={styles.mapContainer}>
      <Map
        {...viewport}
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        initialViewState={{
          pitch: 45,
          width: 400,
          height: 400,
          attributionControl: true,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        style={{
          width: 'auto',
          height: '100px',
          borderRadius: '15px',
          padding: '2rem',
          margin: '1.5rem',
          width: 'auto',
          height: '60vh',
          borderRadius: '15px',
        }}
      >
        <Marker
          latitude={latitudeProp}
          longitude={longitudeProp}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 100,
            margin: '0',
            padding: '0',
          }}
          onClick={() => setShowPopup(!showPopup)}
        >
          {showPopup && (
            <Popup
              longitude={longitudeProp}
              latitude={latitudeProp}
              onClose={() => setShowPopup(false)}
              anchor="bottom"
              closeButton={false}
              closeOnClick={false}
              dynamicPosition={true}
              focusAfterOpen={false}
              offsetTop={-10}
              offsetLeft={-10}
              closeOnMove={false}
              style={{
                zIndex: 100,
                cursor: 'pointer',
              }}
            >
              <Link
                href={`/propiedades/${
                  propertyData?.id
                }?statusId=${1}&companyId=${1}`}
              >
                <Card className="">
                  <Card.Img variant="top" src={propertyData?.image} />

                  <Card.Body>
                    <Card.Text>
                      <Badge pill bg="warning">
                        {propertyData?.types?.[0]}
                      </Badge>
                    </Card.Text>
                    <Card.Text
                      style={{
                        color: 'black',
                        margin: '.5rem 0',
                      }}
                    >
                      {propertyData?.address ?? 'Dirección no registrada'} ,{' '}
                      {propertyData?.commune ?? 'Comuna no registrada'} ,{' '}
                      {propertyData?.city ?? 'Ciudad no registrada'}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span>Desde:</span>{' '}
                      <strong>
                        {parseToCLPCurrency(propertyData?.price) ??
                          'Precion no registrado'}
                      </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {`${propertyData?.surface_m2}`} m<sup>2</sup> utiles -
                      {propertyData?.bedrooms} dorms.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Link>
            </Popup>
          )}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
