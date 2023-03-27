import React, { createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/Modal/ModalPdf.module.css';
import Image from 'next/image';
import LogoUnne from '../../assets/img/LogoSite/LOGO-AULEN-PROPIEDADES.png';
import Pdf from 'react-to-pdf';

const ModalPdf = ({ propertyData, ...props }) => {
  const ref = createRef();

  const { company } = propertyData;
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody} ref={ref}>
          <header className={styles.header}>
            <div className={styles.headerSection}>
              <div className={styles.logoAndName}>
                <Image
                  src={LogoUnne}
                  alt="logo-unne"
                  width={200}
                  height="auto"
                />
              </div>
              <div>
                <h2>{company?.name}</h2>
                <p>
                  <b>N. Propiedad</b> #{propertyData?.id}
                </p>
                <p>
                  <b>Titulo</b>: {propertyData?.title}
                </p>
                <p>
                  <b>Valor: </b> {propertyData?.price} clp
                </p>
              </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.headerSection}>
              <div className={styles.billTo}>
                <p>
                  <b>Cliente</b>
                  <br />
                  {company?.name}
                  <br />
                  {propertyData.commune}, {propertyData.city},{' '}
                  {propertyData.address}
                  <br />
                  <a href="mailto:clientname@clientwebsite.com">
                    clientname@clientwebsite.com
                  </a>
                  <br />
                  {propertyData?.operation} {propertyData?.status}
                </p>
              </div>
            </div>
          </header>

          <main>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Detalles de Propiedad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Dormitorios</b>
                    <br />
                  </td>
                  <td>{propertyData?.bedrooms || 'Sin dormitorios'}</td>
                </tr>
                <tr>
                  <td>
                    <b>Banos</b>
                    <br />
                  </td>
                  <td>
                    <td>{propertyData?.bathrooms || 'Sin banos'}</td>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </Modal.Body>
        <Modal.Footer>
          <Pdf targetRef={ref} filename="detalle-propiedad.pdf">
            {({ toPdf }) => (
              <Button className={styles.printLink} onClick={toPdf}>
                Descargar
              </Button>
            )}
          </Pdf>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPdf;
