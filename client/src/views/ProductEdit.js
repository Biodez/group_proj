import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Delete from "../components/Delete";
import Logout from "../components/Logout";

function ProductEdit() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    let filteredProduct = products.filter(
      (product) => product._id !== productId
    );
    setProducts(filteredProduct);
  };

  return (
    <div id = "update_page">
      <div
        style={{
          maxWidth: "90%",
          width: "100%",
          margin: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
        }}
      >
        <p style={{ textAlign: "center" }}>
          <Link to="/product">Add Product</Link> |{" "}
          <Link to="/#">User List</Link>
        </p>
        <Logout />
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Brand</th>
              <th>About</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              products
                .sort(function (a, b) {
                  return a.title.localeCompare(b.title);
                })
                .map((product, index) => (
                  <tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.brand}</td>
                    <td>{product.about}</td>
                    <td>
                      <Link to={`/edit/${product._id}`}>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ margin: "10px" }}
                        >
                          Edit
                        </button>
                      </Link>
                      <Delete
                        productId={product._id}
                        successCallback={() => removeFromDom(product._id)}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductEdit;
