import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import keyImg from '../../../../assets/img/SoyPropietario/key.jpg';
import styles from '../../../../styles/Section/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <header className={`${styles.customCol} ${styles.sellPageHeader}`}>
      <h1>¡Vende tu propiedad rápido y sin complicaciones!</h1>

      <div className={`${styles.customRow} ${styles.imgAndForm}`}>
        <Fade delay={200} direction="left" cascade>
          <div className={`${styles.customRow} ${styles.imgContainer}`}>
            <Image
              className={`${styles.imgHeader}`}
              src={keyImg}
              alt="imagen-header"
            />
          </div>
        </Fade>
      </div>
    </header>
  );
};

export default HeroSection;
