import React from 'react';
import LayoutSection from '@/components/Section/LayoutSection';
import Principal from '@/components/Section/Inicio/Principal';
import Lease from '@/components/Section/Inicio/Lease';
import Steps from '@/components/Section/Inicio/Steps';
import Investing from '@/components/Section/Inicio/Investing';
import NewProperties from '@/components/Section/Inicio/NewProperties';

const Inicio = () => {
  return (
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
    </LayoutSection>
  );
};

export default Inicio;
