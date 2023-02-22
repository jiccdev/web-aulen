import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../../../../styles/Section/soy-inversionista/unidades-en-remate/InvestmentModel/InvestmentModel.module.css';

export const InvestmentModel = ({ investment }) => {
  return (
    <Fade delay={200} cascade>
      <div
        className={`${styles.customCol} ${styles.mainContainer}`}
        data-aos="fade-up"
        data-aos-delay={`${investment.id * 100}`}
      >
        {investment.img}
        <div className={`${styles.customCol}`}>
          <h2 className={`${styles.investment__h2}`}>{investment.h2}</h2>
          <p className={`${styles.investment__p}`}>{investment.p}</p>
        </div>
      </div>
    </Fade>
  );
};
export default InvestmentModel;
