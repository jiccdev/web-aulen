import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import HeroSection from '@/components/Section/SoyPropietario/QuieroArrendar/HeroSection';

const QuieroArrendar = () => {
  return (
    <Fragment>
      <HeadPage title="Quiero arrendar" />

      <LayoutSection>
        {/* DISFRUTA DE LA TRANQUILIADAD DE ARRENDAR TÚ PROPIEDAD CON AULEN */}
        <HeroSection />

        {/*  */}
      </LayoutSection>
    </Fragment>
  );
};

export default QuieroArrendar;
