import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({ img, title, href }) => {
  const scrollToDown = () => {
    window.scrollTo({
      top: 2400,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <button className={`${styles.customCol} ${styles.card}`}>
        <Link
          // href={`properties?realtorId=${5}&statusId=${5}&typeOfProperty=${1}`}
          href={`${href}`}
          onClick={() => {
            setTimeout(() => {
              scrollToDown();
            }, 500);
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
