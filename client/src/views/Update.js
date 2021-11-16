import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import ProductForm from "../components/ProductForm";

function Update(props) {
  const { id } = props;
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const [authError, setAuthError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, product, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.status === 404) {
          console.log("404");
          setAuthError("you must first login to update a product");
        }
        setErrors(err.response.data);
      });
  };
  return (
    <div id="edit_page">
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
        <h2
          style={{
            maxWidth: "500px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            fontFamily: "fantasy",
          }}
        >
          Edit Product
        </h2>
        <p style = {{ textAlign: "center" }}>
          <Link to="/home">Home</Link>
        </p>
        {authError && <h3>{authError}</h3> }
        {loaded && (
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialBrand={product.brand}
            initialQuantity={product.quantity}
            initialAbout={product.about}
            initialImageLink={product.imageLink}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
}

export default Update;
