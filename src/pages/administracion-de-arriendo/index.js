import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Layout from '../../components/Section/AdministracionDeArriendo/Layout';
import LayoutSection from '@/components/Section/LayoutSection';
import SoldHome from '@/components/Section/AdministracionDeArriendo/SoldHome';
import StepsToRentDepartment from '@/components/Section/AdministracionDeArriendo/StepsToRentDepartment';
import Plans from '@/components/Section/Plans/Plans';
import CustomerExperience from '@/components/Section/CustomerExperience/CustomerExperience';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage title="Administración de arriendo" />

      <Layout>
        <LayoutSection>
          {/* CASA VENDIDA */}
          <SoldHome />

          {/* PASOS PARA ARRENDAR UN DEPARTAMENTO */}
          <StepsToRentDepartment />

          {/* CONOCE NUESTROS PLANES */}
          <Plans />
        </LayoutSection>
      </Layout>

      {/* Experiencia de Clientes */}
      <CustomerExperience />
    </Fragment>
  );
};

export default AdministracionDeArriendo;
