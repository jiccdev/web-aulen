import React from 'react';
import HeaderSection from '../HeaderSection';
import PlanCard from '../../Card/PlanCard';
import { plansData } from '../../../api/data/plans';
import styles from '../../../styles/Section/Plans/Plans.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Plans = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col md={12} xl={9} className={styles.col}>
        <HeaderSection titleSection="Conoce nuestros planes" />

        <Row className={styles.rowItems}>
          {plansData &&
            plansData.map((plan) => <PlanCard key={plan?.id} plan={plan} />)}
        </Row>
      </Col>
    </Row>
  );
};

export default Plans;
