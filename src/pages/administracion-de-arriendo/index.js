import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Layout from '../../components/Section/AdministracionDeArriendo/Layout';

import LayoutSection from '@/components/Section/LayoutSection';
import SoldHome from '@/components/Section/AdministracionDeArriendo/SoldHome';
// import Plans from '../../src/components/Section/adminstracion-de-arriendo/Plans/Plans';
// import CustomerExperience from '../../src/components/Section/adminstracion-de-arriendo/CustomerExperience/CustomerExperience';
// import StepsToRentDepartment from '../../src/components/Section/adminstracion-de-arriendo/StepsToRentDepartment/StepsToRentDepartment';
// import SoldHome from '../../src/components/Section/adminstracion-de-arriendo/SoldHome/SoldHome';

const AdministracionDeArriendo = () => {
  return (
    <Fragment>
      <HeadPage title="Administración de arriendo" />

      <Layout>
        <LayoutSection>
          {/* CASA VENDIDA */}
          <SoldHome />

          {/* PASOS PARA ARRENDAR UN DEPARTAMENTO */}
          {/* <StepsToRentDepartment /> */}

          {/* CONOCE NUESTROS PLANES */}
          {/* <Plans /> */}
        </LayoutSection>
      </Layout>

      {/* CONOCE LA EXPERIENCIA DE NUESTROS CLIENTES */}
      {/* <LayoutSection>
        <CustomerExperience />
      </LayoutSection> */}
    </Fragment>
  );
};

export default AdministracionDeArriendo;
