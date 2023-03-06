import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../../styles/Spinner/Spinner.module.css';

const SpinnerComponent = ({ size, variant }) => {
  return (
    <div className={styles.containerSpinner}>
      <Spinner animation="border" role="status" variant={variant} size={size}>
        <span className="visually-hidden">Cargando propiedades...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerComponent;
