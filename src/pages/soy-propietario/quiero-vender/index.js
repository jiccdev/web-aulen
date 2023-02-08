import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Layout from './Layout';
import LayoutSection from '@/components/Section/LayoutSection';
import HeroSection from './HeroSection';
import StepsSection from './StepsSection';

import PublishingForm from '@/components/Forms/PublishingForm';
import styles from '../../../styles/Section/soy-propietario/soyPropietario.module.css';

const QuieroVender = () => {
  return (
    <Fragment>
      <HeadPage title="Quiero vender" />

      {/* MAIN CONTENT */}
      <Layout>
        <LayoutSection>
          {/* 1 */}
          <HeroSection />

          {/* 2 */}
          <StepsSection />
        </LayoutSection>
        {/* 3 */}
        {/* <LayoutSection>
          <Plans />
        </LayoutSection> */}
      </Layout>
    </Fragment>
  );
};

export default QuieroVender;
