import React from 'react';
import NavbarPage from '../NavbarPage/NavbarPage';
import styles from '../../styles/Layout/Header.module.css';

const HeaderPage = () => {
  return (
    <header className={styles.header}>
      {/* NAVBAR TOP */}
      <NavbarPage />
    </header>
  );
};

export default HeaderPage;
