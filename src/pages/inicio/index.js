import React from 'react';
import LayoutSection from '@/components/Section/LayoutSection';
import Principal from '@/components/Section/Inicio/Principal';
import Lease from '@/components/Section/Inicio/Lease';

const Inicio = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PRINCIPAL */}
      <Principal />

      {/* NOS ENCARGAMOS DE TÚ ARRIENDO POR TÍ */}
      <Lease />
    </LayoutSection>
  );
};

export default Inicio;
