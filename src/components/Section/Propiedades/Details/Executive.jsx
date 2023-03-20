import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SmallLogoAulen from '../../../../assets/img/LogoSite/SMALL-LOGO-AULEN.png';
import styles from '../../../../styles/Section/properties/details/Executive.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Executive = ({ propertyData }) => {
  console.log(propertyData?.realtor);
  const { name, lastName, mail } = propertyData;
  return (
    <div className={styles.executiveContainer}>
      <Row className={styles.row}>
        <Col md={3} className={styles.col}>
          <Image
            src={SmallLogoAulen}
            height={50}
            width="auto"
            alt="logo-aulen"
            className={styles.executiveImg}
          />
        </Col>
        <Col md={9} className={styles.colDown}>
          <h3>Ejecutivo </h3>
          <div>
            <p>
              <span>Agente:</span> {propertyData?.realtor?.name || ''}{' '}
              {propertyData?.lastName || ''}
            </p>
          </div>

          <div>
            <p>
              <span>Email:</span> {propertyData?.realtor?.name || ''}{' '}
              {propertyData?.lastName || ''}
            </p>
          </div>

          <div>
            <p>
              <span>Telefono/celular:</span> ...
            </p>
          </div>

          <form>
            <div>
              <Link href="/" className={styles.contactBtn}>
                Contactar
              </Link>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Executive;
