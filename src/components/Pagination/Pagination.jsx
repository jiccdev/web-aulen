import React from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { icons } from '../Icons';
import styles from '../../styles/Pagination/Pagination.module.css';

const PaginationComponent = ({
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
  metaData,
}) => {
  const { IoMdArrowDropleft, IoMdArrowDropright } = icons;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    paginate(metaData.page + 1);
  };

  const prevPage = () => {
    paginate(metaData.page - 1);
  };

  return (
    <Pagination
      aria-label="Page navigation example"
      className={styles.paginationContainer}
    >
      <PaginationItem
        disabled={metaData.page - 1 === 0 ? true : false}
        className={styles.paginationItem}
      >
        <PaginationLink
          className="page-link-prev"
          onClick={(ev) => {
            ev.preventDefault();
            prevPage();
          }}
          href="#prev"
        >
          <span>
            <IoMdArrowDropleft className={styles.arrowIcon} />
          </span>
        </PaginationLink>
      </PaginationItem>
      
      {pageNumbers?.map((item, idx) => {
        return (
          <PaginationItem
            className={currentPage === item ? styles.paginationLinkActive : ''}
            key={idx}
          >
            <PaginationLink
              tag="a"
              href="#pageitem"
              onClick={(ev) => {
                ev.preventDefault();
                paginate(item);
              }}
              className={styles.paginationLink}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        );
      })}

      <PaginationItem
        disabled={pageNumbers[pageNumbers.length - 1] === metaData.page}
      >
        <PaginationLink
          className="page-link-next"
          onClick={(ev) => {
            ev.preventDefault();
            nextPage();
          }}
          href="#next"
        >
          <span>
            <IoMdArrowDropright className={styles.arrowIcon} />
          </span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
