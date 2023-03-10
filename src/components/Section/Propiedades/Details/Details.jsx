import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Executive from './Executive';
import OutstandingProject from '../OutstandingProject';
import { parseToCLPCurrency, clpToUf } from '../../../../utils';
import { icons } from '../../../../components/Icons';
import styles from '../../../../styles/Section/properties/details/Details.module.css';

/** Bootstrap component */
import Button from 'react-bootstrap/Button';

/** Api services */
import ExchangeRateServices from '../../../../services/ExchangeRateServices';

const Details = ({ propertyData }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { BiBuildingHouse, IoBedOutline, FaBath } = icons;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));

      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      throw error.response;
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <Fragment>
      {Object.keys(propertyData).length > 0 ? (
        <section key={propertyData.id} className={styles.detailContainer}>
          <h2>{propertyData?.address}</h2>
          <h4>
            Publicado por {propertyData?.realtor?.name || 'Sin nombre'}{' '}
            {propertyData.realtor?.lastName}
          </h4>

          <div className={styles.pricesContainer}>
            <h3>Desde</h3>

            <p className={styles.ufPrice}>
              UF {clpToUf(propertyData?.price, ufCurrentValue)}
            </p>
            <p className={styles.clpPrice}>
              {parseToCLPCurrency(propertyData.price)}
            </p>
          </div>

          <div className={styles.deptoPropsContainer}>
            <span>
              <strong>
                <BiBuildingHouse />
              </strong>{' '}
              {propertyData?.surface_m2 ? propertyData?.surface_m2 : '0'} m
              <sup>2</sup> ??tiles
            </span>
            <span>
              <strong>
                <IoBedOutline />
              </strong>{' '}
              {propertyData?.bedrooms
                ? propertyData?.bedrooms
                : 'Sin dormitorios'}{' '}
              dormitorios
            </span>
            <span>
              <strong>
                <FaBath />
              </strong>{' '}
              {propertyData?.bathrooms ? propertyData?.bathrooms : 'Sin ba??os'}{' '}
              ba??os
            </span>
          </div>
        </section>
      ) : null}

      {propertyData?.installment_type === 'En blanco' ||
      propertyData?.installment_type === 'En verde' ? (
        <Link href="#cotizar-contacto" className={styles.quoteBtn}>
          Cotizar
        </Link>
      ) : (
        <Link href="#cotizar-contacto" className={styles.quoteBtn}>
          Cotizar
        </Link> // null
      )}

      <Executive propertyData={propertyData} />
    </Fragment>
  );
};

export default Details;
