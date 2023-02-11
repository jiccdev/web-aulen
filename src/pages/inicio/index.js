import React, { Fragment } from 'react';
import { Fade, Slide, Roll, Hinge } from 'react-awesome-reveal';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import Principal from '@/components/Section/Inicio/Principal';
import Lease from '@/components/Section/Inicio/Lease';
import Steps from '@/components/Section/Inicio/Steps';
import Investing from '@/components/Section/Inicio/Investing';
import NewProperties from '@/components/Section/Inicio/NewProperties';

const Inicio = () => {
  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* MAIN CONTENT */}
      <LayoutSection>
        {/* --SECCIÓN PRINCIPAL-- */}
        <Slide delay={1e3} cascade>
          <Principal />
        </Slide>

        {/* --NOS ENCARGAMOS DE TÚ ARRIENDO POR TÍ-- */}
        <Fade delay={1e3} cascade damping={1e-1}>
          <Lease />
        </Fade>

        {/* --VENDEMOS TÚS PROPIEDADES EN CUATRO SIMPLES PASOS-- */}
        <Steps />

        {/* --INVIERTE EN INMUEBLES CON NOSOTROS-- */}
        <Investing />

        {/* --PROPIEDADES NUEVAS-- */}
        <NewProperties />
      </LayoutSection>
    </Fragment>
  );
};

export default Inicio;
