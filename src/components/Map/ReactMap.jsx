import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import MapPointer from '../../assets/img/Map/mapPointer.png';
import { icons } from '../Icons';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { truncateStringSmall } from '../../utils';
import styles from '../../styles/Section/properties/details/Maps.module.css';

const ReactMap = ({ longitudeProp, latitudeProp, propertyData }) => {
  const [longitude, setLongitude] = useState(longitudeProp);
  const [latitude, setLatitude] = useState(latitudeProp);
  const [showPopup, setShowPopup] = useState(true);
  const { BiMap } = icons;

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapTopInfoContainer}>
        <Link href="/propiedades/maps-propiedades">
          <Button className={styles.showMapBtn}>
            <BiMap />
            Ver Mapa
          </Button>
        </Link>
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          pitch: 45,
          width: 400,
          height: 400,
          attributionControl: false,
          longitude: longitude,
          latitude: latitude,
          zoom: 12,
          style: {
            width: 'auto',
            height: '60vh',
            borderRadius: '15px',
          },
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
          longitude={longitude}
          latitude={latitude}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 100,
            margin: '0',
            padding: '0',
          }}
        >
          {showPopup && (
            <Popup
              longitude={longitude}
              latitude={latitude}
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
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '10px !important',
                  padding: '0px',
                }}
              >
                <Card.Img
                  variant="top"
                  src={propertyData?.image}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    margin: '0',
                    padding: '0',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                  }}
                >
                  <Image
                    alt="map-pointer"
                    src={MapPointer}
                    height={15}
                    width={15}
                    style={{
                      margin: '3px',
                    }}
                  />{' '}
                  <span
                    style={{
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      paddingRight: '1rem',
                    }}
                  >
                    {propertyData?.address === ''
                      ? 'Propiedad sin ubicacion registrada '
                      : propertyData?.address + ','}

                    {propertyData?.city === ''
                      ? 'Propiedad sin ciudad registrada '
                      : propertyData?.address}
                  </span>
                </div>

                <p
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
                      }}
                    >
                      <strong>Descripción: </strong>
                      {truncateStringSmall(
                        propertyData?.title || 'Sin descripcion',
                        45
                      ) ?? 'Propiedad sin descripción'}
                    </span>

                    <span
                      style={{
                        padding: '.1rem .1rem',
                      }}
                    >
                      <strong>Metros cuadrados: </strong>
                      {propertyData?.surface_m2 ?? '0'}m<sup>2</sup>
                    </span>

                    <span
                      style={{
                        padding: '.1rem .1rem',
                      }}
                    >
                      <strong>Habitaciones: </strong>
                      {propertyData?.bedrooms ?? '0'}m<sup>2</sup>
                    </span>

                    <span
                      style={{
                        padding: '.1rem .1rem',
                      }}
                    >
                      <strong>Baños: </strong>
                      {propertyData?.bathrooms ?? '0'}m<sup>2</sup>
                    </span>
                  </div>
                </p>

                <div className={styles.urlContainer}>
                  <Link
                    href={`/propiedades/${
                      propertyData?.id
                    }?realtorId=${5}&statusId=${5}`}
                    className={styles.url}
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </Popup>
            // <Popup
            //   longitude={longitude}
            //   latitude={latitude}
            //   style={{
            //     width: 'auto',
            //     height: '60px',
            //     borderRadius: '10px',
            //     padding: '1rem',
            //     margin: '1rem',
            //   }}
            // >
            //   <Card.Img
            //     variant="top"
            //     src={propertyData?.images?.[0]}
            //     style={{
            //       width: '100%',
            //       height: '100px',
            //       objectFit: 'cover',
            //       borderRadius: '10px',
            //     }}
            //   />
            //   <p>{propertyData?.title || 'sin descripción'}</p>
            //   <span
            //     style={{
            //       fontWeight: 'bold',
            //     }}
            //   >
            //     {propertyData?.address || ''}, {propertyData?.city || ''}
            //   </span>
            // </Popup>
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
