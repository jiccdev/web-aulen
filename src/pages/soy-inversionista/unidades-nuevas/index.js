import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import Header from '@/components/Section/SoyInversionista/UnidadesNuevas/Header';
import InvestmentForm from '@/components/Forms/InvestmentForm';
import OutstandingProject from '@/components/Section/Propiedades/OutstandingProjects/OutstandingProjects';
import { investmentFormData } from '../../../api/data/investmentForm';

const UnidadesNuevas = () => {
  return (
    <Fragment>
      <HeadPage title="Unidades nuevas" />

      <LayoutSection>
        {/* ES MOMENTO DE INVERTIR EN TÚ NUEVA PROPIEDAD */}
        <Header />

        {/* TE AYUDAMOS A ELEGIR LA MEJOR OPCIÓN DE INVERSIÓN PARA TÍ */}
        {investmentFormData?.length > 0
          ? investmentFormData?.map((el, idx) => (
              <InvestmentForm key={idx} formData={el} />
            ))
          : null}
      </LayoutSection>

      {/* PROYECTOS DESTACADOS */}
      {/* PENDIENDTE */}

      <OutstandingProject />
      {/* FILTRAR PROPIEDADE POR VERDE Y BLANCO */}
      {/* PENDIENDTE */}
    </Fragment>
  );
};

export default UnidadesNuevas;
