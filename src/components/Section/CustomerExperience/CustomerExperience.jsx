import React, { useEffect, useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import AliceCarousel from 'react-alice-carousel';
import CustomersContext from '@/context/customers/CustomersContext';
import HeaderSection from '../HeaderSection';
import CustomerCard from '@/components/Card/CustomerCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../../../styles/Section/customer-experience/CustomerExperience.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
  1920: { items: 3 },
};

const CustomerExperience = () => {
  const { customers, getAllCustomers } = useContext(CustomersContext);

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <section
      id="customerExperience"
      className={styles.customerExperienceContainer}
    >
      <HeaderSection titleSection="Conoce la experiencia de nuestros clientes" />
      <Fade delay={200} cascade>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          items={customers?.map((customer) => (
            <Col sm={12}>
              <CustomerCard key={customer?.id} customer={customer} />
            </Col>
          ))}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2500}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          // disableDotsControls
          // disableButtonsControls
        />
      </Fade>
    </section>
  );
};

export default CustomerExperience;
