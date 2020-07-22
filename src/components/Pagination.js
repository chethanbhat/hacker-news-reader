import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  totalStories,
  storiesPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="table-responsive my-1">
      <ul className="pagination justify-content-xl-center ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <Link to={`/${number}`}>
              <button className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <p className="d-sm-block d-md-none text-center text-muted font-weight-lighter">
        Slide to Scroll Pagination
      </p>
    </nav>
  );
};

export default Pagination;
