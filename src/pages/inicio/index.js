import React, { Fragment } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import Principal from '@/components/Section/Inicio/Principal';
import Lease from '@/components/Section/Inicio/Lease';
import Steps from '@/components/Section/Inicio/Steps';
import Investing from '@/components/Section/Inicio/Investing';
import NewProperties from '@/components/Section/Inicio/NewProperties';
import About from '@/components/Section/Inicio/About';

const Inicio = () => {
  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* MAIN CONTENT */}
      <LayoutSection>
        {/* --SECCIÓN PRINCIPAL-- */}
        <Principal />

        {/* --NOS ENCARGAMOS DE TÚ ARRIENDO POR TÍ-- */}
        <Lease />

        {/* --VENDEMOS TÚS PROPIEDADES EN CUATRO SIMPLES PASOS-- */}
        <Steps />

        {/* --INVIERTE EN INMUEBLES CON NOSOTROS-- */}
        <Investing />

        {/* --PROPIEDADES NUEVAS-- */}
        <NewProperties />

        {/* --ABOUT-- */}
        <About />
      </LayoutSection>
    </Fragment>
  );
};

export default Inicio;
