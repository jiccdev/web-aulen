import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';

const QuieroArrendar = () => {
  return (
    <div>
      <HeadPage title="Contacto" />
      <LayoutSection>
        <h1
          style={{
            backgroundColor: 'green',
            height: '500px',
            width: '100%',
            marginTop: '100px',
          }}
        >
          Quiero arrendar
        </h1>
      </LayoutSection>
    </div>
  );
};

export default QuieroArrendar;
