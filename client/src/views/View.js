import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/List";
import ClientLogout from "../components/ClientLogout";

const View = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);
  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id != productId));
  };
  return (
    <div>
      <div style={{ textAlign: "right", margin: "20px" }}>
        <ClientLogout />
      </div>
      <h2>All Product's</h2>
      <hr />
      {loaded && (
        <ProductList product={product} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};
export default View;
