import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/Forms/PublishingForm.module.css';
import { icons } from '../Icons';

const PublishingForm = ({ formData }) => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;

  return (
    <Fade delay={200} direction="right" cascade>
      <form className={`${styles.customCol} ${styles.form}`}>
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
      </form>
    </Fade>
  );
};

export default PublishingForm;
