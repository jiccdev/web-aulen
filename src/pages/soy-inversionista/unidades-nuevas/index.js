import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import Header from '@/components/Section/SoyInversionista/UnidadesNuevas/Header';
import InvestmentForm from '@/components/Forms/InvestmentForm';
import MeetingSchedule from '@/components/Forms/MeetingSchedule';
import OutstandingProject from '@/components/Section/Propiedades/OutstandingProjects/OutstandingProjects';
import Propiedades from '@/pages/propiedades';

const UnidadesNuevas = () => {
  return (
    <Fragment>
      <HeadPage title="Unidades nuevas" />

      <LayoutSection>
        {/* ES MOMENTO DE INVERTIR EN TÚ NUEVA PROPIEDAD */}
        <Header />

        {/* TE AYUDAMOS A ELEGIR LA MEJOR OPCIÓN DE INVERSIÓN PARA TÍ */}
        {/* <div id="un-contacto">
          {investmentFormData?.length > 0
            ? investmentFormData?.map((el, idx) => (
                <InvestmentForm key={idx} formData={el} />
              ))
            : null}
        </div> */}

        {/*  AGENDA DE REUNIONES */}
        <div id="un-contacto">
          <MeetingSchedule />
        </div>
      </LayoutSection>

      {/* PROYECTOS DESTACADOS */}
      <OutstandingProject />

      {/* FILTRAR PROPIEDADE POR VERDE Y BLANCO */}
      {/* PENDIENDTE */}
      <Propiedades />
    </Fragment>
  );
};

export default UnidadesNuevas;
