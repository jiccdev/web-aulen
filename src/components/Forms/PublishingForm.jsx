import React, { useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { Fade } from 'react-awesome-reveal';
// import styles from '../../styles/Forms/PublishingForm.module.css';
import { icons } from '../Icons';
import { toast } from 'react-toastify';
import styles from '../../styles/Section/Inicio/Form.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const PublishingForm = () => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;
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
    setFormData({
      ...formData,
      termsAndConditions: !formData.termsAndConditions,
    });
  };

  console.log(formData.termsAndConditions);

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

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await ContactFormServices.addContactForm(formData);
      console.log(formData);

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
    <Fade delay={200} direction="right" cascade>
      <Form className={styles.form} onSubmit={onFormSubmit} id="planForm">
        {/* <h3
          style={{
            textAlign: textAlign || 'left',
          }}
        >
          {titleContentForm}
        </h3>
        {subtitle === '' ? '' : <p>{subtitle}</p>} */}

        <h2>Despreocúpate por tu propiedad de inversión!</h2>
        <h3>COMPLETA EL FORMULARIO Y ENTÉRATE CÓMO</h3>

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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
            checked={formData.termsAndConditions}
            onChange={handleTermsAndConditions}
          />
        </Form.Group>

        <Col
          sm={12}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: '1rem auto',
          }}
        >
          <Form.Group
            className={styles.formGroup}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Button
              type="submit"
              onClick={() => {
                setFormData({ ...formData, action: 'vender' });
              }}
              className={styles.btnSubmit}
            >
              Quiero vender
            </Button>
          </Form.Group>
        </Col>
      </Form>

      {/* ToastComponent Msg */}
      <ToastComponent />

      {/* Formulario original */}
      {/* <form className={`${styles.customCol} ${styles.form}`}>
        <header className={`${styles.customCol} ${styles.form__header}`}>
          <h2>{formData?.h2}</h2>
          <h3>{formData?.h3}</h3>
        </header>
        <main className={`${styles.customCol} ${styles.form__inputs}`}>
          <div className={`${styles.customRow} ${styles.form__inputs__name}`}>
            <FaUserAlt className={styles.formIcon} />
            <input type="text" placeholder="Nombre" />
          </div>
          <div className={`${styles.customRow} ${styles.form__inputs__tel}`}>
            <BsTelephoneFill className={styles.formIcon} />
            <input type="text" placeholder="Teléfono celular" />
          </div>
          <div className={`${styles.customRow} ${styles.form__inputs__email}`}>
            <MdOutlineMailOutline className={styles.formIcon} />
            <input type="text" placeholder="Correo electrónico" />
          </div>
          <label className={styles.customRow}>
            <input
              type="checkbox"
              id="publishingFormTerms"
              value="form_terms"
            />
            Al continuar estás aceptando los términos y condiciones y la
            política de privacidad.
          </label>
        </main>
        <button className={styles.form__btn}>{formData?.btn}</button>
      </form> */}
    </Fade>
  );
};

export default PublishingForm;
