import React, { useEffect, useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import PropertiesContext from '@/context/properties/PropertiesContext';
import HeaderSection from '../../HeaderSection';
import PropertyCard from '@/components/Card/PropertyCard';
import styles from '../../../../styles/Section/properties/OutstandingProjects/OutstandingProjects.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 3 },
  1920: { items: 3 },
};

const OutstandingProjects = () => {
  const { properties, getProperties } = useContext(PropertiesContext);

  useEffect(() => {
    getProperties(5, 5);
  }, []);

  return (
    <section id="outstandingProjects">
      <HeaderSection titleSection="Proyectos destacados" />

      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        items={properties
          ?.filter((property) => property?.highlighted === true)
          .map((property) => (
            <Col sm={12} key={property?.id}>
              <PropertyCard key={property?.id} property={property} />
            </Col>
          ))}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2500}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
      />
    </section>
  );
};

export default OutstandingProjects;
