import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem';
import { navigationData } from '../../api/data/navigation';
import styles from '../../styles/Layout/Navigation.module.css';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.navbarToggle}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          {navigationData &&
            navigationData.map((navItem) => (
              <NavigationItem
                key={navItem?.id}
                navItem={navItem}
                navigationData={navigationData}
              />
            ))}
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
};

export default Navigation;
