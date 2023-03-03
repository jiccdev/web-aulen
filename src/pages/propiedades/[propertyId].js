import React, { Fragment, useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HeadPage from '@/components/HeadPage/HeadPage';
import PropertiesContext from '@/context/properties/PropertiesContext';
import GalleryCarousel from '../../components/GalleryCorousel/GalleryCarousel';
import Details from '@/components/Section/Propiedades/Details/Details';
import Characteristics from '@/components/Section/Propiedades/Details/Characteristics';
import InformationOnTheArea from '@/components/Section/Propiedades/Details/InformationOnTheArea';
import { icons } from '../../components/Icons';
// import Characteristic from '../../src/components/Section/propiedades/details/Characteristics';
// import InformationOnTheArea from '../../src/components/Section/propiedades/details/InformationOnTheArea';

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Section/properties/details/Details.module.css';

const PropiedadId = () => {
  const { getProperty, property } = useContext(PropertiesContext);
  const [copied, setCopied] = useState(false);
  // const { query } = useRouter();
  const router = useRouter();
  const { propertyId } = router.query;
  const { HiClipboard, HiOutlineClipboardCheck } = icons;

  useEffect(() => {
    // getProperty(propertyId, 1, 1);
    getProperty(propertyId, 5, 5);
  }, [propertyId]);

 

  return (
    <Fragment>
      <HeadPage title={`Departamento ${propertyId}`} />
      <div className={styles.propertyDetailContainer}>
        <ul className={styles.propertyTypeInfo}>
          <li>
            <Link href="/propiedades">Volver al listado</Link>
          </li>
          <li>Departamentos</li>
          <li>Venta Proyectos</li>
          <li>{property?.commune}</li>
          <li>{property?.address}</li>
        </ul>

        <Row className={styles.row}>
          <Col xs={12} xl={8}>
            <GalleryCarousel items={property} />
            <Characteristics propertyData={property} />
          </Col>

          <Col xs={12} xl={4} className={styles.col}>
            <div className={styles.deptoDetailsShare}>
              <span>
                <CopyToClipboard
                  text={`https://aulen-propiedades.netlify.app/${router.asPath}`}
                  onCopy={() => setCopied(true)}
                >
                  {!copied ? (
                    <span className={styles.spanClipboard}>
                      Compartir
                      <HiClipboard />
                    </span>
                  ) : (
                    <span className={styles.spanClipboardCopied}>
                      Copiado
                      <HiOutlineClipboardCheck />
                    </span>
                  )}
                </CopyToClipboard>
              </span>{' '}
              <Link href="/" className={styles.printLink}>
                Descargar Detalles
              </Link>{' '}
            </div>
            <Details propertyData={property} />
          </Col>
        </Row>

        <InformationOnTheArea propertyData={property} />
      </div>
    </Fragment>
  );
};

export default PropiedadId;
