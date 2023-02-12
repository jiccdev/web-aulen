import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Login from '@/components/Section/Intranet/Login';

const Intranet = () => {
  return (
    <Fragment>
      <HeadPage title="Intranet" />

      {/* LOGIN FORM - INTRANET */}
      <Login />
    </Fragment>
  );
};

export default Intranet;
