import React from 'react';
import styles from '../../styles/Card/CardStep.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const StepCard = ({ step }) => {
  const { icon, desc, span, extraIcon } = step;

  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <div className={styles.cardIconContainer}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <Card.Text className={styles.cardText}>
            {desc} <span className={styles.spanText}>{span}</span>
          </Card.Text>
        </Card.Body>
      </Card>

      {extraIcon?.set ? (
        <span className={styles.extraIcon}>{extraIcon?.arrow}</span>
      ) : null}
    </Col>
  );
};

export default StepCard;
