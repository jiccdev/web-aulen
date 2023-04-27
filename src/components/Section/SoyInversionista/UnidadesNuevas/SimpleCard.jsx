import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({
  img,
  title,
  href,
  getPropertiesByTypeOfProperty,
}) => {
  const scrollToDown = () => {
    window.scrollTo({
      top: 2530,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <button className={`${styles.customCol} ${styles.card}`}>
        <Link
          href={`${href}`}
          onClick={() => {
            getPropertiesByTypeOfProperty(1, 15, title);
            setTimeout(() => {
              scrollToDown();
            }, 1000);
          }}
        >
          {img}
          <h3 className={`${styles.card__title}`}>{title}</h3>
        </Link>
      </button>
    </Fragment>
  );
};
export default SimpleCard;
