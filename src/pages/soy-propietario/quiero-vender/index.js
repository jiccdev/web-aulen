import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Layout from './Layout';
import LayoutSection from '@/components/Section/LayoutSection';
import HeroSection from '../../../components/Section/SoyPropietario/QuieroVender/HeroSection';
import StepsSection from '../../../components/Section/SoyPropietario/QuieroVender/StepsSection';
import Plans from '@/components/Section/Plans/Plans';

const QuieroVender = () => {
  return (
    <Fragment>
      <HeadPage title="Quiero vender" />

      {/* MAIN CONTENT */}
      <Layout>
        <LayoutSection>
          {/* Vende tu propiedad rápido y sin complicaciones */}
          <HeroSection />

          {/* Vendemos tu propiedad en cuatro simples pasos */}
          <StepsSection />

          {/* Conoce nuestros planes */}
          <Plans />
        </LayoutSection>
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
