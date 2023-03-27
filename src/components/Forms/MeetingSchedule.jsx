import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ToastComponent from '@/components/Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../Icons';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/Forms/MeetingSchedule.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const MeetingSchedule = () => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, BsCalendarCheck } =
    icons;
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    meetingDate: new Date(),
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

  const handleLastName = (ev) => {
    setFormData({ ...formData, lastName: ev.target.value });
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
        formData.name === '' ||
        formData.email === '' ||
        formData.phone === '' ||
        formData.meetingDate === ''
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
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeading}>
        <h2>¿Quieres agendar una reunión con nosotros?</h2>
        <p>Un equipo de expertos se pondra en contacto contigo.</p>
      </div>
      <Form onSubmit={onFormSubmit} className="">
        <Row>
          <Col sm={12} md={6}>
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
          </Col>

          <Col sm={12} md={6}>
            <Form.Group
              className={styles.formGroup}
              controlId="formBasicLastName"
            >
              <Form.Label className={styles.label}>
                <FaUserAlt />
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.formControl}
                placeholder="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleLastName}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>
                <BsCalendarCheck />
              </Form.Label>
              <DatePicker
                selected={formData.meetingDate}
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    meetingDate: date,
                  })
                }
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                className={styles.datePickerCustom}
                placeholderText="Fecha y hora de la reunión"
              />
            </Form.Group>
          </Col>

          <Row className={styles.scheduleBtn}>
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <button type="submit" className={styles.btnSubmit}>
                  Agenda una reunion
                </button>
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Form>

      {/* ToastComponent Msg */}
      <div className={stylesToast.toastContainer}>
        <ToastComponent />
      </div>
    </div>
  );
};

export default MeetingSchedule;
