import React from 'react';
import { Fade } from 'react-awesome-reveal';
import InvestmentStep from './InvestmentSteps';
import { investmentStepData } from '../../../../api/data/investmentStep';
import styles from '../../../../styles/Section/soy-inversionista/unidades-en-remate/HeroSection/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={`${styles.customCol} ${styles.sectionContainer}`}>
      <div className={`${styles.customCol} ${styles.componentContainer}`}>
        <Fade delay={200} cascade>
          <div className={`${styles.customCol} ${styles.mainContainer}`}>
            {investmentStepData.length > 0
              ? investmentStepData.map((el) => (
                  <InvestmentStep key={el.id} stepData={el} />
                ))
              : null}
            <h2>¡Invertir es así de fácil!</h2>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default HeroSection;
