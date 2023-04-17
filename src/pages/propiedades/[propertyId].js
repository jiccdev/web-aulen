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
            <Link href="/propiedades">Volver</Link>
          </li>
          <li className={styles.divider}>|</li>
          <li>{property?.commune}</li>
          <li>{property?.address}</li>
        </ul>

        <Row className={styles.row}>
          <Col xs={12} xl={9}>
            <GalleryCarousel items={property} />
            <Characteristics propertyData={property} />
          </Col>

          <Col xs={12} xl={3} className={styles.col}>
            <div className={styles.deptoDetailsShare}>
              {/* <span>
                <CopyToClipboard
                  text={`aulenpropiedades.cl/propiedades/393/?statusId=1&companyId=1`}
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
              </span>{' '} */}

              {/* aca */}
              <Button
                className={styles.printLink}
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Imprimir PDF
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
        ) : null}
      </div>
    </Fragment>
  );
};

export default PropiedadId;
