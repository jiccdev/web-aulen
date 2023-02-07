import React, { useState } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import styles from '../../styles/Layout/Layout.module.css';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';

const LayoutPage = ({ children }) => {
  return (
    <Container fluid className="m-0 p-0">
      {/* HEADER */}
      <HeaderPage />

      {/* MAIN CONTENT APP */}
      <Container fluid className={styles.layout}>
        <main>{children}</main>
      </Container>

      {/* FOOTER */}

      {/* DROPDOWN SOCIAL MEDIA */}
    </Container>
  );
};

export default LayoutPage;
