import React from 'react';
import PlanForm from '../Forms/PlanForm';

/** Bootstrap components */
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/Modal/ModalPlanForm.module.css';

const ModalPlanForm = ({ ...props }) => {
  return (
    <Modal
      {...props}
      size="auto"
      aria-labelledby="contained-modal-title-vcenter"
      className={styles.modal}
      centered
    >
      <PlanForm props={props} />
    </Modal>
  );
};

export default ModalPlanForm;
