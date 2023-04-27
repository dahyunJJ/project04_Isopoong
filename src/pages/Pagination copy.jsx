import React from "react";

function Pagination1({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
  onPageChange,
  maxButtons,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const startIndex = Math.max(currentPage - 5, 0);
  const endIndex = Math.min(startIndex + 10, pageNumbers.length);
  const visiblePages = pageNumbers.slice(startIndex, startIndex + maxButtons);

  return (
    <div>
      <ul className="pagination">
        <button
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage === 1}
        >
          {" "}
          &lt;{" "}
        </button>
        {visiblePages.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <button className="page-link" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage === endIndex}
        >
          {" "}
          &gt;{" "}
        </button>
      </ul>
    </div>
  );
}

export default Pagination1;
