import React from 'react';
import Link from 'next/link';
import { truncateString, parseToCLPCurrency } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/Section/properties/PropertyItem.module.css';

const DepartmentItem = ({ property, isGrid, isList, statusId }) => {
  const { id, image, title, address, price, status, operation, commune, city } =
    property;

  console.log(property);
  return (
    <Col md={isGrid ? 4 : isList ? 12 : 4} className={styles.col}>
      <Card className={isList ? styles.isListCard : styles.card}>
        <span
          className={
            operation === 'Venta'
              ? styles.deptStatusForSales
              : styles.deptStatusFeatured
          }
        >
          {operation}
        </span>
        <img
          src={image}
          alt={`imagen-departamento-${title}`}
          className={isList ? styles.isListCardImage : styles.cardImage}
        />
        <Card.Body className={isList ? styles.isListCardBody : styles.cardBody}>
          <div className={styles.mainContentCard}>
            <small className={styles.deptCode}>Cod: {id || ''}</small>
            <Card.Title className={styles.cardTitle}>
              {isList ? (
                <h3>Cod: {title || ''}</h3>
              ) : (
                truncateString(title) || ''
              )}
            </Card.Title>
            <p className={styles.address}>
              {truncateString(address) || ''}, {commune ?? null}, {city ?? null}
            </p>
          </div>
          <div
            className={
              isList ? styles.isListPriceContainer : styles.priceContainer
            }
          >
            <span className={styles.span}>
              Venta: {parseToCLPCurrency(price)}
            </span>
            <span>
              <Link
                href={`/propiedades/${id}?statusId=${1}&companyId=${1}`}
                className={styles.details}
              >
                Detalles
              </Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DepartmentItem;
