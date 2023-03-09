import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import ToastComponent from '@/components/Toastify/ToastComponent';
import { toast } from 'react-toastify';
import houseImg from '../../assets/img/SoyPropietario/house.jpg';
import { icons } from '../Icons';
import styles from '../../styles/Forms/InvestmentForm.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';

/** API services */
import ContactFormServices from '@/services/ContactFormServices';

const InvestmentForm = ({ formData, isForm }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    action: '',
    termsAndConditions: false,
  });

  const { h2, h3, btn } = formData;
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;

  const handleName = (ev) => {
    setData({ ...data, name: ev.target.value });
  };

  const handleEmail = (ev) => {
    setData({ ...data, email: ev.target.value });
  };

  const handlePhone = (ev) => {
    setData({ ...data, phone: ev.target.value });
  };

  const handleAction = (ev) => {
    setData({ ...data, action: ev.target.value });
  };

  const handleTermsAndConditions = (ev) => {
    setData({
      ...data,
      termsAndConditions: !data.termsAndConditions,
    });
  };

  const resetForm = () => {
    setData({
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
      const response = await ContactFormServices.addContactForm(data);
      if (data.name === '' || data.email === '' || data.phone === '') {
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

  console.log(data);

  return (
    <Fragment>
      <form
        onSubmit={onFormSubmit}
        className={`${styles.customRow} ${styles.mainContainer}`}
      >
        <div className={`${styles.customRow} ${styles.submainContainer}`}>
          <Image className={styles.image} src={houseImg} alt="imagen-house" />
          <div className={`${styles.customCol} ${styles.form}`}>
            <header className={`${styles.customCol} ${styles.form__header}`}>
              <h2>{formData.h2}</h2>
              <h3>{formData.h3}</h3>
            </header>
            {isForm ? (
              <main className={`${styles.customCol} ${styles.form__inputs}`}>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__name}`}
                >
                  <FaUserAlt className={styles.formIcon} />
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Nombre"
                    name="name"
                    value={data.name}
                    onChange={handleName}
                  />
                </div>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__tel}`}
                >
                  <BsTelephoneFill className={styles.formIcon} />
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Teléfono celular"
                    name="phone"
                    value={data.phone}
                    onChange={handlePhone}
                  />
                </div>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__email}`}
                >
                  <MdOutlineMailOutline className={styles.formIcon} />
                  <input
                    type="email"
                    className={styles.formControl}
                    placeholder="Correo electrónico"
                    name="email"
                    value={data.email}
                    onChange={handleEmail}
                  />
                </div>
              </main>
            ) : null}

            <button
              type="submit"
              className={styles.form__btn}
              onClick={() => {
                setData({ ...data, action: 'vender' });
              }}
            >
              {isForm ? formData.btn : 'Agenda una reunión'}
            </button>
          </div>
        </div>
      </form>

      {/* ToastComponent Msg */}
      <div className={stylesToast.toastContainer}>
        <ToastComponent />
      </div>
    </Fragment>
  );
};

export default InvestmentForm;
