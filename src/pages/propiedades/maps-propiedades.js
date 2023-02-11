import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';
import MapProperties from '@/components/Section/Propiedades/MapProperties';

const MapsProperties = () => {
  return (
    <LayoutSection>
      {/* SECCIÓN PROPERTIES MAP */}
      <HeadPage title="Propiedades en Mapa" description="Mapa de Propiedades" />

      <MapProperties />
    </LayoutSection>
  );
};

export default MapsProperties;
