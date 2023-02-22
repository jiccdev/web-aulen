import React, { Fragment } from 'react';
import { Fade } from 'react-awesome-reveal';
import IconNumber from './IconNumber';
import { OurServicesData } from '../../../../api/data/ourServices';
import styles from '../../../../styles/Section/soy-propietario/quiero-arrendar/OurServices/OurServices.module.css';

export const OurServices = () => {
  return (
    <Fragment>
      {OurServicesData.length > 0
        ? OurServicesData?.map((el) => (
            <div
              key={el.id}
              className={`${styles.customCol} ${styles.OurServiceContainer}`}
              data-aos="fade-up"
              data-aos-delay={`${el.id * 100}`}
            >
              <Fade delay={100} direction="left" cascade>
                {el.img}
                <IconNumber elNumber={el.id} />
                <p>
                  <span className={`${styles.boldP}`}>{el.span}</span>
                  {el.p}
                </p>
              </Fade>
            </div>
          ))
        : null}
    </Fragment>
  );
};

export default OurServices;
