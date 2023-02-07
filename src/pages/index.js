import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import Inicio from './inicio';
import 'bootstrap/dist/css/bootstrap.min.css';

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
