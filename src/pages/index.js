import React, { Fragment } from 'react';
import Head from 'next/head';
import HeadPage from '@/components/HeadPage/HeadPage';
import Inicio from './inicio';

const Home = () => {
  return (
    <Fragment>
      <HeadPage title="Inicio" />

      {/* INICIO */}
      <Inicio />
    </Fragment>
  );
};

export default Home;
