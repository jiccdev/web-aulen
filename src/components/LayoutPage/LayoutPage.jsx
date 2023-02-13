import React, { useState } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import FooterPage from '../FooterPage/FooterPage';
import DropDownSocialMedia from '../DropDownSocialMedia/DropDownSocialMedia';
import ModalPlanForm from '../Modal/ModalPlanForm';
import styles from '../../styles/Layout/Layout.module.css';

/** Bootstrap components */
import Container from 'react-bootstrap/Container';

const LayoutPage = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** Handle modal */
  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <React.Fragment>
      <Container fluid className="m-0 p-0">
        {/* HEADER */}
        <HeaderPage />

        {/* MAIN CONTENT APP */}
        <Container fluid className={styles.layout}>
          <main>{children}</main>
        </Container>

        {/* FOOTER */}
        <FooterPage />

        {/* DROPDOWN SOCIAL MEDIA */}
        <DropDownSocialMedia
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleModal={handleModal}
        />

        {/* Modal */}
        {isModalOpen && (
          <ModalPlanForm
            show={isModalOpen}
            onHide={() => setIsModalOpen(false)}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default LayoutPage;
