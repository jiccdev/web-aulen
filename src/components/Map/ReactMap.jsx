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
import MapPointer from '../../assets/img/Map/marker.png';
import { icons } from '../Icons';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import styles from '../../styles/Section/properties/details/Maps.module.css';

const ReactMap = ({ longitudeProp, latitudeProp, propertyData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { BiMap } = icons;

  console.log(propertyData);
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapTopInfoContainer}>
        {/* <Link href="/propiedades/maps-propiedades">
          <Button className={styles.showMapBtn}>
            <BiMap />
            Ver Mapa
          </Button>
        </Link> */}
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          pitch: 45,
          width: 400,
          height: 400,
          attributionControl: false,
          longitude: longitudeProp,
          latitude: latitudeProp,
          zoom: 17,
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
          longitude={longitudeProp}
          latitude={latitudeProp}
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
                </div>
              </Popup>
            )}
          </div>
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
