import React from 'react';
import LayoutSection from '@/components/Section/LayoutSection';
import Principal from '@/components/Section/Inicio/Principal';
import Lease from '@/components/Section/Inicio/Lease';
import Steps from '@/components/Section/Inicio/Steps';

const Inicio = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PRINCIPAL */}
      <Principal />

      {/* NOS ENCARGAMOS DE TÚ ARRIENDO POR TÍ */}
      <Lease />

      {/* VENDEMOS TÚS PROPIEDADES EN CUATRO SIMPLES PASOS */}
      <Steps />
    </LayoutSection>
  );
};

export default Inicio;
