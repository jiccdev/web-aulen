import React, { useState, useContext, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import IconNumber from '../../SoyPropietario/QuieroArrendar/IconNumber';
import SimpleCard from './SimpleCard';
import { benefitsData } from '../../../../api/data/newPropertyBenefits';
import { simpleCardData } from '../../../../api/data/simpleCard';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/Header/Header.module.css';
import RSelect from '@/components/RSelect/RSelect';
import Form from 'react-bootstrap/Form';

// nuevo
import PropertiesContext from '@/context/properties/PropertiesContext';
import SelectsContext from '@/context/selects/SelectsContext';
// nuevo

const Header = () => {
  // nuevo
  const {
    properties,
    setProperties,
    property,
    getProperties,
    newProperties,
    setNewProperties,
    getPagination,
    metaData,
    getTotalItems,
    totalItems,
    page,
    limit,
    getPropertiesByTypeOfProperty,
    getPropertiesByMinAndMaxPrice,
    getPropertiesBySurfaceM2,
    getPropertiesByBedrooms,
    getPropertiesByBathrooms,
    getPropertiesByParkingLotsCovered,
    getPropertiesByOperationType,
    getPropertiesByRegionAndCommune,
    getPropertiesByInstallmentType,
    getPropertiesOnFormSubmit,
  } = useContext(PropertiesContext);

  const { contextData } = useContext(SelectsContext);
  const [
    getSelects,
    getCommunesByRegion,
    selects,
    regions,
    communes,
    operationType,
    typeOfProperty,
    installmentType,
  ] = contextData;
  // nuevo

  const [filtredDataValue, setFiltredDataValue] = useState({
    operation: '',
    typeOfProperty: '',
    region: '',
    commune: '',
    surface: '',
    priceCLP: false,
    priceUF: false,
    priceFrom: 0,
    priceUpTo: 0,
    bedrooms: '',
    bathrooms: '',
    parkingLots: '',
    installmentType: '',
  });

  // ===== Type of Property =====
  // const getTypeOfPropertyOptions = () =>
  //   typeOfProperty?.map((typeOfProperty) => ({
  //     value: typeOfProperty.value,
  //     label: typeOfProperty.name,
  //   }));

  const getTypeOfPropertyOptions = () =>
    typeOfProperty
      .filter(
        (typeOfProperty) =>
          typeOfProperty.name === 'casa' ||
          typeOfProperty.name === 'departamento' ||
          typeOfProperty.name === 'bodega'
      )
      .map((typeOfProperty) => ({
        value: typeOfProperty.value,
        label: typeOfProperty.name,
      }));

  console.log(getTypeOfPropertyOptions());

  const onTypeOfPropertyChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfProperty: option?.value,
    });
  };

  const scrollToDown = () => {
    window.scrollTo({
      top: 2400,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getPropertiesByTypeOfProperty(5, 5, filtredDataValue?.typeOfProperty);

    setTimeout(() => {
      scrollToDown();
    }, 1400);
  }, [filtredDataValue?.typeOfProperty]);
  // ===== Type of Property =====

  return (
    <section className={`${styles.customCol} ${styles.sectionContainer}`}>
      <Fade delay={200} direction="left" cascade>
        <header className={`${styles.customCol} ${styles.mainContainer}`}>
          <div className={`${styles.customCol} ${styles.title}`}>
            <h1 className={`${styles.title__h1}`}>
              Es momento de invertir en tu nueva propiedad
            </h1>
            <h2 className={`${styles.title__h2}`}>
              Te asesoramos en todo el proceso de la compra de tu nuevo activo
            </h2>
          </div>

          <div className={`${styles.customRow} ${styles.containerBenefits}`}>
            {benefitsData.length > 0
              ? benefitsData.map((el) => (
                  <div
                    key={el.id}
                    className={`${styles.customCol} ${styles.componentContainer}`}
                  >
                    <IconNumber
                      elNumber={el.id}
                      className={`${styles.numberComponent}`}
                    />
                    <span className={`${styles.boldP}`}>{el.span}</span>
                    <p>{el.p}</p>
                  </div>
                ))
              : null}
          </div>
        </header>
        <div className={`${styles.customCol} ${styles.chooseInvest}`}>
          <h2 className={`${styles.chooseInvest__h2}`}>
            Elige en qué quieres invertir hoy
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: '#f5f5f5',
              padding: '15px 0',
              borderRadius: '5px',
              borderLeft: '3px solid #E77212',
            }}
          >
            <Form.Group
              style={{
                width: '350px',
                padding: '0 10px',
              }}
            >
              <RSelect
                options={getTypeOfPropertyOptions()}
                defaultValue={typeOfProperty[0]}
                onChange={onTypeOfPropertyChange}
                styles={{
                  option: (provided, state) => ({
                    ...provided,

                    fontSize: '20px',
                    color: state.isSelected ? 'white' : 'dark',
                  }),
                }}
              />
            </Form.Group>
          </div>

          <div className={`${styles.customRow} ${styles.cardContainer}`}>
            {simpleCardData.length > 0
              ? simpleCardData.map((el) => (
                  <SimpleCard
                    key={el?.id}
                    img={el.img}
                    title={el.title}
                    href={el.href}
                  />
                ))
              : null}
          </div>
        </div>
      </Fade>
    </section>
  );
};
export default Header;
