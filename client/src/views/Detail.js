import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, useNavigate } from "@reach/router";
import ClientLogout from "../components/ClientLogout";

const Detail = (props) => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id).then((res) =>
      setProduct({
        ...res.data,
      })
    );
  });
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
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export default Detail;
