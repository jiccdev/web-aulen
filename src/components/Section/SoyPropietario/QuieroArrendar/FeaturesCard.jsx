import React, { Fragment } from 'react';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/FeaturesCard/FeaturesCard.module.css';

export const FeatureCard = ({ features }) => {
  return (
    <Fragment>
      {features.length > 0
        ? features?.map((el) => (
            <div
              key={el.id}
              className={`${styles.customCol} ${styles.cardContainer}`}
            >
              <div className={`${styles.customCol} ${styles.cardImgContainer}`}>
                {el.img}
              </div>
              <div
                className={`${styles.customCol} ${styles.cardTextContainer}`}
              >
                <h2 className={`${styles.card__h2}`}>{el.h2}</h2>
                <p className={`${styles.card__p}`}>{el.p}</p>
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
};
export default FeatureCard;
