import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import sofa from '../../../../assets/img/SoyPropietario/sofa.jpg';
import OurServices from '../../SoyPropietario/QuieroArrendar/OurServices';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={`${styles.customRow} ${styles.sectionHeroContainer}`}>
      <div className={`${styles.customRow} ${styles.servicesContainer}`}>
        <OurServices />
      </div>

      <div className={`${styles.customCol} ${styles.headerContainer}`}>
        <Fade delay={200} direction="right" cascade>
          <h1 className={`${styles.heroH1}`}>
            ¡Disfruta de la tranquilidad de arrendar tú propiedad con Aulen!
          </h1>
          <Image
            src={sofa}
            alt="imagen-hero"
            className={`${styles.heroImage}`}
          />
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
