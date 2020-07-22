import React from "react";

const InlineSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow spinner-grow-sm mr-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm mr-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm mr-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default InlineSpinner;
