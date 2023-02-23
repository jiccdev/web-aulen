import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({ img, title, href }) => {
  const scrollToDown = () => {
    window.scrollTo({
      top: 2400,
      behavior: 'smooth',
    });
  };

  // ✅
  const router = useRouter();
  console.log(router);

  return (
    <>
      <button className={`${styles.customCol} ${styles.card}`}>
        <Link
          // href={`properties?realtorId=${5}&statusId=${5}&typeOfProperty=${1}`}
          href={`${href}`}
          onClick={() => {
            setTimeout(() => {
              scrollToDown();
            }, 500);
          }}
        >
          {img}
          <h3 className={`${styles.card__title}`}>{title}</h3>
        </Link>
      </button>
    </>
  );
};
export default SimpleCard;
