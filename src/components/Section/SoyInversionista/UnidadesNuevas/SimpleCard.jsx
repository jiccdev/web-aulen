import React from 'react';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({ img, title }) => {
  return (
    <>
      <button className={`${styles.customCol} ${styles.card}`}>
        <a href="#apartments">
          {img}
          <h3 className={`${styles.card__title}`}>{title}</h3>
        </a>
      </button>
    </>
  );
};
export default SimpleCard;
