function Pagination({ page, setPage, limit, totalCount }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
    pageNumbers.push(i);
  }

  const startIndex = Math.max(page - 5, 0);
  const endIndex = Math.min(startIndex + 10, pageNumbers.length);

  return (
    <nav className="pagination">
      <ul>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          {" "}
          &lt;{" "}
        </button>
        {pageNumbers.slice(startIndex, endIndex).map((number) => (
          <li key={number} className="page-item">
            <button
              className={`page-link ${number === page ? "active" : ""}`}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === endIndex}
        >
          {" "}
          &gt;{" "}
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
