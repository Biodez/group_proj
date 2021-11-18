import React, { useEffect, useState } from "react";
import axios from "axios";
import ClientLogout from "../components/ClientLogout";
import CartForm from "../components/CartForm";
import { Link } from "@reach/router";

const View = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState([]);
  // console.log(user);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err.response));
  }, [loaded]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setProduct(res.data);
      setLoaded(!loaded);
    });
  }, []);

  return (
    <div>
      <div style={{ textAlign: "right", margin: "20px" }}>
        <ClientLogout />

        {user && user.cart && <p>{user.cart.length} items in your cart</p>}
      </div>
      <h2>All Product's</h2>
      <hr />
      {product.map((product, idx) => {
        return (
          <div className="list" key={idx}>
            <div>
              <hr />
              <img className="viewImg" src={product.imageLink} alt="box" />
              <h3>About</h3>
              <Link
                style={{ marginRight: "10px" }}
                to={`/product/${product._id}`}
              >
                Name: {product.title}
              </Link>
              {/* <p>Name: {product.title}</p> */}
              <p>Description: {product.about}</p>
              <p>Brand: {product.brand}</p>
            </div>

            <div>
              <hr />
              <p>Price: ${product.price}</p>
              <button>Buy Now</button>
              <CartForm
                pdtId={product._id}
                loaded={loaded}
                setLoaded={setLoaded}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default View;
