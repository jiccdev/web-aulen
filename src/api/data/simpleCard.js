import Image from 'next/image';
import styles from '../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const simpleCardData = [
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../assets/img/SoyPropietario/apartment.jpg')}
        alt="card-imagen-departamentos"
      />
    ),
    title: 'DEPARTAMENTOS',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../assets/img/SoyPropietario/house.jpg')}
        alt="card-imagen-estacionamientos"
      />
    ),
    title: 'ESTACIONAMIENTOS',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../assets/img/SoyPropietario/storageroom.jpg')}
        alt="card-imagen-bodega"
      />
    ),
    title: 'BODEGA',
  },
];
