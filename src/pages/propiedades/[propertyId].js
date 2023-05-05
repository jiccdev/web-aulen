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
import VistaPdf from './VistaPdf';
import { PDFViewer } from '@react-pdf/renderer';

import styles2 from '../../styles/Modal/ModalDesing.module.css';

/** Bootstrap componets */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/Section/properties/details/Details.module.css';
import MeetingSchedule from '@/components/Forms/MeetingSchedule';
import ModalPdf from '@/components/Modal/ModalPdf';
import ModalTest from '@/components/Modal/ModalTest';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PropiedadId = () => {
  const { getProperty, property } = useContext(PropertiesContext);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { propertyId } = router.query;
  const { HiClipboard, HiOutlineClipboardCheck } = icons;
  const [modalShow, setModalShow] = React.useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProperty(propertyId, 1, 15);
  }, [propertyId]);

  
  /** Render Property detail */
  const renderContentPdf = () => (
    <PDFViewer>
      <VistaPdf property={property} />
    </PDFViewer>
  );


  return (
    <Fragment>
      <HeadPage title={`Propiedad ${propertyId}`} />
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
                onClick={() => setShow(true)}
               
              >
                Descargar PDF
              </Button>
            </div>
            <Details propertyData={property} />
          </Col>
        </Row>

        {/* <ModalPdf
          show={modalShow}
          onHide={() => setModalShow(false)}
          propertyData={property}
        /> */}

       {/*  <ModalTest
          renderTrigger={() => null}
          isOpenProp={showModalDetail}
          propertyData={property}
          renderContent={renderContentPdf}
          contentExtraClass=""
          onCloseModal={() => {
            setShowModalDetail(false);
          }}
        /> */}

        <InformationOnTheArea propertyData={property} />

        {property?.installment_type === 'En blanco' ||
        property?.installment_type === 'En verde' ? (
          <div id="cotizar-contacto">
            <MeetingSchedule />
          </div>
        ) : null}
      </div>

      <Modal show={show} onHide={handleClose} >
        
        <div className={styles2.modalContent}>
        <Modal.Header closeButton className={styles2.modalHeader}>
          <Modal.Title>Descargar PDF</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles2.modalBody}  >
          {renderContentPdf()}
        </Modal.Body>

        <Modal.Footer>  
        </Modal.Footer>
        </div>
      </Modal>



    </Fragment>
  );
};

export default PropiedadId;
