import React from 'react';
import styles from '../../styles/Layout/LayoutSection.module.css';

const LayoutSection = ({ children }) => {
  return <section className={styles.layoutSection}>{children}</section>;
};

export default LayoutSection;
