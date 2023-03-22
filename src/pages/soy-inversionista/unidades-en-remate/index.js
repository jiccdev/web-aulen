import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import HeaderSection from '../../../components/Section/SoyInversionista/UnidadesEnRemate/HeaderSection.jsx';
import InvestmentForm from '../../../components/Forms/InvestmentForm';
import HeroSection from '../../../components/Section/SoyInversionista/UnidadesEnRemate/HeroSection.jsx';
import CustomerExperience from '@/components/Section/CustomerExperience/CustomerExperience.jsx';
import { investmentFormData } from '../../../api/data/investmentForm.js';

const UnidadesEnRemate = () => {
  return (
    <Fragment>
      <HeadPage title="Unidades en remate" />

      <LayoutSection>
        {/* Nuestro modelo de Inversión remate seguro */}
        <HeaderSection />

        {/* Invertir es así de fácil */}
        <HeroSection />

        {/* Te ayudamos a elegir la mejor opción de inversión para ti */}
        <div
          id="ur-contacto"
          style={{
            margin: '10rem 0',
          }}
        >
          {investmentFormData?.length > 0
            ? investmentFormData?.map((el, index) => (
                <InvestmentForm key={index} formData={el} isForm />
              ))
            : null}
        </div>
      </LayoutSection>

      {/* Experiencia de Clientes */}
      <CustomerExperience />
    </Fragment>
  );
};

export default UnidadesEnRemate;
