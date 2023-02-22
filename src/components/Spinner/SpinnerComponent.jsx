import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../../styles/Spinner/Spinner.module.css';

const SpinnerComponent = ({ variant }) => {
  return (
    <div className={styles.containerSpinner}>
      <Spinner animation="border" role="status" variant={variant}>
        <span className="visually-hidden">Cargando propiedades...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerComponent;
