import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { navigate } from "@reach/router";
import Logout from "../components/Logout";

function Main() {
  const [product, setProduct] = useState([]);
  // const [authError, setAuthError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createProduct = (newProduct) => {
    axios
      .post("http://localhost:8000/api/product", newProduct, {
        withCredentials: true,
      })
      .then((response) => {
        setProduct([...product, response.data]);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        // if (err.response.status === 401) {
        //   console.log("401");
        //   setAuthError("you must first login to add a product");
        // }
        setErrors(err.response.data);
      });
  };
  return (
    <div id="main">
      <h2
        style={{
          maxWidth: "700px",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          fontFamily: "fantasy",
        }}
      >
        Admin Portal to add Product
      </h2>
      <Logout />
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialBrand=""
        initialQuantity=""
        initialAbout=""
        initialImageLink=""
        errors={errors}
        // authError={authError}
      />
    </div>
  );
}

export default Main;
