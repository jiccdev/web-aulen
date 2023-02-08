import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutSection from '@/components/Section/LayoutSection';

const WantToSell = () => {
  return (
    <Fragment>
      <HeadPage title="Quiero vender" />

      {/* MAIN CONTENT */}
      <LayoutSection>
        <h1>WantToSell</h1>
      </LayoutSection>
    </Fragment>
  );
};

export default WantToSell;
