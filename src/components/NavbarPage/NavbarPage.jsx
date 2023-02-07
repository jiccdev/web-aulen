import React from 'react';
import LogoPage from '../LogoPage/LogoPage';
import styles from '../../styles/Layout/Navbar.module.css';

/** Bootstrap components */
import Navbar from 'react-bootstrap/Navbar';

const NavbarPage = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      {/* LOGO */}
      <Navbar.Brand href="/">
        <LogoPage />
      </Navbar.Brand>

      {/* NAVIGATION */}
      {/* add navigation component */}
    </Navbar>
  );
};

export default NavbarPage;
