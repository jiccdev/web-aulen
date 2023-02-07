import React from 'react';
import Link from 'next/link';
import { icons } from '../../Icons';
import styles from '../../../styles/Section/Inicio/Form.module.css';
import stylesModal from '../../../styles/Modal/Modal.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormMain = ({ titleContentForm, textAlign, subtitle, ...props }) => {
  const { haveAction1, haveAction2 } = { ...props };
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;

  /** On form submit */
  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      {props?.show ? (
        <div
          className={stylesModal.closeModal}
          onClick={() => props.setIsModalOpen(!props.isModalOpen)}
        >
          <span>
            <GrClose />
          </span>
        </div>
      ) : (
        ''
      )}

      <Form className={styles.form} onSubmit={onSubmit} id="planForm">
        <h3
          style={{
            textAlign: textAlign || 'left',
          }}
        >
          {titleContentForm}
        </h3>
        {subtitle === '' ? '' : <p>{subtitle}</p>}

        <Form.Group className={styles.formGroup} controlId="formBasicName">
          <Form.Label className={styles.label}>
            <FaUserAlt />
          </Form.Label>
          <Form.Control
            type="text"
            className={styles.formControl}
            placeholder="Nombre"
            name="name"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicPhone">
          <Form.Label className={styles.label}>
            <BsTelephoneFill />
          </Form.Label>
          <Form.Control
            type="text"
            className={styles.formControl}
            placeholder="Teléfono celular"
            name="phone"
          />
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.label}>
            <MdOutlineMailOutline />
          </Form.Label>
          <Form.Control
            type="email"
            className={styles.formControl}
            placeholder="Correo electrónico"
            name="email"
          />
        </Form.Group>

        <Row className={styles.rowBtnForm}>
          {!!haveAction1 && (
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <Button type="submit" className={styles.btnSubmit}>
                  {haveAction1?.text || ''}
                </Button>
              </Form.Group>
            </Col>
          )}

          {!!haveAction2 && (
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <Button type="submit" className={styles.btnSubmit}>
                  {haveAction2?.text || ''}
                </Button>
              </Form.Group>
            </Col>
          )}
        </Row>

        <Form.Group className={styles.formGroup} controlId="formBasicCheckbox">
          <Link href="/" target="_blank" className={styles.formCheck}>
            Al continuar estás aceptando los términos y condiciones y la
            política de privacidad
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormMain;
