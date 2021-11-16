import React from "react";
import axios from "axios";

function Delete(props) {
  const { productId, successCallback } = props;
  const deleteProduct = (e) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`, {
        withCredentials: true,
      })
      .then((response) => {
        successCallback();
      });
  };
  return (
    <div>
      <button
        onClick={deleteProduct}
        type="button"
        className="btn btn-secondary"
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
