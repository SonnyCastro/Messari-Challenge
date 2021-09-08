import React from "react";
import "../App.css";

interface IPAGINATIONPROPS {
  buttons: string[];
  buttonsPerPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination = (props: IPAGINATIONPROPS) => {
  const { buttons, buttonsPerPage, setCurrentPage } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(buttons.length / buttonsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="assetsPaginationContainer">
      <p className="assetPaginationTitle">Asset pagination 👇🏽</p>
      <small>Total of 4 pages with 5 assets per page </small>
      <div className="paginationContainer">
        {pageNumbers.map((number: any) => (
          <button className="btn" onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
