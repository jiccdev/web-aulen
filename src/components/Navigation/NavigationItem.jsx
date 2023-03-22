import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Layout/NavigationItem.module.css';

/** Bootstrap components */
import Dropdown from 'react-bootstrap/Dropdown';

const NavigationItem = ({ navItem }) => {
  const { route } = useRouter();
  const { name, url, submenu } = navItem;
  const hasdropDownData = navItem?.submenu;

  return hasdropDownData?.length > 0 ? (
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={`${styles.dropdownToggle}`}
      >
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        {submenu &&
          submenu.map((item, idx) => (
            <Link
              href={item?.url}
              key={idx}
              className={
                route === item.url
                  ? styles.dropdownItemActived
                  : styles.dropdownItem
              }
            >
              {item?.name}
            </Link>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Link
      href={url}
      className={route === url ? styles.navItemActive : styles.navItem}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
