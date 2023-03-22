import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';

const QuieroVender = () => {
  return (
    <div>
      <HeadPage title="Contacto" />
      <LayoutSection>
        <h1
          style={{
            backgroundColor: 'red',
            height: '500px',
            width: '100%',
            marginTop: '100px',
          }}
        >
          Quiero Vender
        </h1>
      </LayoutSection>
    </div>
  );
};

export default QuieroVender;
