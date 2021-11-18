import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, useNavigate } from "@reach/router";
import ClientLogout from "../components/ClientLogout";
import CartForm from "../components/CartForm";

const Detail = (req) => {
  const [product, setProduct] = useState([]);
  console.log(product);
  console.log(req.id);
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${req.id}`)
      .then((res) => {
        setProduct(res.data);
        // setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "right", margin: "20px" }}>
        <ClientLogout />
      </div>

      <div>
        <p>Title: {product.title}</p>
        <p>About: {product.about}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Brand: {product.brand}</p>
        <hr />
      </div>
      <div>
        <p>Price: ${product.price}</p>
        <CartForm pdtId={product._id} />
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export default Detail;
