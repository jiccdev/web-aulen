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
    title: 'departamento',
    href: '#departmentos',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../assets/img/SoyPropietario/house.jpg')}
        alt="card-imagen-estacionamientos"
      />
    ),
    title: 'estacionamientos',
    href: '#estacionamientos',
  },
  {
    img: (
      <Image
        className={`${styles.card__img}`}
        src={require('../../assets/img/SoyPropietario/storageroom.jpg')}
        alt="card-imagen-bodega"
      />
    ),
    title: 'bodega',
    href: '#bodegas',
  },
];
