import React from 'react';
import Link from 'next/link';
import { truncateStringSmall } from '../../../utils';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../../styles/Section/properties/OutstandingProject.module.css';

const OutstandingProject = ({ property, realtorId, statusId }) => {
  return (
    <Col>
      <Card>
        <Link
          href={`/propiedades/${property?.id}?realtorId=${realtorId}&statusId=${statusId}`}
          className={styles.link}
        >
          <img
            src={property?.image}
            alt={`imagen-departamento-${property?.title}`}
            className={styles.outstandingProject__image}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100px',
              width: '100%',
            }}
          />
          <p className={styles.deptName}>
            {truncateStringSmall(property.title) || ''}
          </p>
          <span className={styles.code}>Cod: {property.id}</span>
        </Link>
      </Card>
    </Col>
  );
};

export default OutstandingProject;
