import React, { Fragment } from 'react';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import styles from '../styles/Layout/Layout.module.css';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </Fragment>
  );
}
