import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FeaturesCard from './FeaturesCard';
import Steps from './Steps';
import PublishingForm from '../../../Forms/PublishingForm';
import { FeaturesData } from '../../../../api/data/featuresCard';
import { StepsData } from '../../../../api/data/stepsLease';
import { publishingFormData } from '../../../../api/data/publishingForm';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/WhyLease/WhyLease.module.css';

export const WhyLease = () => {
  return (
    <main className={`${styles.customRow} ${styles.mainWhyContainer}`}>
      <div className={`${styles.customCol} ${styles.whyContainer}`}>
        <Fade delay={200} direction="left" cascade>
          <h2 className={`${styles.whyH2}`}>
            ¿Por qué arrendar tu propiedad con nosotros?
          </h2>
          <div className={`${styles.customRow} ${styles.featureCardContainer}`}>
            <FeaturesCard features={FeaturesData} />
          </div>
        </Fade>

        <div>
          <h3 className={`${styles.whyH3}`}>Arrienda en 3 simples pasos</h3>

          <Fade delay={200} direction="left" cascade>
            <div className={`${styles.customRow} ${styles.stepsContainer}`}>
              <Steps steps={StepsData} />
            </div>
          </Fade>
        </div>
      </div>
      <PublishingForm formData={publishingFormData[0]} />
    </main>
  );
};
export default WhyLease;
