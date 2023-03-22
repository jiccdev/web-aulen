import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import HeroSection from '@/components/Section/SoyPropietario/QuieroArrendar/HeroSection';
import WhyLease from '@/components/Section/SoyPropietario/QuieroArrendar/WhyLease';
import CustomerExperience from '@/components/Section/CustomerExperience/CustomerExperience';

const QuieroArrendar = () => {
  return (
    <Fragment>
      <HeadPage title="Quiero arrendar" />

      <LayoutSection>
        {/* DISFRUTA DE LA TRANQUILIADAD DE ARRENDAR TÚ PROPIEDAD CON AULEN */}
        <HeroSection />

        {/* POR QUÉ ARRENDAR TÚ PROPIEDAD CON NOSOSTROS */}
        <WhyLease />
      </LayoutSection>

      {/* Experiencia de Clientes */}
      <CustomerExperience />
    </Fragment>
  );
};

export default QuieroArrendar;
