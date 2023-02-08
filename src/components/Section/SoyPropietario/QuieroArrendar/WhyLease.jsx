import React from 'react';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/WhyLease/WhyLease.module.css';
import FeaturesCard from './FeaturesCard';
import Steps from './Steps';
import PublishingForm from '../../../Forms/PublishingForm';
import { FeaturesData } from '../../../../api/data/featuresCard';
import { StepsData } from '../../../../api/data/stepsLease';
import { publishingFormData } from '../../../../api/data/publishingForm';

export const WhyLease = () => {
  return (
    <main className={`${styles.customRow} ${styles.mainWhyContainer}`}>
      <div className={`${styles.customCol} ${styles.whyContainer}`}>
        <h2 className={`${styles.whyH2}`}>
          ¿Por qué arrendar tu propiedad con nosotros?
        </h2>
        <div className={`${styles.customRow} ${styles.featureCardContainer}`}>
          <FeaturesCard features={FeaturesData} />
        </div>

        <div>
          <h3 className={`${styles.whyH3}`}>Arrienda en 3 simples pasos</h3>

          <div className={`${styles.customRow} ${styles.stepsContainer}`}>
            <Steps steps={StepsData} />
          </div>
        </div>
      </div>
      <PublishingForm formData={publishingFormData[0]} />
    </main>
  );
};
export default WhyLease;
