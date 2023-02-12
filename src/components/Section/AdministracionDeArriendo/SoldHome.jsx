import React from 'react';
import Image from 'next/image';
import SoldHomeImg from '../../../assets/img/SoldHome/sold-home.jpg';
import styles from '../../../styles/Section/administracion-de-arriendo/SoldHome.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SoldHome = () => {
  return (
    <Row className={styles.rowContainerSoldHome}>
      <Col xl={8} className={styles.colSoldHome}>
        <Image src={SoldHomeImg} alt="Sold Home" className={styles.img} />
      </Col>
    </Row>
  );
};

export default SoldHome;