import React, { useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../../components/Icons';
import styles from '../../styles/Forms/PlanForm.module.css';
import stylesModal from '../../styles/Forms/PlanForm.module.css';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const PlanFrom = ({ props }) => {
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    action: '',
    termsAndConditions: false,
  });
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;

  const handleName = (ev) =>
    setFormData({ ...formData, name: ev.target.value });

  const handleEmail = (ev) =>
    setFormData({ ...formData, email: ev.target.value });

  const handlePhone = (ev) =>
    setFormData({ ...formData, phone: ev.target.value });

  const handleAction = (ev) =>
    setFormData({ ...formData, action: ev.target.value });

  const handleTermsAndConditions = (ev) =>
    setFormData({
      ...formData,
      termsAndConditions: !formData.termsAndConditions,
    });

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
        <h3>¡Despreocúpate por tú propiedad de inversión!</h3>
        <p>Completa el formulacio y entérate como</p>
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

        <Form.Group
          className={`${styles.formGroup && styles.formGroupCheck}`}
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
            className={styles.formCheck}
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleTermsAndConditions}
          />
        </Form.Group>

        <Col sm={12} lg={12}>
          <Form.Group className={styles.formGroup}>
            <Button
              type="submit"
              onClick={() => {
                setFormData({ ...formData, action: 'vender' });
              }}
              className={styles.btnSubmit}
            >
              {/* EN DESARROLLO ❌  */}
              Quiero que me contacten
            </Button>
          </Form.Group>
        </Col>
      </Form>

      <ToastComponent />
    </div>
  );
};

export default PlanFrom;
