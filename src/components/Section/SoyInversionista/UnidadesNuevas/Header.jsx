import React from 'react';
import IconNumber from '../../SoyPropietario/QuieroArrendar/IconNumber';
import SimpleCard from './SimpleCard';
import { benefitsData } from '../../../../api/data/newPropertyBenefits';
import { simpleCardData } from '../../../../api/data/simpleCard';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/Header/Header.module.css';

export const Header = () => {
  return (
    <section className={`${styles.customCol} ${styles.sectionContainer}`}>
      <header className={`${styles.customCol} ${styles.mainContainer}`}>
        <div className={`${styles.customCol} ${styles.title}`}>
          <h1 className={`${styles.title__h1}`}>
            Es momento de invertir en tu nueva propiedad
          </h1>
          <h2 className={`${styles.title__h2}`}>
            Te asesoramos en todo el proceso de la compra de tu nuevo activo
          </h2>
        </div>

        <div className={`${styles.customRow} ${styles.containerBenefits}`}>
          {benefitsData.length > 0
            ? benefitsData.map((el) => (
                <div
                  key={el.id}
                  className={`${styles.customCol} ${styles.componentContainer}`}
                >
                  <IconNumber
                    elNumber={el.id}
                    className={`${styles.numberComponent}`}
                  />
                  <span className={`${styles.boldP}`}>{el.span}</span>
                  <p>{el.p}</p>
                </div>
              ))
            : null}
        </div>
      </header>
      <div className={`${styles.customCol} ${styles.chooseInvest}`}>
        <h2 className={`${styles.chooseInvest__h2}`}>
          Elige en qué quieres invertir hoy
        </h2>

        <div className={`${styles.customRow} ${styles.cardContainer}`}>
          {simpleCardData.length > 0
            ? simpleCardData.map((el) => (
                <SimpleCard img={el.img} title={el.title} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};
export default Header;