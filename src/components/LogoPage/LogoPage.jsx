import React from 'react';
import Image from 'next/image';
import LogoAulenPropiedades from '../../assets/img/LogoSite/LOGO-AULEN-PROPIEDADES.png';
import styles from '../../styles/Layout/Logo.module.css';

const LogoPage = () => {
  return (
    <Image
      src={LogoAulenPropiedades}
      alt="logo-aulen-propiedades"
      className={styles.logo}
      width={200}
      height={200}
    />
  );
};

export default LogoPage;
