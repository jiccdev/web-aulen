import React from 'react';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/IconNumber/IconNumber.module.css';

export const IconNumber = ({ elNumber }) => {
  return <h2 className={`${styles.number}`}>{elNumber}</h2>;
};
export default IconNumber;
