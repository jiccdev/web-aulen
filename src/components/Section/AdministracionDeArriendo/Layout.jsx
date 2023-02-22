import React, { useState, useEffect } from 'react';
import PlanForm from '../../Forms/PlanForm';
import { Fade } from 'react-awesome-reveal';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../styles/Section/administracion-de-arriendo/Layout.module.css';

const Layout = ({ children }) => {
  const [isScrolledPast, setScrolledPast] = useState(false);
  const [isScrolledPast2, setScrolledPast2] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        const isTop = window.scrollY > 50;
        const isTop2 = window.scrollY > 50 && window.scrollY > 1850;

        if (isTop !== isScrolledPast) {
          setScrolledPast(isTop);
        }

        if (isTop2 !== isScrolledPast2) {
          setScrolledPast2(isTop2);
        }
      },
      { passive: true }
    );
  }, [isScrolledPast, isScrolledPast2]);

  return (
    <Row className={styles.row}>
      <Col md={12} xl={10}>
        {children}
      </Col>
      <Col
        sm={12}
        lg={4}
        className={
          isScrolledPast
            ? isScrolledPast2
              ? styles.isScrolledPast2
              : styles.isScrolledPast
            : styles.rightCol
        }
      >
        <Fade delay={200} direction="right" cascade>
          <PlanForm />
        </Fade>
      </Col>
    </Row>
  );
};

export default Layout;
