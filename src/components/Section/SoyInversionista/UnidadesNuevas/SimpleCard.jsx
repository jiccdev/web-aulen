import React from 'react';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({ img, title, href }) => {
  const scrollToDown = () => {
    window.scrollTo({
      top: 2400,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className={`${styles.customCol} ${styles.card}`}>
        <a
          href={href}
          onClick={() => {
            scrollToDown();
          }}
        >
          {img}
          <h3 className={`${styles.card__title}`}>{title}</h3>
        </a>
      </button>
    </>
  );
};
export default SimpleCard;
