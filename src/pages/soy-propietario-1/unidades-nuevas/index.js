import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';

const SoyPropietario1 = () => {
  return (
    <Fragment>
      <HeadPage title="Soy Propietario 1" />
      <LayoutSection>
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Soy Propietario 1 - Unidades Nuevas
        </div>
      </LayoutSection>
    </Fragment>
  );
};

export default SoyPropietario1;
