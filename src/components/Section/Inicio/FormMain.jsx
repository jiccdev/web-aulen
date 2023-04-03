import React, { Fragment, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ToastComponent from '@/components/Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../../Icons';
import styles from '../../../styles/Section/Inicio/Form.module.css';
import stylesModal from '../../../styles/Modal/Modal.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const FormMain = ({ titleContentForm, textAlign, subtitle, ...props }) => {
  const form = useRef();
  const { haveAction1, haveAction2 } = { ...props };
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    action: '',
    termsAndConditions: false,
    message: '',
    subject: '',
    lastName: '',
    meetingDate: new Date(),
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

  const handleMessage = (ev) => {
    setFormData({ ...formData, message: ev.target.value });
  };

  const handleSubject = (ev) => {
    setFormData({ ...formData, subject: ev.target.value });
  };

  const handleTermsAndConditions = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: !formData.termsAndConditions,
      message: ev.target.value === '' ? '' : 'Solicitud de información',
      subject: ev.target.value === '' ? '' : 'Solicitud de información',
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      action: '',
      termsAndConditions: false,
      message: '',
      subject: '',
      lastName: '',
      meetingDate: new Date(),
    });
  };

  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
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
      position: 'bottom-center',
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
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if ([formData.name, formData.email, formData.phone].includes('')) {
      showToastErrorMsg('Todos los campos son obligatorios');
      return;
    }
    try {
      const response = emailjs.sendForm(
        'service_qcvmtdr',
        'template_jm043df',
        form.current,
        'wXqVGHSMVQRyuvyJK'
      );

      const responseStatus = await response;
      responseStatus.status === 200 &&
        showToastSuccessMsg('Mensaje enviado con éxito');
      resetForm();
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
    }
  };

  /** On form submit */
  // const onFormSubmit = async (ev) => {
  //   ev.preventDefault();
  //   try {
  //     const response = await ContactFormServices.addContactForm(formData);
  //     if (
  //       formData.name === '' ||
  //       formData.email === '' ||
  //       formData.phone === ''
  //     ) {
  //       showToastErrorMsg('Todos los campos son obligatorios');
  //     } else {
  //       showToastSuccessMsg(response.message);
  //       resetForm();
  //     }
  //   } catch (error) {
  //     setServerErrorMsg(error.response);
  //     showToastWarningMsg('Ocurrio un error al enviar el formulario');
  //   }
  // };

  return (
    <Fragment>
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

        {/* <Form className={styles.form} onSubmit={onFormSubmit} id="planForm"> */}
        <form
          className={styles.form}
          ref={form}
          onSubmit={sendEmail}
          id="planForm"
        >
          <h3
            style={{
              textAlign: textAlign || 'left',
            }}
          >
            {titleContentForm}
          </h3>
          {subtitle === '' ? '' : <p>{subtitle}</p>}

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              <FaUserAlt />
            </Form.Label>
            <Form.Control
              className={styles.formControl}
              placeholder="Nombre"
              type="text"
              name="from_name"
              id="from_name"
              value={formData.name}
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              <BsTelephoneFill />
            </Form.Label>
            <Form.Control
              className={styles.formControl}
              placeholder="Teléfono celular"
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handlePhone}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              <MdOutlineMailOutline />
            </Form.Label>
            <Form.Control
              type="email"
              className={styles.formControl}
              placeholder="Correo electrónico"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleEmail}
            />
          </Form.Group>

          <div
            style={{
              display: 'none',
            }}
          >
            <input
              type="text"
              id="action"
              name="action"
              value={formData.action}
              onChange={() =>
                setFormData({ ...formData, action: formData.value })
              }
            />
          </div>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
              className={styles.formCheck}
              checked={formData.termsAndConditions}
              onChange={handleTermsAndConditions}
            />
          </Form.Group>

          <Row className={styles.rowBtnForm}>
            {!!haveAction1 && (
              <Col sm={12} lg={6}>
                <Form.Group className={styles.formGroup}>
                  <Button
                    type="submit"
                    className={styles.btnSubmit}
                    name="action"
                    id="button"
                    onClick={() => {
                      setFormData({ ...formData, action: 'vender' });
                    }}
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
                    name="action"
                    id="button"
                    value={formData.action}
                  >
                    {haveAction2?.text || ''}
                  </Button>
                </Form.Group>
              </Col>
            )}
          </Row>
        </form>
      </div>

      <ToastComponent />
    </Fragment>
  );
};

export default FormMain;
