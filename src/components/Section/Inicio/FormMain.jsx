import React, { useState } from 'react';
import Link from 'next/link';
import ToastComponent from '@/components/Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../../Icons';
import styles from '../../../styles/Section/Inicio/Form.module.css';
import stylesToast from '../../../styles/Toastify/toastContainer.module.css';
import stylesModal from '../../../styles/Modal/Modal.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const FormMain = ({ titleContentForm, textAlign, subtitle, ...props }) => {
  const { haveAction1, haveAction2 } = { ...props };
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    action: '',
    termsAndConditions: false,
  });

  const handleName = (ev) => {
    setFormData({ ...formData, name: ev.target.value });
  };

  const handleEmail = (ev) => {
    setFormData({ ...formData, email: ev.target.value });
  };

  const handlePhone = (ev) => {
    setFormData({ ...formData, phone: ev.target.value });
  };

  const handleAction = (ev) => {
    setFormData({ ...formData, action: ev.target.value });
  };

  const handleTermsAndConditions = (ev) => {
    setFormData({ ...formData, termsAndConditions: ev.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      action: '',
      termsAndConditions: false,
    });
  };

  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const showToastWarningMsg = (msg) => {
    toast.warn(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On form submit */
  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await ContactFormServices.addContactForm(formData);
      if (
        formData.name === '' &&
        formData.email === '' &&
        formData.phone === ''
      ) {
        showToastErrorMsg('Todos los campos son obligatorios');
      } else {
        showToastSuccessMsg(response.message);
        resetForm();
      }
    } catch (error) {
      setServerErrorMsg(error.response);
      showToastWarningMsg('Ocurrio un error al enviar el formulario');
    }
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

      <Form className={styles.form} onSubmit={onFormSubmit} id="planForm">
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
            value={formData.name}
            onChange={handleName}
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
            value={formData.phone}
            onChange={handlePhone}
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
            value={formData.email}
            onChange={handleEmail}
          />
        </Form.Group>

        <Row className={styles.rowBtnForm}>
          {!!haveAction1 && (
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <Button
                  type="submit"
                  onClick={() => {
                    setFormData({ ...formData, action: 'vender' });
                  }}
                  className={styles.btnSubmit}
                >
                  {haveAction1?.text || ''}
                </Button>
              </Form.Group>
            </Col>
          )}

          {!!haveAction2 && (
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <Button
                  type="submit"
                  onClick={() =>
                    setFormData({ ...formData, action: 'arrendar' })
                  }
                  className={styles.btnSubmit}
                >
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

      {/* ToastComponent Msg */}
      <div className={stylesToast.toastContainer}>
        <ToastComponent />
      </div>
    </div>
  );
};

export default FormMain;
