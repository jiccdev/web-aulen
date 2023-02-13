import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import HeaderSection from '../HeaderSection';
import Form from './FormMain';
import Packaging from '../../../assets/img/Inicio/Principal/empacando.webp';
import styles from '../../../styles/Section/Inicio/Principal.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Principal = () => {
  return (
    <div className={styles.principalContainer}>
      <HeaderSection
        titleSection="¡Aulén, contigo en cada paso!"
        fontSize="3xl"
      />

      <Row className={styles.rowPlanForm}>
        <Col sm={12} lg={6} className={styles.principalCol}>
          <Fade delay={200} direction="left" cascade>
            <Image
              width="100%"
              src={Packaging}
              alt="house"
              className={styles.principalImage}
            />
          </Fade>
        </Col>

        <Col sm={12} lg={6} className={styles.principalCol}>
          <Fade delay={200} direction="right" cascade>
            <Form
              titleContentForm="Vende o arrienda tu propiedad rápido y sin complicaciones"
              textAlign="center"
              subtitle=""
              haveAction1={{
                text: 'QUIERO VENDER',
              }}
              haveAction2={{
                text: 'QUIERO ARRENDAR',
              }}
            />
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default Principal;
