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

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/Section/properties/details/Details.module.css';
import MeetingSchedule from '@/components/Forms/MeetingSchedule';
import ModalPdf from '@/components/Modal/ModalPdf';

const PropiedadId = () => {
  const { getProperty, property } = useContext(PropertiesContext);
  const [copied, setCopied] = useState(false);
  const [showQuoteContactForm, setShowQuoteContactForm] = useState(false);
  // const { query } = useRouter();
  const router = useRouter();
  const { propertyId } = router.query;
  const { HiClipboard, HiOutlineClipboardCheck } = icons;
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getProperty(propertyId, 1, 1);
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
                {/* <CopyToClipboard
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
                </CopyToClipboard> */}
              </span>{' '}
              <Button
                className={styles.printLink}
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Visualizar PDF
              </Button>
            </div>
            <Details propertyData={property} />
          </Col>
        </Row>

        <ModalPdf
          show={modalShow}
          onHide={() => setModalShow(false)}
          propertyData={property}
        />

        <InformationOnTheArea propertyData={property} />

        {property?.installment_type === 'En blanco' ||
        property?.installment_type === 'En verde' ? (
          <div id="cotizar-contacto">
            <MeetingSchedule />
          </div>
        ) : (
          <div id="cotizar-contacto">
            <MeetingSchedule />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PropiedadId;
