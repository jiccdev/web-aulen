import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { icons } from '../../../../components/Icons';
import styles from '../../../../styles/Section/soy-propietario/quiero-vender/StepsSection/StepsSection.module.css';

const StepsSection = () => {
  const { BsPuzzle, BsCardChecklist, RiMoneyDollarCircleLine, BsFillGearFill } =
    icons;
  return (
    <section className={`${styles.customCol} ${styles.stepSectionContainer}`}>
      <Fade delay={200} direction="left" cascade>
        <main className={`${styles.customCol} ${styles.mainContainer}`}>
          <header className={`${styles.customCol} ${styles.stepHeader}`}>
            <h2>Vendemos tu propiedad en cuatro simples pasos</h2>
            <h3>
              Evalúa en cuanto han vendido propiedades similares en tu sector
            </h3>
          </header>
          <div className={`${styles.customCol} ${styles.iconDivsContainer}`}>
            <div className={`${styles.customRow} ${styles.stepsContainer}`}>
              <BsPuzzle className={`${styles.stepIcon}`} />
              <p>
                Presentamos un estudio estratégico de acuerdo a tus objetivos y
                necesidades, respaldado por las ventas históricas y ofertas del
                sector.
              </p>
            </div>
            <div className={`${styles.customRow} ${styles.stepsContainer}`}>
              <BsCardChecklist className={`${styles.stepIcon}`} />
              <p>
                Publicamos tu propiedad en los 43 portales inmobiliarios mas
                importantes del país, con sesión de fotos y videos profesionales
                para que tu activo tenga el mayor alcance.
              </p>
            </div>
            <div className={`${styles.customRow} ${styles.stepsContainer}`}>
              <BsFillGearFill className={`${styles.stepIcon}`} />
              <p>
                Realizamos vistas con potenciales clientes a tu propiedad, para
                que recibas ofertas garantizadas.
              </p>
            </div>
            <div className={`${styles.customRow} ${styles.stepsContainer}`}>
              <RiMoneyDollarCircleLine className={`${styles.stepIcon}`} />
              <p>
                ¡Conseguimos a tu comprador ideal! y te acompañamos en todo el
                proceso de postventa junto al respaldo de nuestro equipo legal
                hasta la entrega de la propiedad y liberación de valores.
              </p>
            </div>
          </div>
        </main>
      </Fade>
    </section>
  );
};

export default StepsSection;
