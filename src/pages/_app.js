import React, { Fragment } from 'react';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import PropertiesProvider from '@/context/properties/PropertiesProvider';
import CustomersProvider from '@/context/customers/CustomersProvider';
import SelectsProvider from '@/context/selects/SelectsProvider';

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <LayoutPage>
        <PropertiesProvider>
          <CustomersProvider>
            <SelectsProvider>
              <Component {...pageProps} />
            </SelectsProvider>
          </CustomersProvider>
        </PropertiesProvider>
      </LayoutPage>
    </Fragment>
  );
}
