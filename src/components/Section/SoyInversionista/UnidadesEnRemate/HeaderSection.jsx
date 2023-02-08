import React from 'react';
import InvestmentModel from './InvestmentModel';
import { investmentModelData } from '../../../../api/data/investmentModel';
import styles from '../../../../styles/Section/soy-inversionista/unidades-en-remate/HeaderSection/HeaderSection.module.css';

export const HeaderSection = () => {
  return (
    <header className={`${styles.customCol} ${styles.headerContainer}`}>
      <h1 className={`${styles.header__h1}`}>
        Nuestro modelo de Inversión remate seguro
      </h1>
      <h2 className={`${styles.header__h2}`}>
        Único en el mercado que genera hasta un 15% de rentabilidad por
        operación
      </h2>
      <div className={`${styles.customRow} ${styles.investmentModelContainer}`}>
        {investmentModelData?.length > 0
          ? investmentModelData?.map((el) => (
              <InvestmentModel investment={el} />
            ))
          : null}
      </div>
    </header>
  );
};
export default HeaderSection;
