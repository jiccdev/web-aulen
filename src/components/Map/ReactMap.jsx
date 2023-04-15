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
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: latitudeProp,
    longitude: longitudeProp,
    zoom: 17,
  });
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (mapRef.current !== null) {
      mapRef.current.flyTo({
        center: [viewport.longitude, viewport.latitude],
        speed: 1.2,
        curve: 1.2,
        easing: (t) => t,
      });
    }
  }, [mapRef, viewport]);

  return (
    <div className={styles.mapContainer}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        {...viewport}
        ref={mapRef}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        initialViewState={{
          pitch: 45,
          // width: 400,
          // height: 400,
          // attributionControl: true,
          // longitude: longitudeProp,
          // latitude: latitudeProp,
          // zoom: 17,
          // style: {
          //   width: 'auto',
          //   height: '60vh',
          //   borderRadius: '15px',
          // },
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
          latitude={viewport.latitude}
          longitude={viewport.longitude}
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
              {/* <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '10px !important',
                  padding: '0px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                  }}
                ></div>

                <div
                  style={{
                    fontWeight: '300',
                    textTransform: 'capitalize',
                    color: '#616161',
                    margin: '0rem',
                    padding: '.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        padding: '.1rem .1rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Dirección:
                      <span
                        style={{
                          padding: '.1rem .1rem',
                          fontWeight: 'semibold',
                        }}
                      >
                        {propertyData?.address ?? 'Dirección no registrada'}{' '}
                        {propertyData?.city === 'Ciudad no registrada'}
                      </span>
                    </span>
                  </div>
                </div>
              </div> */}
            </Popup>
          )}
          {/* <div>
            <Image
              src={MapPointer}
              alt="marker"
              height={50}
              width={50}
              onClick={() => setShowPopup(!showPopup)}
            />

            
          </div> */}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
