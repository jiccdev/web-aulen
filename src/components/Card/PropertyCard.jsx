import React from 'react';
import Link from 'next/link';
import { truncateString, parseToCLPCurrency } from '../../utils';
import styles from '../../styles/Card/PropertyCard.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PropertyCard = ({ property }) => {
  const {
    id,
    image,
    title,
    address,
    city,
    price,
    bedrooms,
    bathrooms,
    surface_m,
  } = property;

  // console.log(property);
  return (
    <Col sm={4}>
      <Card className={styles.card}>
        <span className={styles.spanCodeProperty}>
          Cod: {property?.id || 'sin código'}
        </span>
        <div className={styles.cardImgContainer}>
          <img src={image} alt={`imagen-${title}`} className={styles.img} />
        </div>

        <Card.Body className={styles.cardBody}>
          <div className={styles.mainTitleCard}>
            <div>
              <Card.Title className={styles.cardTitle}>
                {truncateString(title)}
              </Card.Title>
            </div>

            <div>
              <Card.Text className={styles.cardText}>
                {address || 'sin ubicación'} {city || ''}{' '}
              </Card.Text>
            </div>
          </div>

          <div className={styles.propertyPrice}>
            <span>Venta: {parseToCLPCurrency(price) || ''}</span>
          </div>

          <div className={styles.cardDetails}>
            <div className={styles.detailsProperty}>
              <span>{bedrooms || ''} Dorm.</span>
              <span>{bathrooms || ''} Baños.</span>
              <span>
                {surface_m || '0'} M<sup>2</sup>
              </span>
            </div>

            <div className={styles.urlContainer}>
              <Link
                href={`/propiedades/${id}?realtorId=${5}&statusId=${5}`}
                className={styles.url}
              >
                Detalles
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PropertyCard;
