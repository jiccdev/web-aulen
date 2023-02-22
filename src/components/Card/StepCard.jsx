import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/Card/CardStep.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const StepCard = ({ step }) => {
  const { icon, desc, span, extraIcon } = step;

  return (
    <Col sm={6} md={4} className={styles.col}>
      <Card className={styles.card}>
        <Fade delay={200} direction="left" cascade>
          <Card.Body className={styles.cardBody}>
            <div className={styles.cardIconContainer}>
              <span className={styles.icon}>{icon}</span>
            </div>
            <Card.Text className={styles.cardText}>
              {desc} <span className={styles.spanText}>{span}</span>
            </Card.Text>
          </Card.Body>
        </Fade>
      </Card>

      {extraIcon?.set ? (
        <span className={styles.extraIcon}>{extraIcon?.arrow}</span>
      ) : null}
    </Col>
  );
};

export default StepCard;
