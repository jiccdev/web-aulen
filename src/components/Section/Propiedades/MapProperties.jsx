import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import PropertiesContext from '@/context/properties/PropertiesContext';
import MapPointer from '../../../assets/img/Map/marker.png';
import { truncateStringSmall } from '../../../utils';
import styles from '../../../styles/Section/properties/details/Maps.module.css';

/** Bootstrap components */
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';

const MapProperties = () => {
  const { newProperties, getProperties, getAllProperties, totalItems } =
    useContext(PropertiesContext);
  const [showPopup, setShowPopup] = useState(false);
  const [propertyDetail, setPropertyDetail] = useState({});
  const [key, setKey] = useState('transportationTab');

  useEffect(() => {
    getProperties(1, 1);
  }, []);

  useEffect(() => {
    getAllProperties(totalItems, 1, 1);
  }, []);

  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        marginTop: '125px',
      }}
    >
      <div className={styles.mapContainer}>
        <div className={styles.mainTopInfoContainer}>
          <div className={styles.mapTopInfoContainer}>
            <h2>Localización de Propiedades</h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '300',
                textTransform: 'capitalize',
                color: '#616161',
              }}
            >
              Descubre propiedades es una forma fácil y eficiente de encontrar y
              explorar propiedades en una ubicación específica
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            pitch: 45,
            width: 400,
            height: 400,
            attributionControl: false,
            longitude: -70.64827,
            latitude: -33.45694,
            zoom: 12,
            style: {
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            },
          }}
          mapStyle={'mapbox://styles/mapbox/streets-v12'}
          style={{
            width: 'auto',
            height: '80vh',
            borderRadius: '15px',
          }}
        >
          {newProperties?.map((property) => {
            let longitude =
              Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
            let latitude =
              Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

            return (
              <Marker
                key={property?.id}
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
                <div>
                  <Image
                    src={MapPointer}
                    alt="marker"
                    height={50}
                    width={50}
                    onClick={() => setShowPopup(!showPopup)}
                  />

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
                              }}
                            >
                              {property?.address ?? ''} {property?.city === ''}
                            </span>
                          </div>
                        </div>

                        <div className={styles.urlContainer}>
                          <Link
                            href={`/propiedades/${
                              property?.id
                            }?statusId=${1}&companyId=${1}`}
                            className={styles.url}
                          >
                            Ver Detalle
                          </Link>
                        </div>
                      </div>
                    </Popup>
                  )}
                </div>
              </Marker>
            );
          })}

          <NavigationControl />
          <GeolocateControl />
          <FullscreenControl />
        </Map>
      </div>
    </div>
  );
};

export default MapProperties;
