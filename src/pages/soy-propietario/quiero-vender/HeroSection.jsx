import React from 'react';
import Image from 'next/image';
import PublishingForm from '../../../components/Forms/PublishingForm';
import { publishingFormData } from '../../../api/data/publishingForm'; /** revisar el indice según lo que quiera el form */
import keyImg from '../../../assets/img/SoyPropietario/key.jpg';
import styles from '../../../styles/Section/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <header className={`${styles.customCol} ${styles.sellPageHeader}`}>
      <h1>¡Vende tu propiedad rápido y sin complicaciones!</h1>

      <div className={`${styles.customRow} ${styles.imgAndForm}`}>
        <div className={`${styles.customRow} ${styles.imgContainer}`}>
          <Image
            className={`${styles.imgHeader}`}
            src={keyImg}
            alt="imagen-header"
          />
        </div>

        {/* <PublishingForm formData={publishingFormData[0]} /> */}
      </div>
    </header>
  );
};

export default HeroSection;
