import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '../../Icons';
import AboutImg from '../../../assets/img/About/about.png';
import styles from '../../../styles/Section/Inicio/About.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  const { TfiFacebook, BsInstagram, AiFillYoutube } = icons;
  return (
    <Fade delay={300}>
      <div className={styles.aboutContainer}>
        <Row className={styles.rowAbout}>
          <Col sm={12} lg={6}>
            <div className={styles.leftContent}>
              <ul>
                <li>
                  <span>Dirección :</span>
                  <p>Asturias 171, Of. 101, Las Condes, Santiago.</p>
                </li>
                <li>
                  <span>Teléfono :</span>
                  <p>+56 2 6469 1800</p>
                </li>
                <li>
                  <span>Correo: </span>
                  <p>info@aulenpropiedades.cl</p>
                </li>
              </ul>
            </div>
          </Col>

          <div className={styles.aboutCentredContent}>
            <Fade delay={200} direction="left" cascade>
              <div className={styles.newPropertiesColAbsolute}>
                <Image
                  src={AboutImg}
                  className={styles.aboutImg}
                  alt="imagen-nuevas-propiedades"
                  style={{
                    width: '100%',
                    height: '700px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Fade>
          </div>

          <Col sm={12} lg={6} className={styles.newPropertiesCol}>
            <Fade delay={200} direction="right" cascade>
              <div className={styles.rightContent}>
                <h2 className={styles.title}>Sobre Nosotros</h2>
                <p>
                  Somos una empresa dedicada a la asesoría e intermediación de
                  compra, arriendo y administración de propiedades, tanto para
                  personas naturales como jurídicas en el territorio chileno
                </p>

                <p className={styles.followUs}>SÍGUENOS EN:</p>
                <ul className={styles.socialMediaNavbarNav}>
                  <li className={styles.socialMediaNavItem}>
                    <a
                      // href="https://www.facebook.com/aulenpropiedades"
                      href="/"
                      target="_blank"
                      className={styles.socialMediaNavLink}
                    >
                      <TfiFacebook className={styles.icon} />
                    </a>
                  </li>
                  <li className={styles.socialMediaNavItem}>
                    <a
                      // href="https://www.instagram.com/aulenpropiedades/"
                      href="/"
                      target="_blank"
                      className={styles.socialMediaNavLink}
                    >
                      <BsInstagram className={styles.icon} />
                    </a>
                  </li>
                  <li className={styles.socialMediaNavItem}>
                    <a
                      // href="https://www.youtube.com"
                      href="/"
                      target="_blank"
                      className={styles.socialMediaNavLink}
                    >
                      <AiFillYoutube className={styles.icon} />
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default About;
